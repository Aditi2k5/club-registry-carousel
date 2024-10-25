import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ filterClubs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    "REGISTRATIONS OPEN FOR Perspective Panaroma 2.0 - a Paper and Poster Presentation Event",
    "RECRUITMENTS CLOSING SOON FOR CODEKRAFTERS"
  ]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage('');
    }
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="./logos/CLUBHUB.png" alt="Logo" className="logo" />
        </div>

        {/* Navbar buttons */}
        <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => filterClubs('all')}>All Clubs</button>
          <button onClick={() => filterClubs('technical')}>Technical</button>
          <button onClick={() => filterClubs('non-technical')}>Non-Technical</button>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Info Bar */}
      <div className="info-bar">
        <div className="marquee">
          <div className="marquee-content">
            {messages.map((text, index) => (
              <span key={index} className="marquee-item">{text} ★ </span>
            ))}
          </div>
          <div className="marquee-content">
            {messages.map((text, index) => (
              <span key={index} className="marquee-item">{text} ★ </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;