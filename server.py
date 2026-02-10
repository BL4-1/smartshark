from backend.server import app

# Root entrypoint so `python server.py` runs the backend cleanly
if __name__ == "__main__":
    app.run(port=5000, debug=True)
