import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ filterClubs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
        <Link to="/add-club">
          <button>Add Club Info</button>  {/* Styled as a button like others */}
        </Link>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
