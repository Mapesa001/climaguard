import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file
import climaguardImage from './climaguard_system.jpg'; // Import the image

function Home() {
  return (
    <div className="home-container">
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li><Link to="/tempguard" className="feature-button">Temperature Guard</Link></li>
          <li><Link to="/iceguard" className="feature-button">Ice Guard</Link></li>
          <li><Link to="/carbonguard" className="feature-button">Carbon Guard</Link></li>
        </ul>
      </div>
      <div className="right-side">
        <h1 className="system-name">ClimaGuard AI</h1> {/* System Name */}
        <p className="system-description">
          ClimaGuard AI provides advanced predictions for temperature changes, sea level rise, and carbon emissions, helping communities to adapt to climate change.
        </p> {/* Description */}
        <div className="system-image">
          <img src={climaguardImage} alt="ClimaGuard AI" style={{ width: '100%', height: 'auto' }} /> {/* System Image */}
        </div>
        <div className="cards">
          <div className="card">
            <h3>Temperature Predictions</h3>
            <p>Get the latest weekly temperature predictions.</p>
            <Link to="/tempguard">View</Link>
          </div>
          <div className="card">
            <h3>Sea Level Predictions</h3>
            <p>Stay updated with weekly sea level rise predictions.</p>
            <Link to="/iceguard">View</Link>
          </div>
          <div className="card">
            <h3>Carbon Emissions Predictions</h3>
            <p>Check out the latest weekly carbon emissions predictions.</p>
            <Link to="/carbonguard">View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
