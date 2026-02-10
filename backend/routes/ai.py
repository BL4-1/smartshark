import logging
from flask import Blueprint, request, jsonify, session
from backend.services.ai_service import ask
from backend.services.stats_service import update_user_xp

ai_bp = Blueprint("ai", __name__, url_prefix="/api/ai")

@ai_bp.route("/ask", methods=["POST", "OPTIONS"])
def ai_ask():
    if request.method == "OPTIONS":
        return ("", 204)
    uid = session.get("user_id")
    data = (request.get_json(silent=True) or request.form.to_dict() or {})
    question = data.get("question") or ""
    subject = data.get("subject") or ""
    result = ask(uid or 0, subject, question)
    if "error" in result:
        msg_map = {
            "ai_disabled": "AI unavailable",
            "ai_unavailable": "AI unavailable",
            "rate_limited": "Too many requests, please try again later",
            "global_cap_reached": "Usage cap reached, please try again later",
            "unsupported_subject": "That topic isn’t supported here.",
            "question_too_long": "Question too long",
            "empty_question": "Empty question",
            "no_personal_data": "That request isn’t supported here.",
            "unsafe_topic": "That topic isn’t supported here.",
            "ai_error": "AI error, please try again",
            "empty_answer": "No answer available, please try again",
        }
        message = msg_map.get(result.get("error"), "Request cannot be processed")
        return jsonify({"answer": None, "xp_awarded": 0, "message": message}), 200
    xp_awarded = 5
    if uid:
        payload, status = update_user_xp(uid, xp_awarded, "ai_interaction", None)
        if status != 200:
            logging.warning("xp update failed uid=%s status=%s", uid, status)
    return jsonify({"answer": result.get("answer"), "xp_awarded": xp_awarded}), 200
