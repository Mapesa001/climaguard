// frontend/src/TempGuard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TempGuard.css'; // Import the CSS file

function TempGuard() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tempguard')
      .then(response => {
        setTemperatureData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching temperature data", error);
        setError("Unable to fetch temperature data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="tempguard-card"> {/* Apply the tempguard-card class for styling */}
      <h2 className="tempguard-title">Weekly Temperature Predictions</h2>
      {loading ? (
        <p className="loading-spinner">Loading data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul>
          {temperatureData.map((data, index) => (
            <li key={index}>Day {data.day}: {data.temperature}°C</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TempGuard;
