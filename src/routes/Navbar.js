import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setSelectedClub }) => {
  const [showTechnicalDropdown, setShowTechnicalDropdown] = useState(false);
  const [showNonTechnicalDropdown, setShowNonTechnicalDropdown] = useState(false);

  const toggleTechnicalDropdown = () => {
    setShowTechnicalDropdown(!showTechnicalDropdown);
    setShowNonTechnicalDropdown(false); // Close the other dropdown if open
  };

  const toggleNonTechnicalDropdown = () => {
    setShowNonTechnicalDropdown(!showNonTechnicalDropdown);
    setShowTechnicalDropdown(false); // Close the other dropdown if open
  };

  return (
    <nav className="navbar">
      <div className="logo">Club Registry</div>
      <div className="nav-links">
        <button className="nav-button" onClick={() => setSelectedClub('all')}>All Clubs</button>
        <div className="dropdown">
          <button className="nav-button" onClick={toggleTechnicalDropdown}>
            Technical <span className="arrow">▼</span>
          </button>
          {showTechnicalDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => setSelectedClub('Coding Club')}>Coding Club</li>
              <li onClick={() => setSelectedClub('Robotics Club')}>Robotics Club</li>
              {/* Add more technical clubs */}
            </ul>
          )}
        </div>
        <div className="dropdown">
          <button className="nav-button" onClick={toggleNonTechnicalDropdown}>
            Non-Technical <span className="arrow">▼</span>
          </button>
          {showNonTechnicalDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => setSelectedClub('Art Club')}>Art Club</li>
              <li onClick={() => setSelectedClub('Music Club')}>Music Club</li>
              {/* Add more non-technical clubs */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
