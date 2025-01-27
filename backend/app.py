# backend/app.py

from flask import Flask, jsonify
from flask_cors import CORS
from modules.tempguard import get_temperature_prediction
from modules.iceguard import get_sea_level_prediction  # Import IceGuard function

app = Flask(__name__)
CORS(app)

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({"message": "ClimaGuard AI Backend Running"}), 200

@app.route('/api/tempguard', methods=['GET'])
def tempguard():
    data = get_temperature_prediction()
    return jsonify(data), 200

@app.route('/api/iceguard', methods=['GET'])
def iceguard():
    data = get_sea_level_prediction()
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)
