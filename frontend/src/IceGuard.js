// frontend/src/IceGuard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './IceGuard.css'; // Import the CSS file

function IceGuard() {
  const [seaLevelData, setSeaLevelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/iceguard')
      .then(response => {
        setSeaLevelData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching sea level data", error);
        setError("Unable to fetch sea level data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="iceguard-card"> {/* Apply the card class for styling */}
      <h2 className="iceguard-title">Weekly Sea Level Rise Predictions</h2>
      {loading ? (
        <p className="loading-spinner">Loading data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul>
          {seaLevelData.map((data, index) => (
            <li key={index}>Week {data.week}: {data.sea_level_rise} cm</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IceGuard;
