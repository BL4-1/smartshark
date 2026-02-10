import os
import logging
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
logging.info("env GEMINI_API_KEY set=%s AI_ENABLED=%s",
             bool(os.getenv("GEMINI_API_KEY")),
             os.getenv("AI_ENABLED"))

from backend.config import SQLALCHEMY_DATABASE_URI, SQLALCHEMY_TRACK_MODIFICATIONS
from backend.models import db
from backend.routes.auth_routes import auth_bp
from backend.routes.user_routes import user_bp
from backend.routes.admin_routes import admin_bp
from backend.routes.ai import ai_bp
from backend.config import SECRET_KEY

def create_app():
    app = Flask(__name__)
    CORS(
        app,
        supports_credentials=True,
        resources={
            r"/api/*": {
                "origins": [
                    "http://127.0.0.1:5500",
                    "http://localhost:5500",
                ],
                "methods": ["GET", "POST", "OPTIONS"],
                "allow_headers": ["Content-Type", "Authorization"],
                "expose_headers": ["Content-Type"],
            }
        },
    )
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = SQLALCHEMY_TRACK_MODIFICATIONS
    app.secret_key = SECRET_KEY
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(ai_bp)
    return app
