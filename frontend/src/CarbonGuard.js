// frontend/src/CarbonGuard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarbonGuard.css'; // Import the CSS file

function CarbonGuard() {
  const [carbonData, setCarbonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/carbonguard')
      .then(response => {
        setCarbonData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching carbon emission data", error);
        setError("Unable to fetch carbon data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="carbonguard-card"> {/* Apply the card class for styling */}
      <h2 className="carbonguard-title">Weekly Carbon Emissions Predictions</h2>
      {loading ? (
        <p className="loading-spinner">Loading data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul>
          {carbonData.map((data, index) => (
            <li key={index}>Week {data.week}: {data.carbon_emission} metric tons</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarbonGuard;
