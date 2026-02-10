from datetime import datetime, timedelta
from sqlalchemy import func
from backend.models import db, User

def update_user_xp(user_id, delta_xp, action, accuracy):
    if action not in ['quiz', 'lesson', 'ai_interaction']:
        return {"error": "invalid action"}, 400
    u = db.session.get(User, user_id)
    if not u:
        return {"error": "User not found"}, 404
    now = datetime.utcnow()
    last_date = u.last_active_at.date() if u.last_active_at else None
    today = now.date()
    if last_date != today:
        u.streak = (u.streak or 0) + 1
    u.sessions = (u.sessions or 0) + 1
    gained = int(max(0, int(delta_xp)))
    u.xp = (u.xp or 0) + gained
    u.last_active_at = now
    db.session.commit()
    return {"xp_gain": gained, "xp": u.xp, "streak": u.streak, "sessions": u.sessions}, 200

def admin_analytics():
    now = datetime.utcnow()
    dt_24h = now - timedelta(days=1)
    dt_7d = now - timedelta(days=7)
    total = db.session.query(func.count(User.id)).scalar()
    active_24h = db.session.query(func.count(User.id)).filter(User.last_active_at >= dt_24h).scalar()
    active_7d = db.session.query(func.count(User.id)).filter(User.last_active_at >= dt_7d).scalar()
    users = User.query.order_by(User.xp.desc()).limit(50).all()
    leaderboard = [{"id": u.id, "name": u.name, "email": u.email, "xp": u.xp} for u in users]
    buckets = {"0-99": 0, "100-499": 0, "500-999": 0, "1000-1999": 0, "2000+": 0}
    levels = {"Explorer": 0, "Coral": 0, "Pearl": 0, "Sapphire": 0, "Emerald": 0, "Apex": 0}
    all_users = User.query.all()
    for u in all_users:
        x = u.xp or 0
        if x < 100:
            buckets["0-99"] += 1
        elif x < 500:
            buckets["100-499"] += 1
        elif x < 1000:
            buckets["500-999"] += 1
        elif x < 2000:
            buckets["1000-1999"] += 1
        else:
            buckets["2000+"] += 1
        if x < 100:
            levels["Explorer"] += 1
        elif x < 300:
            levels["Coral"] += 1
        elif x < 600:
            levels["Pearl"] += 1
        elif x < 1000:
            levels["Sapphire"] += 1
        elif x < 1500:
            levels["Emerald"] += 1
        else:
            levels["Apex"] += 1
    return {
        "total_users": total,
        "active_24h": active_24h,
        "active_7d": active_7d,
        "xp_distribution": buckets,
        "level_distribution": levels,
        "leaderboard": leaderboard
    }, 200
