# backend/modules/carbonguard.py

import random

def get_carbon_emission_prediction():
    # Simulate weekly carbon emissions in metric tons
    carbon_data = [{"week": i + 1, "carbon_emission": round(random.uniform(50, 150), 2)} for i in range(7)]
    return carbon_data
