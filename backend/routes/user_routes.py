import logging
from flask import Blueprint, request, jsonify, session
from backend.models import db, User
import uuid
from datetime import datetime

user_bp = Blueprint("user", __name__, url_prefix="/api/user")

GUESTS = {}
GUEST_XP_CAP = 150
def _require_session():
    return session.get("user_id")

@user_bp.post("/guest")
def create_guest():
    gid = str(uuid.uuid4())
    GUESTS[gid] = {"id": gid, "xp": GUEST_XP_CAP}
    return jsonify({"guest_id": gid, "xp": GUEST_XP_CAP})

@user_bp.post("/migrate")
def migrate_guest():
    data = (request.get_json(silent=True) or {})
    guest_id = data.get("guest_id")
    uid = _require_session()
    if not uid:
        return jsonify({"error": "unauthorized"}), 401
    if not guest_id or guest_id not in GUESTS:
        return jsonify({"error": "invalid guest"}), 400
    u = db.session.get(User, uid)
    if not u:
        return jsonify({"error": "user not found"}), 404
    migrated = min(GUESTS[guest_id]["xp"], GUEST_XP_CAP)
    u.xp = (u.xp or 0) + migrated
    u.last_active_at = datetime.utcnow()
    db.session.commit()
    del GUESTS[guest_id]
    logging.info("guest migrated uid=%s migrated_xp=%s", uid, migrated)
    return jsonify({"user": {"id": u.id, "name": u.name, "email": u.email, "xp": u.xp}})

@user_bp.get("/me")
def me():
    uid = _require_session()
    if not uid:
        return jsonify({"error": "unauthorized"}), 401
    u = db.session.get(User, uid)
    if not u:
        return jsonify({"error": "user not found"}), 404
    return jsonify({
        "user": {
            "id": u.id,
            "name": u.name,
            "email": u.email,
            "xp": u.xp,
            "streak": u.streak,
            "accuracy": u.accuracy,
            "sessions": u.sessions,
            "created_at": u.created_at.isoformat(),
            "last_active_at": u.last_active_at.isoformat(),
        }
    })
