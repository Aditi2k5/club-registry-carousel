import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CalendarNav.css'; // Use a separate CSS file or reuse the HomeNavbar styles if applicable

const CalendarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages] = useState([
    "Check out upcoming events and celebrations!",
    "Stay tuned for updates on campus activities."
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="./logos/CLUBHUB.png" alt="Logo" className="logo" />
        </div>

        {/* Hamburger menu */}
        <button className="hamburger-button" onClick={toggleSidebar} aria-label="Toggle menu">
          <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar} aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <div className="sidebar-content">
          {/* Button to navigate back to Club Registry */}
          <Link to="/clubregistry" className="sidebar-button" onClick={toggleSidebar}>
            Back to Club Registry
          </Link>
        </div>
      </div>

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

export default CalendarNavbar;
