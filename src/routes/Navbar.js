import React from 'react';
import './Navbar.css';
const Navbar = ({ filterClubs }) => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src='./logos/CLUBHUB.png' alt='Logo' className='logo'/>
      </div>
      <div className='nav-buttons'>
        <button onClick={() => filterClubs('all')}>All Clubs</button>
        <button onClick={() => filterClubs('technical')}>Technical</button>
        <button onClick={() => filterClubs('non-technical')}>Non-Technical</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
