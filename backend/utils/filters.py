ALLOWED_SUBJECTS = {"math", "science", "english", "hindi"}

def sanitize_question(text: str) -> str:
    t = (text or "").strip()
    t = " ".join(t.split())
    return t

def is_safe_question(subject: str, question: str):
    subj = (subject or "").strip().lower()
    if subj not in ALLOWED_SUBJECTS:
        return False, {"error": "unsupported_subject"}
    q = sanitize_question(question)
    if not q or len(q) < 2:
        return False, {"error": "empty_question"}
    if len(q) > 500:
        return False, {"error": "question_too_long"}
    lower = q.lower()
    personal = ["address", "phone", "email", "contact", "where do you live", "full name", "password", "credit card"]
    unsafe = ["sex", "sexual", "nsfw", "violence", "gore", "drug", "politic", "terror", "hate"]
    for w in personal:
        if w in lower:
            return False, {"error": "no_personal_data"}
    for w in unsafe:
        if w in lower:
            return False, {"error": "unsafe_topic"}
    return True, {"question": q, "subject": subj}
