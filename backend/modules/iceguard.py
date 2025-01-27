# backend/modules/iceguard.py

import random

def get_sea_level_prediction():
    # Simulate weekly sea level rise predictions in centimeters
    sea_level_data = [{"week": i + 1, "sea_level_rise": round(random.uniform(0.1, 0.5), 2)} for i in range(7)]
    return sea_level_data
