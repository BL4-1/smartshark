import time
from collections import defaultdict, deque

class RateLimiter:
    def __init__(self):
        self.user_buckets = defaultdict(deque)
        self.global_day = {"count": 0, "day": None}

    def allow_user(self, user_id: int, limit: int, window_sec: int) -> bool:
        now = time.time()
        dq = self.user_buckets[user_id]
        while dq and now - dq[0] > window_sec:
            dq.popleft()
        dq.append(now)
        return len(dq) <= limit

    def allow_global_daily(self, limit: int) -> bool:
        day = time.strftime("%Y-%m-%d")
        if self.global_day["day"] != day:
            self.global_day["day"] = day
            self.global_day["count"] = 0
        if self.global_day["count"] >= limit:
            return False
        self.global_day["count"] += 1
        return True
