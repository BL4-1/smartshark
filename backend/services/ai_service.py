import os
import time
import logging
import re
from collections import deque
from backend.utils.rate_limit import RateLimiter
from dotenv import load_dotenv
from pathlib import Path

_limiter = RateLimiter()
_CACHE_TTL_SEC = 3600
_CACHE_MAX = 1000
_cache_store = {}
_cache_keys = deque()

PROMPT_STYLE = (
    "You are SmartShark, a clear, neutral academic tutor for late teens.\n"
    "Explain concisely with simple reasoning. No age references or disclaimers.\n"
    "Subject: {subject}\n"
    "Question: {sanitized_question}"
)

def _enabled() -> bool:
    return os.getenv("AI_ENABLED", "true").lower() in ("1", "true", "yes", "on")

def _sanitize_output(text: str) -> str:
    s = text.strip()
    parts = [p.strip() for p in s.split("\n\n") if p.strip()]
    s = "\n\n".join(parts[:5])
    s = s.encode("ascii", "ignore").decode()
    return s

def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip().lower())

def _cache_key(user_id: int, subject: str, question: str) -> str:
    return f"{int(user_id)}::{_norm(subject)}::{_norm(question)}"

def _cache_get(key: str):
    v = _cache_store.get(key)
    if not v:
        return None
    ans, ts = v
    if time.time() - ts > _CACHE_TTL_SEC:
        try:
            del _cache_store[key]
        except KeyError:
            pass
        return None
    return ans

def _cache_put(key: str, answer: str):
    if key in _cache_store:
        _cache_store[key] = (answer, time.time())
        return
    _cache_store[key] = (answer, time.time())
    _cache_keys.append(key)
    if len(_cache_keys) > _CACHE_MAX:
        old = _cache_keys.popleft()
        _cache_store.pop(old, None)

def ask(user_id: int, subject: str, question: str):
    try:
        base = Path(__file__).resolve()
        env_path = None
        for parent in list(base.parents)[:5]:
            candidate = parent / ".env"
            if candidate.exists():
                env_path = candidate
                break
        if env_path:
            load_dotenv(dotenv_path=str(env_path))
    except Exception:
        pass
    if not _enabled():
        return {"answer": None, "error": "ai_disabled"}
    subject = subject or ""
    cleaned_q = _norm(question)
    if not cleaned_q:
        return {"error": "empty_question"}
    k = _cache_key(user_id, subject, cleaned_q)
    cached = _cache_get(k)
    if cached:
        logging.info("ai cache hit")
        return {"answer": cached}
    if not _limiter.allow_user(user_id, limit=10, window_sec=3600):
        return {"error": "rate_limited"}
    if not _limiter.allow_global_daily(limit=1000):
        return {"error": "global_cap_reached"}
    try:
        from backend.config import GEMINI_API_KEY as _CFG_KEY
    except Exception:
        _CFG_KEY = None
    def _read_env_key():
        try:
            p = None
            for parent in list(Path(__file__).resolve().parents)[:5]:
                candidate = parent / ".env"
                if candidate.exists():
                    p = candidate
                    break
            if not p:
                return None
            with open(p, "r", encoding="utf-8") as fh:
                for line in fh:
                    if line.startswith("GEMINI_API_KEY="):
                        return line.split("=", 1)[1].strip()
        except Exception:
            return None
    os_key = os.getenv("GEMINI_API_KEY")
    file_key = _read_env_key()
    api_key = os_key or os.getenv("GOOGLE_API_KEY") or _CFG_KEY or file_key
    logging.info("ai key sources os=%s cfg=%s file=%s", bool(os_key), bool(_CFG_KEY), bool(file_key))
    if api_key:
        logging.info("gemini key present")
    if not api_key:
        logging.warning("gemini missing api key")
        return {"error": "ai_unavailable"}
    try:
        prompt = PROMPT_STYLE.format(subject=subject, sanitized_question=cleaned_q)
        answer = ""
        models_to_try = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-latest",
            "gemini-1.0-pro",
            "gemini-pro",
        ]
        try:
            import google.generativeai as genai
            genai.configure(api_key=api_key)
            for mname in models_to_try:
                try:
                    model = genai.GenerativeModel(mname)
                    response = model.generate_content(prompt)
                    answer = (getattr(response, "text", "") or "").strip()
                    if not answer:
                        try:
                            cands = getattr(response, "candidates", None) or []
                            for cand in cands:
                                content = getattr(cand, "content", None)
                                parts = getattr(content, "parts", []) if content else []
                                for part in parts:
                                    t = getattr(part, "text", None)
                                    if t:
                                        answer = t.strip()
                                        break
                                if answer:
                                    break
                        except Exception:
                            pass
                        try:
                            pf = getattr(response, "prompt_feedback", None)
                            blocked = getattr(pf, "blocked", None) or getattr(pf, "block_reason", None)
                            if blocked:
                                return {"error": "unsafe_topic"}
                        except Exception:
                            pass
                    if answer:
                        logging.info("gemini answer via google-generativeai model=%s", mname)
                        break
                except Exception:
                    continue
        except Exception:
            pass
        if not answer:
            try:
                from google.genai import Client
                client = Client(api_key=api_key)
                for mname in models_to_try:
                    try:
                        response = client.models.generate_content(model=mname, contents=prompt)
                        answer = (getattr(response, "text", None) or "").strip()
                        if not answer:
                            try:
                                cands = getattr(response, "candidates", None) or []
                                if cands:
                                    cand = cands[0]
                                    content = getattr(cand, "content", None)
                                    parts = getattr(content, "parts", []) if content else []
                                    for part in parts:
                                        t = getattr(part, "text", None)
                                        if t:
                                            answer = t.strip()
                                            break
                            except Exception:
                                pass
                            try:
                                pf = getattr(response, "prompt_feedback", None)
                                blocked = getattr(pf, "blocked", None) or getattr(pf, "block_reason", None)
                                if blocked:
                                    return {"error": "unsafe_topic"}
                            except Exception:
                                pass
                        if answer:
                            logging.info("gemini answer via google-genai model=%s", mname)
                            break
                    except Exception:
                        continue
            except Exception:
                logging.exception("gemini call failed")
                return {"error": "ai_error"}
        if not answer:
            return {"error": "empty_answer"}
        answer = _sanitize_output(answer)
        _cache_put(k, answer)
        try:
            # log global usage count only (no personal data)
            logging.info("ai usage global_count=%s", _limiter.global_day.get("count"))
        except Exception:
            pass
        logging.info("ai answer uid=%s subject=%s", user_id, subject)
        return {"answer": answer}
    except Exception:
        logging.exception("ai unexpected failure")
        return {"error": "ai_error"}
