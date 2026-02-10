import os
import os.path as p

# Environment variables and static settings only (no logic/functions)
BASE_DIR = p.dirname(__file__)
DB_PATH = p.join(BASE_DIR, 'smartshark.db')

SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "sqlite:///" + DB_PATH)
SQLALCHEMY_TRACK_MODIFICATIONS = False

AI_ENABLED = os.getenv("AI_ENABLED", "true").lower() in ("1", "true", "yes", "on")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret")

# Runtime environment flags
APP_ENV = os.getenv("APP_ENV", "development")
FLASK_DEBUG = os.getenv("FLASK_DEBUG", "0")
