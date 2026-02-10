from datetime import datetime
from sqlalchemy import func
from werkzeug.security import generate_password_hash, check_password_hash
from backend.models import db, User

def register_user(email, password, name):
    existing = db.session.query(User).filter(func.lower(User.email) == email.lower()).first()
    if existing:
        return {"error": "Email already registered"}, 409
    u = User(
        name=name,
        email=email,
        password_hash=generate_password_hash(password),
        xp=0,
        streak=0,
        accuracy=0.0,
        sessions=0,
        last_active_at=datetime.utcnow(),
    )
    db.session.add(u)
    db.session.commit()
    return {"user": {"id": u.id}}, 200

def login_user(email, password):
    u = db.session.query(User).filter(func.lower(User.email) == email.lower()).first()
    if not u or not check_password_hash(u.password_hash, password):
        return {"error": "Invalid credentials"}, 401
    u.last_active_at = datetime.utcnow()
    db.session.commit()
    return {"user": {"id": u.id}}, 200
