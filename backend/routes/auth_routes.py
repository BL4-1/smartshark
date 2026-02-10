import re
import time
import logging
from collections import deque
from flask import Blueprint, request, jsonify, session
from backend.services.auth_service import register_user, login_user

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

_login_attempts = {}
_register_attempts = {}
_blocked_ips = {}
_BLOCK_DURATION_SEC = 300

def _ip():
    return request.headers.get("X-Forwarded-For", request.remote_addr or "unknown")

def _rate_limit(bucket: dict, limit: int, window_sec: int) -> bool:
    now = time.time()
    ip = _ip()
    if ip in _blocked_ips and _blocked_ips[ip] > now:
        logging.warning("rate limit: blocked ip=%s", ip)
        return False
    dq = bucket.setdefault(ip, deque())
    while dq and now - dq[0] > window_sec:
        dq.popleft()
    dq.append(now)
    if len(dq) > limit:
        _blocked_ips[ip] = now + _BLOCK_DURATION_SEC
        logging.warning("rate limit triggered ip=%s", ip)
        return False
    return True

_EMAIL_RE = re.compile(r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")

@auth_bp.post("/register")
def register():
    data = (request.get_json(silent=True) or request.form.to_dict() or {})
    email = data.get("email")
    password = data.get("password")
    name = data.get("name") or data.get("username")
    if not email or not password or not name:
        return jsonify({"error": "email, password and name required"}), 400
    if not _EMAIL_RE.match(email or ""):
        return jsonify({"error": "invalid email"}), 400
    if len(password or "") < 8:
        return jsonify({"error": "password too short"}), 400
    if not _rate_limit(_register_attempts, limit=3, window_sec=60):
        return jsonify({"error": "rate_limited"}), 429
    payload, status = register_user(email, password, name)
    if status == 200:
        logging.info("user registered email=%s", email)
    return jsonify(payload), status

@auth_bp.post("/login")
def login():
    data = (request.get_json(silent=True) or request.form.to_dict() or {})
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"error": "email and password required"}), 400
    if not _rate_limit(_login_attempts, limit=5, window_sec=60):
        return jsonify({"error": "rate_limited"}), 429
    payload, status = login_user(email, password)
    if status == 200 and "user" in payload:
        session["user_id"] = payload["user"]["id"] if isinstance(payload["user"], dict) else payload["user"]
        logging.info("login success email=%s", email)
    else:
        logging.info("login failure email=%s", email)
    return jsonify(payload), status
