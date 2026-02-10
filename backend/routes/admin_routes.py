from flask import Blueprint, jsonify
from backend.services.stats_service import admin_analytics

admin_bp = Blueprint("admin", __name__, url_prefix="/api/admin")

@admin_bp.get("/analytics")
def analytics():
    payload, status = admin_analytics()
    return jsonify(payload), status
