from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import random
import json
import os
import time
import uuid
import hashlib
from datetime import datetime, date

app = Flask(__name__)
CORS(app)

# ---------------------------------------------------------
# SECURITY HELPERS
# ---------------------------------------------------------
def hash_password(password):
    """Hashes a password with a random salt."""
    if not password: return ""
    salt = uuid.uuid4().hex
    return salt + "$" + hashlib.sha256((salt + password).encode()).hexdigest()

def check_password(hashed_password, user_password):
    """Verifies a password against a stored hash."""
    if not hashed_password or "$" not in hashed_password:
        # Fallback for old plain text passwords during migration
        return hashed_password == user_password
    try:
        salt, hash_val = hashed_password.split('$')
        return hashlib.sha256((salt + user_password).encode()).hexdigest() == hash_val
    except:
        return False

# ---------------------------------------------------------
# DATA PERSISTENCE LAYER
# ---------------------------------------------------------
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
FRONTEND_DIR = os.path.join(os.path.dirname(__file__), '..')
USERS_FILE = os.path.join(DATA_DIR, 'users.json')
STATS_FILE = os.path.join(DATA_DIR, 'stats.json')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

class DataManager:
    def __init__(self):
        self.users = self._load_json(USERS_FILE)
        self.temp_guests = {} # In-memory storage for guests
        self.stats = self._load_json(STATS_FILE, default={"global": {"total_xp": 0, "beginner_answers": 0, "hard_answers": 0}, "questions": {}})

    def _load_json(self, filepath, default=None):
        if default is None: default = {}
        if not os.path.exists(filepath):
            return default
        try:
            with open(filepath, 'r') as f:
                return json.load(f)
        except:
            return default

    def save_users(self):
        # Only save persistent users
        with open(USERS_FILE, 'w') as f:
            json.dump(self.users, f, indent=4)

    def save_stats(self):
        with open(STATS_FILE, 'w') as f:
            json.dump(self.stats, f, indent=4)

    def get_user(self, user_id):
        # Check persistent users first
        if user_id in self.users:
            return self.users[user_id]
        # Then check guests
        return self.temp_guests.get(user_id)

    def create_user(self, name="Learner", password="", email=None, is_guest=False):
        user_id = str(uuid.uuid4())
        new_user = {
            "id": user_id,
            "name": name,
            "password": hash_password(password) if password else "",
            "email": email,
            "is_guest": is_guest,
            "joined_at": str(datetime.now()),
            "total_xp": 0,
            "level": 1,
            "subjects": {},  # { "Math": { "xp": 0, "level": 1 } }
            "badges": [],    # List of badge IDs
            "history": [],   # Log of answers
            "streak": 0,
            "last_active_date": str(date.today()),
            "daily_xp": 0,
            "weekly_xp": 0,
            "last_week_number": date.today().isocalendar()[1],
            "yesterday_rank": 0,
            "stats": {
                "correct": 0,
                "wrong": 0,
                "sessions": 0,
                "time_spent_minutes": 0
            }
        }
        
        if is_guest:
            self.temp_guests[user_id] = new_user
            # Do not save to disk
        else:
            self.users[user_id] = new_user
            self.save_users()
            
        return new_user

    def update_user(self, user_id, data):
        if user_id in self.users:
            self.users[user_id] = data
            self.save_users()
        elif user_id in self.temp_guests:
            self.temp_guests[user_id] = data
            # Do not save to disk

db = DataManager()

# ---------------------------------------------------------
# BADGES CONFIG
# ---------------------------------------------------------
BADGES = {
    "first_step": {"name": "First Step 🐣", "desc": "Completed your first session", "icon": "🐣"},
    "high_five": {"name": "High Five 🖐️", "desc": "Reached Level 5", "icon": "🖐️"},
    "math_star": {"name": "Math Star ⭐", "desc": "Reached Level 3 in Math", "icon": "⭐"},
    "science_spark": {"name": "Science Spark ⚡", "desc": "Reached Level 3 in Science", "icon": "⚡"},
    "language_champ": {"name": "Language Champ 🗣️", "desc": "Reached Level 3 in Hindi or Telugu", "icon": "🗣️"},
    "consistency_crown": {"name": "Consistency Crown 👑", "desc": "3 Day Streak", "icon": "👑"},
    "accuracy_ace": {"name": "Accuracy Ace 🎯", "desc": "Over 80% Accuracy (min 10 Qs)", "icon": "🎯"},
    "xp_hunter": {"name": "XP Hunter 🏆", "desc": "Earned 500 Total XP", "icon": "🏆"},
}

def check_badges(user):
    """Checks and awards badges based on user stats."""
    new_badges = []
    
    # Helper to award
    def award(bid):
        if bid not in user.get('badges', []):
            if 'badges' not in user: user['badges'] = []
            user['badges'].append(bid)
            new_badges.append(BADGES[bid])

    # Logic
    if user['stats']['sessions'] >= 1:
        award("first_step")
        
    if user['level'] >= 5:
        award("high_five")
        
    if user['total_xp'] >= 500:
        award("xp_hunter")
        
    if user['streak'] >= 3:
        award("consistency_crown")
        
    # Subject specific
    if user['subjects'].get('Math', {}).get('level', 1) >= 3:
        award("math_star")
        
    if user['subjects'].get('Science', {}).get('level', 1) >= 3:
        award("science_spark")

    if user['subjects'].get('Hindi', {}).get('level', 1) >= 3 or user['subjects'].get('Telugu', {}).get('level', 1) >= 3:
        award("language_champ")
        
    # Accuracy
    total_qs = user['stats']['correct'] + user['stats']['wrong']
    if total_qs >= 10:
        acc = user['stats']['correct'] / total_qs
        if acc >= 0.8:
            award("accuracy_ace")
        
    return new_badges

# ---------------------------------------------------------
# XP ENGINE (Deterministic & Rule-Based)
# ---------------------------------------------------------
XP_CONFIG = {
    "BEGINNER_CORRECT": 10,
    "HARD_CORRECT": 20,
    "BEGINNER_PENALTY": -5,
    "HARD_PENALTY": -10,
    "STREAK_BONUS_STEP": 5,
    "STREAK_CAP_BONUS": 25,
    "DAILY_SOFT_CAP": 500,
    "POST_CAP_MULTIPLIER": 0.5,
    "GUEST_XP_CAP": 150
}

LEVEL_TITLES = [
    (1, "Explorer"),
    (5, "Challenger"),
    (10, "Mastermind"),
    (15, "Legend"),
    (20, "Apex Shark")
]

def get_level_title(level):
    title = "Explorer"
    for lvl, t in LEVEL_TITLES:
        if level >= lvl:
            title = t
        else:
            break
    return title

def calculate_level(xp):
    # Simple curve: Level = 1 + (XP / 100)
    # But let's make it slightly harder as you go? 
    # For now, keeping it linear as per user request "Levels are derived from total XP"
    return 1 + int(xp / 100)

def get_xp_gain(user, is_correct, difficulty, current_streak):
    if not is_correct:
        penalty = XP_CONFIG["BEGINNER_PENALTY"] if difficulty == "Beginner" else XP_CONFIG["HARD_PENALTY"]
        return penalty, "Wrong Answer Penalty"

    # Base XP
    base_xp = XP_CONFIG["BEGINNER_CORRECT"] if difficulty == "Beginner" else XP_CONFIG["HARD_CORRECT"]
    
    # Streak Bonus
    streak_bonus = min(current_streak * XP_CONFIG["STREAK_BONUS_STEP"], XP_CONFIG["STREAK_CAP_BONUS"])
    
    # Level Scaling (Anti-Grind for high levels)
    # Gain reduces by 2% per level, capped at 50% reduction
    level_penalty_factor = max(0.5, 1.0 - (user['level'] * 0.02))
    effective_xp = (base_xp + streak_bonus) * level_penalty_factor
    
    # Check Resets
    check_resets(user)
    
    if user['daily_xp'] > XP_CONFIG["DAILY_SOFT_CAP"]:
        effective_xp *= XP_CONFIG["POST_CAP_MULTIPLIER"]
        msg = "Correct! (Soft Cap Active)"
    else:
        msg = "Correct!"

    return int(effective_xp), msg

# ---------------------------------------------------------
# QUESTION BANK
# ---------------------------------------------------------
QUESTION_BANK = {
    "Math": {
        "Algebra": {
            "Beginner": [
                {"q": "What is 2 + 2?", "visual": "algebra_basic", "opts": ["3", "4", "5", "22"], "ans": "4", "exp": "✌️ + ✌️ = 4!"},
                {"q": "If you have 5 apples 🍎 and eat 2, how many are left?", "visual": "algebra_basic", "opts": ["3", "7", "2", "5"], "ans": "3", "exp": "5 - 2 = 3. Yum!"},
                {"q": "What is 10 + 0?", "visual": "algebra_basic", "opts": ["100", "0", "10", "1"], "ans": "10", "exp": "Adding zero changes nothing! 😎"},
                {"q": "Solve: 3 + ? = 5", "visual": "algebra_basic", "opts": ["1", "2", "3", "4"], "ans": "2", "exp": "3 plus 2 makes 5!"},
                {"q": "What comes after 9?", "opts": ["8", "10", "11", "99"], "ans": "10", "exp": "1, 2... 8, 9, 10! 🔟"},
            ],
            "Hard": [
                {"q": "If x + 5 = 10, what is x?", "visual": "algebra_x", "opts": ["5", "15", "50", "0"], "ans": "5", "exp": "5 + 5 equals 10. Balance the scale! ⚖️"},
                {"q": "What is 15 divided by 3? (15 ÷ 3)", "visual": "algebra_basic", "opts": ["5", "3", "15", "45"], "ans": "5", "exp": "5 groups of 3 make 15. 🍬🍬🍬"},
                {"q": "Solve: 2x = 8", "visual": "algebra_x", "opts": ["2", "4", "6", "8"], "ans": "4", "exp": "2 times 4 is 8."},
                {"q": "What is 12 x 12?", "opts": ["120", "144", "122", "100"], "ans": "144", "exp": "A gross! 12 dozen."},
                {"q": "Simplify: 3x + 2x", "visual": "algebra_x", "opts": ["5x", "6x", "x", "5"], "ans": "5x", "exp": "3 apples + 2 apples = 5 apples! 🍎"},
            ]
        },
        "Geometry": {
            "Beginner": [
                {"q": "How many sides does a triangle have? 🔺", "visual": "triangle", "opts": ["3", "4", "5", "100"], "ans": "3", "exp": "Tri-angle means three angles and sides!"},
                {"q": "What shape is a ball? ⚽", "visual": "circle", "opts": ["Square", "Circle", "Triangle", "Box"], "ans": "Circle", "exp": "It's round like a circle (or sphere)!"},
                {"q": "How many corners does a square have? 🟦", "visual": "square", "opts": ["2", "3", "4", "5"], "ans": "4", "exp": "A square has 4 equal corners."},
                {"q": "Which shape looks like a door? 🚪", "visual": "rectangle", "opts": ["Circle", "Rectangle", "Triangle", "Star"], "ans": "Rectangle", "exp": "Doors are usually rectangles."},
                {"q": "Is a pizza slice usually a triangle? 🍕", "visual": "triangle", "opts": ["Yes", "No", "Maybe", "It's a square"], "ans": "Yes", "exp": "Yummy triangles!"},
                {"q": "This angle is sharp like a pencil tip! ✏️", "visual": "angle_acute", "opts": ["Acute", "Obtuse", "Right", "Wrong"], "ans": "Acute", "exp": "Small angles are called Acute (cute little angles!)."},
                {"q": "This angle is a perfect corner L. 📐", "visual": "angle_right", "opts": ["Right", "Left", "Acute", "Obtuse"], "ans": "Right", "exp": "It's 90 degrees, a Right angle."},
            ],
            "Hard": [
                {"q": "How many degrees are in a circle? ⭕", "visual": "circle", "opts": ["180", "90", "360", "100"], "ans": "360", "exp": "A full spin is 360 degrees!"},
                {"q": "What is a shape with 5 sides called? 🛑", "visual": "pentagon", "opts": ["Square", "Pentagon", "Hexagon", "Octagon"], "ans": "Pentagon", "exp": "Penta means five."},
                {"q": "What is the angle of a square corner? 📐", "visual": "square", "opts": ["45°", "90°", "180°", "360°"], "ans": "90°", "exp": "It's a right angle (90 degrees)."},
                {"q": "Perimeter is the distance... 📏", "visual": "rectangle", "opts": ["Inside", "Around", "Through", "Under"], "ans": "Around", "exp": "Perimeter goes all the way around the edge."},
                {"q": "Parallel lines never... 🛤️", "visual": "square_grid", "opts": ["Meet", "End", "Start", "Curve"], "ans": "Meet", "exp": "Like train tracks, they stay apart forever."},
            ]
        },
        "Integration": { # "Basic Integration" simplified for kids
             "Beginner": [
                {"q": "Area is the space... ⬛", "visual": "area_fill", "opts": ["Inside", "Outside", "Around", "Above"], "ans": "Inside", "exp": "Area fills up the shape! 🎨"},
                {"q": "If you stack 3 blocks of height 2, how tall is it? 🧱", "visual": "algebra_basic", "opts": ["5", "6", "1", "32"], "ans": "6", "exp": "3 times 2 is 6. Adding up slices!"},
                {"q": "Which is bigger? 🐘 vs 🐜", "opts": ["Elephant", "Ant", "Same", "None"], "ans": "Elephant", "exp": "Integration adds up lots of little things to make big things."},
                {"q": "Adding up many small pieces is like...", "visual": "algebra_basic", "opts": ["Breaking", "Building", "Sleeping", "Running"], "ans": "Building", "exp": "Calculus builds things from small parts!"},
                {"q": "What is the area of a 2x2 square? 🔲", "visual": "square_grid", "opts": ["2", "4", "8", "1"], "ans": "4", "exp": "2 times 2 is 4 squares inside."},
             ],
             "Hard": [
                {"q": "Integration finds the... 🌊", "visual": "area_under_curve", "opts": ["Slope", "Area under curve", "Speed", "Height"], "ans": "Area under curve", "exp": "It sums up all the area under the line."},
                {"q": "The symbol ∫ looks like an... 🎻", "visual": "area_under_curve", "opts": ["S", "O", "X", "Z"], "ans": "S", "exp": "It stands for 'Sum' (adding up)!"},
                {"q": "Reverse of differentiation is... 🔄", "opts": ["Integration", "Multiplication", "Subtraction", "Division"], "ans": "Integration", "exp": "They are opposites, like plus and minus."},
                {"q": "If speed is constant, distance is... 🚗", "visual": "area_fill", "opts": ["Speed x Time", "Speed / Time", "Time / Speed", "Zero"], "ans": "Speed x Time", "exp": "Area of the speed rectangle!"},
                {"q": "Integral of 2x is... 📈", "visual": "area_under_curve", "opts": ["x²", "2x²", "x", "2"], "ans": "x²", "exp": "Derivative of x² is 2x. Reverse it!"},
             ]
        }
    },
    "Science": {
        "Beginner": [
            {"q": "What color is the sky on a sunny day?", "opts": ["Green", "Blue", "Red", "Purple"], "ans": "Blue", "exp": "The atmosphere scatters blue light!"},
            {"q": "What do we breathe?", "opts": ["Water", "Air", "Sand", "Milk"], "ans": "Air", "exp": "We need oxygen from the air to live."},
            {"q": "Which is hot?", "opts": ["Ice", "Sun", "Snow", "Ice Cream"], "ans": "Sun", "exp": "The Sun is a giant ball of hot gas!"},
            {"q": "What falls from clouds?", "opts": ["Rocks", "Rain", "Cats", "Cars"], "ans": "Rain", "exp": "Clouds are made of water droplets."},
            {"q": "Does a magnet stick to plastic?", "opts": ["Yes", "No", "Maybe", "Only on Tuesdays"], "ans": "No", "exp": "Magnets only stick to certain metals like iron."},
        ],
        "Hard": [
            {"q": "What planet is known as the Red Planet?", "opts": ["Venus", "Mars", "Jupiter", "Saturn"], "ans": "Mars", "exp": "Mars has rusty red dust all over it."},
            {"q": "What is the center of an atom called?", "opts": ["Nucleus", "Electron", "Proton", "Cell"], "ans": "Nucleus", "exp": "The nucleus is the tiny, heavy core."},
            {"q": "What gas do plants breathe in?", "opts": ["Oxygen", "Carbon Dioxide", "Helium", "Nitrogen"], "ans": "Carbon Dioxide", "exp": "Plants use CO2 to make food!"},
            {"q": "How long does Earth take to orbit the Sun?", "opts": ["1 day", "1 month", "1 year", "10 years"], "ans": "1 year", "exp": "That's 365 days!"},
            {"q": "What is the hardest natural substance?", "opts": ["Gold", "Iron", "Diamond", "Wood"], "ans": "Diamond", "exp": "Diamonds are super tough carbon crystals."},
        ]
    },
    "Biology": {
        "Beginner": [
            {"q": "What animal says 'Meow'?", "opts": ["Dog", "Cat", "Cow", "Duck"], "ans": "Cat", "exp": "Cats say meow!"},
            {"q": "Do fish live in water?", "opts": ["Yes", "No", "Only on holidays", "They fly"], "ans": "Yes", "exp": "Fish have gills to breathe underwater."},
            {"q": "What do caterpillars turn into?", "opts": ["Frogs", "Butterflies", "Snakes", "Birds"], "ans": "Butterflies", "exp": "It's called metamorphosis!"},
            {"q": "How many legs does a spider have?", "opts": ["4", "6", "8", "10"], "ans": "8", "exp": "Spiders are arachnids, not insects!"},
            {"q": "What is the biggest animal in the ocean?", "opts": ["Shark", "Blue Whale", "Dolphin", "Goldfish"], "ans": "Blue Whale", "exp": "Blue Whales are the largest animals ever!"},
        ],
        "Hard": [
            {"q": "What pumps blood in your body?", "opts": ["Brain", "Lungs", "Heart", "Stomach"], "ans": "Heart", "exp": "Your heart is a strong muscle pump."},
            {"q": "What part of the plant makes food?", "opts": ["Roots", "Stem", "Leaves", "Flowers"], "ans": "Leaves", "exp": "Leaves use sunlight for photosynthesis."},
            {"q": "How many bones are in an adult human body?", "opts": ["100", "206", "300", "500"], "ans": "206", "exp": "Babies have more, but they fuse together!"},
            {"q": "What is the largest organ in the human body?", "opts": ["Liver", "Heart", "Skin", "Brain"], "ans": "Skin", "exp": "Your skin covers your whole body!"},
            {"q": "Which animal is a mammal?", "opts": ["Shark", "Dolphin", "Crocodile", "Eagle"], "ans": "Dolphin", "exp": "Dolphins breathe air and nurse their young."},
        ]
    },
    "Hindi": {
        "Beginner": [
            {"q": "What is the Hindi word for 'Apple'?", "opts": ["Aam", "Seb", "Kela", "Santra"], "ans": "Seb", "exp": "Seb means Apple."},
            {"q": "How do you say 'One' in Hindi?", "opts": ["Ek", "Do", "Teen", "Chaar"], "ans": "Ek", "exp": "Ek means One."},
            {"q": "What is the Hindi word for 'Water'?", "opts": ["Pani", "Chai", "Doodh", "Juice"], "ans": "Pani", "exp": "Pani is water."},
            {"q": "How do you say 'Hello' in Hindi?", "opts": ["Namaste", "Alvida", "So jao", "Khao"], "ans": "Namaste", "exp": "Namaste is a respectful greeting."},
            {"q": "What is the Hindi word for 'Elephant'?", "opts": ["Sher", "Haathi", "Cheeta", "Kutta"], "ans": "Haathi", "exp": "Haathi is an Elephant."},
        ],
        "Hard": [
            {"q": "What is the national bird of India (in Hindi)?", "opts": ["Mor", "Tota", "Kabootar", "Cheel"], "ans": "Mor", "exp": "Mor is the Peacock."},
            {"q": "Translate 'Mera naam Raj hai'.", "opts": ["I am Raj", "He is Raj", "You are Raj", "Who is Raj?"], "ans": "I am Raj", "exp": "Mera naam means 'My name is'."},
            {"q": "What is 'Ravivaar' in English?", "opts": ["Monday", "Sunday", "Saturday", "Tuesday"], "ans": "Sunday", "exp": "Ravivaar is Sunday."},
            {"q": "What color is 'Laal'?", "opts": ["Blue", "Green", "Red", "Yellow"], "ans": "Red", "exp": "Laal means Red."},
            {"q": "What is a 'Vidyalaya'?", "opts": ["Hospital", "School", "Market", "Home"], "ans": "School", "exp": "Vidyalaya is a place of knowledge (Vidya)."},
        ]
    },
    "Telugu": {
        "Beginner": [
            {"q": "What is the Telugu word for 'Mother'?", "opts": ["Nanna", "Amma", "Akka", "Anna"], "ans": "Amma", "exp": "Amma means Mother."},
            {"q": "How do you say 'One' in Telugu?", "opts": ["Okati", "Rendu", "Moodu", "Naalugu"], "ans": "Okati", "exp": "Okati is 1."},
            {"q": "What does 'Nenu' mean?", "opts": ["You", "I", "He", "She"], "ans": "I", "exp": "Nenu means I or Me."},
            {"q": "What is the Telugu word for 'House'?", "opts": ["Badi", "Illu", "Park", "Angadi"], "ans": "Illu", "exp": "Illu means House or Home."},
            {"q": "What is 'Kukka' in English?", "opts": ["Cat", "Dog", "Bird", "Cow"], "ans": "Dog", "exp": "Kukka means Dog."},
        ],
        "Hard": [
            {"q": "What is 'Namaskaram'?", "opts": ["Bye", "Hello", "Thanks", "Sorry"], "ans": "Hello", "exp": "Namaskaram is a formal greeting."},
            {"q": "What is 'Aakasam'?", "opts": ["Earth", "Water", "Sky", "Fire"], "ans": "Sky", "exp": "Aakasam means Sky."},
            {"q": "Translate 'Bagunnara?'.", "opts": ["How are you?", "Who are you?", "Where are you?", "What is this?"], "ans": "How are you?", "exp": "It asks about well-being."},
            {"q": "What is 'Annayya'?", "opts": ["Younger Brother", "Elder Brother", "Uncle", "Father"], "ans": "Elder Brother", "exp": "Annayya is big brother."},
            {"q": "What is 'Pustakam'?", "opts": ["Pen", "Pencil", "Book", "Bag"], "ans": "Book", "exp": "Pustakam means Book."},
        ]
    },
    "Social Studies": {
        "Beginner": [
            {"q": "What do we use to buy things?", "opts": ["Leaves", "Money", "Rocks", "Sand"], "ans": "Money", "exp": "We exchange money for goods."},
            {"q": "Who puts out fires?", "opts": ["Doctor", "Teacher", "Firefighter", "Baker"], "ans": "Firefighter", "exp": "Firefighters save the day!"},
            {"q": "Where do you go to learn?", "opts": ["Park", "School", "Hospital", "Bank"], "ans": "School", "exp": "School is for learning."},
            {"q": "What shows us where countries are?", "opts": ["Clock", "Map", "Phone", "Shoe"], "ans": "Map", "exp": "A map or globe shows the world."},
            {"q": "Red light means...", "opts": ["Go", "Stop", "Fly", "Run"], "ans": "Stop", "exp": "Red means stop for safety."},
        ],
        "Hard": [
            {"q": "Who is the head of a country?", "opts": ["Principal", "President/Prime Minister", "Mayor", "Sheriff"], "ans": "President/Prime Minister", "exp": "They lead the national government."},
            {"q": "How many continents are there?", "opts": ["5", "7", "10", "3"], "ans": "7", "exp": "Asia, Africa, North America, South America, Antarctica, Europe, Australia."},
            {"q": "What is a democracy?", "opts": ["King rules", "People vote", "No rules", "Robots rule"], "ans": "People vote", "exp": "In a democracy, people choose their leaders."},
            {"q": "What is the capital of India?", "opts": ["Mumbai", "New Delhi", "Kolkata", "Chennai"], "ans": "New Delhi", "exp": "New Delhi is the capital city."},
            {"q": "What does a judge do?", "opts": ["Cooks food", "Decides laws/cases", "Fixes cars", "Paints houses"], "ans": "Decides laws/cases", "exp": "Judges work in courts."},
        ]
    }
}

# ---------------------------------------------------------
# CURIOUS CORNER ANSWERS (Rule-based)
# ---------------------------------------------------------
CURIOUS_ANSWERS = {
    # Nature & Science
    "sky": "The sky is blue because the air scatters sunlight. Blue light scatters the most! ☁️",
    "moon": "The moon is a big rock that orbits Earth. It reflects light from the Sun! 🌑",
    "sun": "The Sun is a giant star made of hot glowing gas. It gives us light and heat. ☀️",
    "star": "Stars are huge balls of burning gas, just like our Sun, but very far away! ✨",
    "rain": "Rain happens when clouds get too heavy with water droplets and they fall down. 🌧️",
    "rainbow": "A rainbow appears when sunlight shines through rain droplets, splitting into colors! 🌈",
    "water": "Water is life! It covers most of our Earth and we need it to survive. 💧",
    "gravity": "Gravity is the invisible force that pulls everything towards the ground. It keeps us from floating away! 🌎",
    "plant": "Plants use sunlight, water, and air to make their own food. This is called photosynthesis! 🌿",
    
    # Animals
    "animal": "Animals are amazing creatures! Some live on land, some in water, and some fly in the sky. 🐾",
    "bird": "Birds have feathers and wings. Most of them can fly! 🐦",
    "fish": "Fish live underwater and breathe using gills. 🐟",
    "shark": "Sharks are amazing swimmers! I'm a SmartShark, and I love learning! 🦈",
    "dog": "Dogs are loyal friends who love to play and protect us. 🐕",
    "cat": "Cats are curious and agile. They love to chase lasers and nap! 🐈",
    "lion": "The lion is the king of the jungle! They live in groups called prides. 🦁",
    
    # Math & Numbers
    "math": "Math is the language of numbers. It helps us count, measure, and build things. 🧮",
    "count": "1, 2, 3, 4, 5... counting is fun! Do you know 10 + 10 is 20? 🔢",
    "zero": "Zero means nothing, but it's a very important number! It helps us write big numbers like 100. 0️⃣",
    
    # Learning & School
    "science": "Science is about exploring and understanding how the world works. 🧪",
    "hindi": "Hindi is a beautiful language spoken by millions of people in India. 🇮🇳",
    "telugu": "Telugu is a sweet language spoken mainly in Andhra Pradesh and Telangana. 🍇",
    "homework": "Homework helps you practice what you learned in class. You can do it! 📝",
    "school": "School is where we make friends and learn new things every day. 🏫",
    "teacher": "Teachers are guides who help us learn and grow. 👩‍🏫",
    
    # Greetings & Chat
    "name": "I am SmartShark, your AI learning buddy! 🦈",
    "who are you": "I'm SmartShark! I live here to help you learn cool things. 🦈",
    "hello": "Hello there! Ready to learn something new today? 👋",
    "hi": "Hi! What's on your mind? 🦈",
    "bye": "Goodbye! See you soon! 👋",
    "thanks": "You're welcome! Happy learning! 🌟",
    "thank": "You're welcome! 🌟",
    "friend": "A friend is someone who plays with you and cares about you. I'm your learning friend! 🤝",
    "joke": "Why did the math book look sad? Because it had too many problems! 😂",
}

import re

# ---------------------------------------------------------
# HELPER FUNCTIONS (Gemini-Ready Architecture)
# ---------------------------------------------------------

def get_question_id(text):
    """Generates a stable ID for a question based on its text."""
    return hashlib.md5(text.encode()).hexdigest()

def check_resets(user):
    """Checks and handles daily/weekly resets for a user."""
    today = date.today()
    today_str = str(today)
    current_week = today.isocalendar()[1]
    
    # 1. Check Streak Breakage
    # If last meaningful activity was more than 1 day ago, streak resets to 0.
    last_streak_str = user.get('last_streak_date')
    if last_streak_str:
        try:
            last_streak_date = datetime.strptime(last_streak_str, '%Y-%m-%d').date()
            delta = (today - last_streak_date).days
            if delta > 1:
                user['streak'] = 0
        except ValueError:
            pass # Handle format errors gracefully

    # 2. Daily XP Reset
    if user.get('last_active_date') != today_str:
        # Snapshot Rank before reset
        users_list = sorted(db.users.values(), key=lambda x: x['total_xp'], reverse=True)
        rank = 0
        for i, u in enumerate(users_list):
            if u['id'] == user['id']:
                rank = i + 1
                break
        user['yesterday_rank'] = rank
        
        user['daily_xp'] = 0
        user['last_active_date'] = today_str
        
    # 3. Weekly Reset
    if user.get('last_week_number') != current_week:
        user['weekly_xp'] = 0
        user['last_week_number'] = current_week

def update_streak_on_activity(user):
    """Updates streak only on valid learning activity."""
    today = date.today()
    today_str = str(today)
    
    last_streak_str = user.get('last_streak_date')
    
    if last_streak_str == today_str:
        # Already counted for today
        return
        
    if last_streak_str:
        try:
            last_streak_date = datetime.strptime(last_streak_str, '%Y-%m-%d').date()
            delta = (today - last_streak_date).days
            
            if delta == 1:
                # Consecutive day!
                user['streak'] += 1
            else:
                # Broken streak or >1 day gap (already reset by check_resets likely, but ensure here)
                user['streak'] = 1
        except:
            user['streak'] = 1
    else:
        # First time
        user['streak'] = 1
        
    user['last_streak_date'] = today_str

def get_rule_based_answer(question):
    """
    Generates an answer based on keywords and simple rules.
    This is where we will inject Gemini later.
    """
    question = question.lower()

    # 1. Check for Translations (Regex-based Intent Detection)
    # Patterns: "translate X to hindi", "how to say X in telugu", "what is X in hindi"
    translation_pattern = r"(?:translate|say|what is|meaning of)\s+(?P<phrase>.*?)\s+(?:in|to)\s+(?P<lang>hindi|telugu)"
    match = re.search(translation_pattern, question)
    
    if match:
        phrase = match.group("phrase").strip().strip("'").strip('"')
        lang = match.group("lang")
        
        # Dictionary of common kid-friendly words
        translations = {
            "hello": {"hindi": "Namaste (नमस्ते)", "telugu": "Namaskaram (నమస్కారం)"},
            "thank you": {"hindi": "Dhanyavaad (धन्यवाद)", "telugu": "Dhanyavadalu (ధన్యవాదాలు)"},
            "thanks": {"hindi": "Dhanyavaad (धन्यवाद)", "telugu": "Dhanyavadalu (ధన్యవాదాలు)"},
            "bye": {"hindi": "Alvida (अलविदा)", "telugu": "Veidukolu (వీడ్కోలు)"},
            "goodbye": {"hindi": "Alvida (अलविदा)", "telugu": "Veidukolu (వీడ్కోలు)"},
            "love": {"hindi": "Pyaar (प्यार)", "telugu": "Prema (ప్రేమ)"},
            "friend": {"hindi": "Dost (दोस्त)", "telugu": "Snehitudu (స్నేహితుడు)"},
            "water": {"hindi": "Pani (पानी)", "telugu": "Neeru (నీరు)"},
            "food": {"hindi": "Khana (खाना)", "telugu": "Bhojanam (భోజనం)"},
            "school": {"hindi": "Vidyalaya (विद्यालय)", "telugu": "Badi (బడి)"},
            "mother": {"hindi": "Maa (माँ)", "telugu": "Amma (అమ్మ)"},
            "father": {"hindi": "Pita (पिता)", "telugu": "Nanna (నాన్న)"},
            "dog": {"hindi": "Kutta (कुत्ता)", "telugu": "Kukka (కుక్క)"},
            "cat": {"hindi": "Billi (बिल्ली)", "telugu": "Pilli (పిల్లి)"},
            "book": {"hindi": "Kitaab (किताब)", "telugu": "Pustakam (పుస్తకం)"},
            "apple": {"hindi": "Seb (सेब)", "telugu": "Apple (ఆపిల్)"}, # Apple is common
            "one": {"hindi": "Ek (एक)", "telugu": "Okati (ఒకటి)"},
            "two": {"hindi": "Do (दो)", "telugu": "Rendu (రెండు)"},
            "three": {"hindi": "Teen (तीन)", "telugu": "Moodu (మూడు)"},
        }

        if phrase in translations:
            return f"{phrase.capitalize()} in {lang.capitalize()} is: {translations[phrase][lang]}"
        else:
            return f"I'm still learning new words! I know simple ones like 'hello', 'mother', 'school', or 'water'. Try asking one of those! 🍎"

    # 2. Check for Counting/Numbers
    if "count" in question or "number" in question:
        return "1, 2, 3, 4, 5... counting is fun! Do you know 10 + 10 is 20?"

    # 3. Check for Greetings
    greetings = ["hello", "hi", "hey", "namaste", "vanakkam"]
    if any(g in question for g in greetings):
        return "Hello friend! 👋 I'm ready to answer your questions!"

    # 4. Keyword Matching
    for key, val in CURIOUS_ANSWERS.items():
        if key in question:
            return val
            
    # 5. Fallback for "Why/What" questions
    if "why" in question:
        return "That's a very deep question! Scientists and thinkers are always looking for answers to 'why'. What do you think?"
    if "what" in question:
        return "That's an interesting thing to ask about! I'm still learning about the whole world."

    # 6. Friendly Unknown Response
    return "That's a great question! 🦈 I'm still learning about that. Try asking me about 'space', 'animals', 'math', or 'Hindi' words! I love those topics."

def get_quiz_questions(subject, level, sub_topic=None, limit=5):
    """
    Retrieves questions from the local bank.
    Later, this can call Gemini to generate questions dynamically.
    """
    # Normalize inputs
    if subject not in QUESTION_BANK:
        subject = "Math" # Default
    
    # Handle Math Sub-topics
    questions_pool = []
    if subject == "Math":
        # Check if we have specific sub-topics in the bank
        if sub_topic and sub_topic in QUESTION_BANK["Math"]:
             if level in QUESTION_BANK["Math"][sub_topic]:
                 questions_pool = QUESTION_BANK["Math"][sub_topic][level]
        else:
            # Fallback: Collect from all sub-topics
            for topic in QUESTION_BANK["Math"]:
                if isinstance(QUESTION_BANK["Math"][topic], dict) and level in QUESTION_BANK["Math"][topic]:
                    questions_pool.extend(QUESTION_BANK["Math"][topic][level])
    else:
        # Standard subjects
        if level not in QUESTION_BANK[subject]:
            level = "Beginner" # Default
        questions_pool = QUESTION_BANK[subject][level]

    # Shuffle and pick 'limit'
    if not questions_pool:
        return [] # Should not happen if bank is populated

    selected_questions = random.sample(questions_pool, min(len(questions_pool), limit))
    
    return [
        {
            "id": str(uuid.uuid4()), # Give questions IDs for tracking repeats
            "question": q["q"],
            "options": q["opts"],
            "correct_answer": q["ans"],
            "explanation": q["exp"],
            "visual": q.get("visual")
        }
        for q in selected_questions
    ]

# ---------------------------------------------------------
# API ENDPOINTS
# ---------------------------------------------------------

@app.route('/api/ask', methods=['POST'])
def ask_ai():
    data = request.json
    question = data.get('question', '').lower()
    
    if not question:
        return jsonify({"error": "No question provided"}), 400

    # FUTURE: if gemini_enabled: answer = get_gemini_answer(question)
    answer = get_rule_based_answer(question)

    return jsonify({"answer": answer})

@app.route('/api/quiz', methods=['POST'])
def generate_quiz():
    data = request.json
    subject = data.get('subject', 'Math')
    level = data.get('level', 'Beginner')
    sub_topic = data.get('sub_topic', None)
    limit = data.get('limit', 5)
    user_id = data.get('user_id')

    # Hard Mode Lock (Level 3+)
    if level == 'Hard':
        allowed = False
        if user_id:
            user = db.get_user(user_id)
            if user and user['level'] >= 3:
                allowed = True
        
        if not allowed:
            level = 'Beginner' # Downgrade if locked

    # FUTURE: if gemini_enabled: questions = get_gemini_quiz(subject, level)
    questions = get_quiz_questions(subject, level, sub_topic, limit)
    
    # Inject IDs
    for q in questions:
        if 'question' in q:
            q['id'] = get_question_id(q['question'])

    return jsonify({"questions": questions})

# --- User & XP Endpoints ---

@app.route('/api/user/init', methods=['POST'])
def init_user():
    data = request.json
    name = data.get('name', 'Learner')
    password = data.get('password', '')
    user = db.create_user(name, password)
    return jsonify(user)

@app.route('/api/user/guest', methods=['POST'])
def create_guest():
    user = db.create_user(name="Explorer", is_guest=True)
    return jsonify({"message": "Guest account created", "user": user})

@app.route('/api/user/register', methods=['POST'])
def register_user():
    data = request.json
    user_id = data.get('user_id') # Optional: If provided, upgrades this guest user
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')
    
    if not all([email, username, password]):
        return jsonify({"error": "Missing fields: Email, Username, and Password are required."}), 400
        
    # Check Uniqueness (Email & Username)
    for u in db.users.values():
        # Check Username (ignore self if upgrading)
        if u['name'].lower() == username.lower():
            if not user_id or u['id'] != user_id:
                return jsonify({"error": "Username already taken"}), 409
        # Check Email
        if u.get('email') and u['email'].lower() == email.lower():
            if not user_id or u['id'] != user_id:
                return jsonify({"error": "Email already registered"}), 409

    if user_id:
        # Upgrade existing Guest
        user = db.get_user(user_id)
        if not user:
            return jsonify({"error": "Guest user not found"}), 404
        
        # If user is in persistent DB (already upgraded/registered), allow update if password matches?
        # But this is 'register', not 'update profile'.
        # Assuming we are migrating a guest from temp_guests to users.
        
        if user['id'] in db.users:
            return jsonify({"error": "User already registered. Please login."}), 409
            
        # Migrate from Guest to Registered
        user['name'] = username
        user['email'] = email
        user['password'] = hash_password(password)
        user['is_guest'] = False
        
        # Cap XP at 150 for migration
        if user['total_xp'] > XP_CONFIG['GUEST_XP_CAP']:
            user['total_xp'] = XP_CONFIG['GUEST_XP_CAP']
            # Also adjust daily/weekly to reflect cap? Or just leave them?
            # Let's cap them proportionally or just reset daily/weekly if they exceed total.
            # Simple: just cap total.
        
        # Recalculate level after cap
        user['level'] = calculate_level(user['total_xp'])
        
        # Move to persistent storage
        db.users[user['id']] = user
        if user['id'] in db.temp_guests:
            del db.temp_guests[user['id']]
            
        db.save_users()
        return jsonify({"message": "Account created! Guest progress saved.", "user": user})
    else:
        # Create NEW Registered User
        user = db.create_user(name=username, password=password, email=email, is_guest=False)
        return jsonify({"message": "Account created successfully!", "user": user})

@app.route('/api/user/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    guest_id = data.get('guest_id')
    
    # Simple search
    target_user = None
    for user in db.users.values():
        is_name_match = user['name'].lower() == username.lower()
        is_email_match = user.get('email') and user['email'].lower() == username.lower()
        
        # Use check_password for secure verification (handles hashed and plain text legacy)
        stored_password = user.get('password', '')
        if (is_name_match or is_email_match) and check_password(stored_password, password):
            target_user = user
            break
            
    if target_user:
        # Merge Guest Data if exists
        if guest_id and guest_id != target_user['id']:
            guest = db.get_user(guest_id)
            # Only merge if it's a temp guest
            if guest and guest.get('is_guest') and guest['id'] in db.temp_guests:
                # Merge XP (Capped at 150 addition)
                xp_to_add = min(guest['total_xp'], XP_CONFIG['GUEST_XP_CAP'])
                target_user['total_xp'] += xp_to_add
                
                # Merge Badges
                if 'badges' not in target_user: target_user['badges'] = []
                for b in guest.get('badges', []):
                    if b not in target_user['badges']:
                        target_user['badges'].append(b)
                        
                # Recalculate Level
                target_user['level'] = calculate_level(target_user['total_xp'])
                
                # Clean up temp guest
                if guest_id in db.temp_guests:
                    del db.temp_guests[guest_id]
                
                # Save
                db.save_users()
                
        return jsonify({"message": "Login successful", "user": target_user})
            
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/api/user/profile', methods=['GET'])
def get_profile():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({"error": "User ID required"}), 400
    
    user = db.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    # Check Resets first
    check_resets(user)
        
    # Calculate Rank dynamically (Registered only)
    users_list = [u for u in db.users.values() if not u.get('is_guest', False)]
    users_list.sort(key=lambda x: x['total_xp'], reverse=True)
    
    rank = 0
    xp_to_next_rank = 0
    
    if not user.get('is_guest', False):
        for i, u in enumerate(users_list):
            if u['id'] == user_id:
                rank = i + 1
                # Calculate XP to next rank (user above me)
                if i > 0:
                    next_user = users_list[i-1]
                    xp_to_next_rank = next_user['total_xp'] - user['total_xp'] + 1
                else:
                    xp_to_next_rank = 0 # Already #1
                break
    else:
        # Guest View logic
        rank = "-"
        xp_to_next_rank = XP_CONFIG['GUEST_XP_CAP'] - user['total_xp']
            
    # Calculate Movement
    movement = 0
    if rank != "-" and user.get('yesterday_rank', 0) > 0:
        movement = user['yesterday_rank'] - rank
            
    # Calculate Subject Ranks
    subject_ranks = {}
    if not user.get('is_guest', False):
        for subj in user['subjects']:
            subj_users = [u for u in users_list if subj in u.get('subjects', {})]
            sorted_subj = sorted(subj_users, key=lambda x: x['subjects'][subj]['xp'], reverse=True)
            for i, u in enumerate(sorted_subj):
                if u['id'] == user_id:
                    subject_ranks[subj] = i + 1
                    break
            
    return jsonify({
        "user": user,
        "rank": rank,
        "xp_to_next_rank": xp_to_next_rank,
        "rank_movement": movement,
        "total_learners": len(users_list),
        "subject_ranks": subject_ranks,
        "all_badges": BADGES,
        "level_title": get_level_title(user['level']),
        "is_guest": user.get('is_guest', False),
        "guest_cap": XP_CONFIG['GUEST_XP_CAP']
    })

@app.route('/api/xp/submit', methods=['POST'])
def submit_answer():
    data = request.json
    user_id = data.get('user_id')
    subject = data.get('subject', 'Math')
    difficulty = data.get('level', 'Beginner')
    is_correct = data.get('is_correct', False)
    question_id = data.get('question_id')
    
    user = db.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    # Update User Stats
    if is_correct:
        # Streak logic: Only updates on correct answer/learning activity (once per day)
        update_streak_on_activity(user)
        user['stats']['correct'] += 1
    else:
        # Wrong answer does NOT reset streak (per user req: "Streak resets if a day is skipped")
        # It just doesn't increment it.
        user['stats']['wrong'] += 1
        
    # Calculate XP
    xp_gain, message = get_xp_gain(user, is_correct, difficulty, user['streak'])
    
    # Guest XP Cap Check
    if user.get('is_guest', False):
        if user['total_xp'] >= XP_CONFIG['GUEST_XP_CAP']:
            xp_gain = 0
            message = "Guest Limit Reached! Register to earn more."
        elif user['total_xp'] + xp_gain > XP_CONFIG['GUEST_XP_CAP']:
            # Allow partial gain to hit exactly 150
            xp_gain = XP_CONFIG['GUEST_XP_CAP'] - user['total_xp']
            message = "Guest Limit Reached! Register to earn more."
    
    # Update Totals
    user['total_xp'] += xp_gain
    user['daily_xp'] += xp_gain
    if 'weekly_xp' not in user: user['weekly_xp'] = 0
    user['weekly_xp'] += xp_gain
    
    # Ensure XP doesn't drop below 0 (overall)
    if user['total_xp'] < 0: user['total_xp'] = 0
    if user['daily_xp'] < 0: user['daily_xp'] = 0
    if user['weekly_xp'] < 0: user['weekly_xp'] = 0
    
    # Update Level
    old_level = user['level']
    user['level'] = calculate_level(user['total_xp'])
    level_up = user['level'] > old_level
    
    # Update Subject Stats
    if subject not in user['subjects']:
        user['subjects'][subject] = {"xp": 0, "level": 1}
    
    # Subject XP also gets the same gain
    user['subjects'][subject]['xp'] += xp_gain
    if user['subjects'][subject]['xp'] < 0: user['subjects'][subject]['xp'] = 0
    user['subjects'][subject]['level'] = calculate_level(user['subjects'][subject]['xp'])
    
    # Save User
    db.save_users()
    
    # Update Global Stats
    db.stats['global']['total_xp'] += xp_gain
    if difficulty == 'Beginner':
        db.stats['global']['beginner_answers'] += 1
    else:
        db.stats['global']['hard_answers'] += 1
        
    # Update Question Stats
    if question_id:
        if question_id not in db.stats['questions']:
            db.stats['questions'][question_id] = {"correct": 0, "wrong": 0}
        
        if is_correct:
            db.stats['questions'][question_id]['correct'] += 1
        else:
            db.stats['questions'][question_id]['wrong'] += 1
            
    db.save_stats()
    
    # Update History (Limit to last 50)
    if 'history' not in user: user['history'] = []
    user['history'].append({
        "date": str(date.today()),
        "subject": subject,
        "correct": is_correct
    })
    if len(user['history']) > 50:
        user['history'].pop(0)
    
    # Check Badges
    new_badges = check_badges(user)
    if new_badges:
        db.save_users()

    return jsonify({
        "xp_gain": xp_gain,
        "total_xp": user['total_xp'],
        "level": user['level'],
        "level_up": level_up,
        "streak": user['streak'],
        "message": message,
        "new_badges": new_badges
    })

@app.route('/api/rankings', methods=['GET'])
def get_rankings():
    ranking_type = request.args.get('type', 'global') # global, daily, weekly, subject
    subject_filter = request.args.get('subject', 'Math')

    # Filter out guests first
    users_list = [u for u in db.users.values() if not u.get('is_guest', False)]

    def get_accuracy(user):
        correct = user.get('stats', {}).get('correct', 0)
        wrong = user.get('stats', {}).get('wrong', 0)
        total = correct + wrong
        return (correct / total) if total > 0 else 0

    if ranking_type == 'daily':
        # Sort by daily_xp, then accuracy
        sorted_users = sorted(users_list, key=lambda x: (x.get('daily_xp', 0), get_accuracy(x)), reverse=True)
    elif ranking_type == 'weekly':
        # Sort by weekly_xp, then accuracy
        sorted_users = sorted(users_list, key=lambda x: (x.get('weekly_xp', 0), get_accuracy(x)), reverse=True)
    elif ranking_type == 'subject':
        # Sort by subject XP, then accuracy (using global accuracy as proxy for simplicity, or could refine to subject specific if tracked)
        # Using global accuracy as secondary for now
        sorted_users = sorted(
            users_list, 
            key=lambda x: (x.get('subjects', {}).get(subject_filter, {}).get('xp', 0), get_accuracy(x)), 
            reverse=True
        )
    else:
        # Default: Global Total XP, then accuracy
        sorted_users = sorted(users_list, key=lambda x: (x['total_xp'], get_accuracy(x)), reverse=True)
    
    # Return top 50
    top_50 = []
    for i, u in enumerate(sorted_users[:50]):
        xp_val = 0
        if ranking_type == 'daily':
            xp_val = u.get('daily_xp', 0)
        elif ranking_type == 'weekly':
            xp_val = u.get('weekly_xp', 0)
        elif ranking_type == 'subject':
            xp_val = u.get('subjects', {}).get(subject_filter, {}).get('xp', 0)
        else:
            xp_val = u['total_xp']
            
        top_50.append({
            "id": u['id'],
            "rank": i+1,
            "name": u['name'],
            "xp": xp_val,
            "level": u['level'],
            "title": get_level_title(u['level']),
            "badge": "🥇" if i==0 else ("🥈" if i==1 else ("🥉" if i==2 else "⭐"))
        })
    
    return jsonify({"rankings": top_50, "type": ranking_type, "subject": subject_filter})

@app.route('/api/session/complete', methods=['POST'])
def complete_session():
    data = request.json
    user_id = data.get('user_id')
    duration_sec = data.get('duration', 0) # in seconds
    
    user = db.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    # Update Stats
    user['stats']['sessions'] += 1
    user['stats']['time_spent_minutes'] += int(duration_sec / 60)
    
    # Update streak for session completion
    update_streak_on_activity(user)
    
    # Session Bonus: 1 XP per minute, max 20 XP per session
    minutes = int(duration_sec / 60)
    bonus_xp = min(minutes * 1, 20)
    
    if bonus_xp > 0:
        user['total_xp'] += bonus_xp
        user['daily_xp'] += bonus_xp
        # Check level up from bonus
        user['level'] = calculate_level(user['total_xp'])
        
    # Check Badges
    new_badges = check_badges(user)
    
    db.save_users()
    
    return jsonify({
        "bonus_xp": bonus_xp,
        "total_xp": user['total_xp'],
        "sessions": user['stats']['sessions'],
        "message": f"Session Complete! +{bonus_xp} Bonus XP",
        "new_badges": new_badges
    })

@app.route('/api/admin/stats', methods=['GET'])
def get_admin_stats():
    # Simple aggregated stats
    users = list(db.users.values())
    total_users = len(users)
    total_xp = sum(u['total_xp'] for u in users)
    avg_xp = total_xp / total_users if total_users > 0 else 0
    
    # Engagement
    global_stats = db.stats.get('global', {})
    
    # Create a map of ID -> Text for detailed question stats
    id_to_text = {}
    for subj, content in QUESTION_BANK.items():
        # Check if content has "Beginner" or "Hard" keys directly (Type 2: Simple Subjects)
        if "Beginner" in content or "Hard" in content:
            for lvl in ["Beginner", "Hard"]:
                if lvl in content:
                    for q in content[lvl]:
                        qid = get_question_id(q['q'])
                        id_to_text[qid] = q['q']
        else:
            # Type 1: Nested Categories (e.g., Math -> Algebra)
            for cat, sub_content in content.items():
                 for lvl in ["Beginner", "Hard"]:
                    if isinstance(sub_content, dict) and lvl in sub_content:
                        for q in sub_content[lvl]:
                            qid = get_question_id(q['q'])
                            id_to_text[qid] = q['q']
                        
    most_failed = []
    q_stats = db.stats.get('questions', {})
    for qid, stats in q_stats.items():
        if stats['wrong'] > 0:
            most_failed.append({
                "question": id_to_text.get(qid, "Unknown Question"),
                "wrong": stats['wrong'],
                "correct": stats['correct']
            })
            
    most_failed.sort(key=lambda x: x['wrong'], reverse=True)
    
    # Level Distribution (for Charts)
    level_dist = {"Level 1-5": 0, "Level 6-10": 0, "Level 11+": 0}
    for u in users:
        lvl = u.get('level', 1)
        if lvl <= 5: level_dist["Level 1-5"] += 1
        elif lvl <= 10: level_dist["Level 6-10"] += 1
        else: level_dist["Level 11+"] += 1
        
    # Subject Performance (Avg Accuracy & Avg XP)
    subject_stats = {} # { "Math": {correct: 0, total: 0, total_xp: 0, users: 0} }
    
    for u in users:
        # Check specific subject stats in 'subjects'
        for subj, data in u.get('subjects', {}).items():
            if subj not in subject_stats:
                subject_stats[subj] = {"correct": 0, "total": 0, "total_xp": 0, "users": 0}
            
            subject_stats[subj]['total_xp'] += data.get('xp', 0)
            subject_stats[subj]['users'] += 1
            
        # Check history for accuracy per subject (more granular)
        # Or estimate from global stats if history is empty for old users?
        # Let's use history for accuracy if available, otherwise 0
        for entry in u.get('history', []):
            subj = entry.get('subject', 'Unknown')
            if subj not in subject_stats:
                 subject_stats[subj] = {"correct": 0, "total": 0, "total_xp": 0, "users": 0}
            
            subject_stats[subj]['total'] += 1
            if entry.get('correct'):
                subject_stats[subj]['correct'] += 1

    # Format for Frontend
    subj_performance = []
    for subj, stats in subject_stats.items():
        avg_xp = stats['total_xp'] / stats['users'] if stats['users'] > 0 else 0
        accuracy = (stats['correct'] / stats['total'] * 100) if stats['total'] > 0 else 0
        subj_performance.append({
            "subject": subj,
            "avg_xp": int(avg_xp),
            "accuracy": int(accuracy)
        })
    
    return jsonify({
        "total_users": total_users,
        "total_xp": total_xp,
        "avg_xp": int(avg_xp),
        "active_today": len([u for u in users if u.get('last_active_date') == str(date.today())]),
        "beginner_answers": global_stats.get('beginner_answers', 0),
        "hard_answers": global_stats.get('hard_answers', 0),
        "most_failed": most_failed[:10],
        "level_distribution": level_dist,
        "subject_performance": subj_performance
    })

# Serve Frontend
@app.route('/')
def serve_index():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(FRONTEND_DIR, path)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
