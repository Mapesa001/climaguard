// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TempGuard from './TempGuard';
import IceGuard from './IceGuard';
import CarbonGuard from './CarbonGuard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tempguard" element={<TempGuard />} />
        <Route path="/iceguard" element={<IceGuard />} />
        <Route path="/carbonguard" element={<CarbonGuard />} />
      </Routes>
    </Router>
  );
}

export default App;
