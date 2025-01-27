# backend/modules/tempguard.py

import random

def get_temperature_prediction():
    # Simulate daily temperature predictions over a week
    temperature_data = [{"day": i + 1, "temperature": round(random.uniform(20, 40), 2)} for i in range(7)]
    return temperature_data
