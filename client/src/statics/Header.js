// Header.js

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleNavigation = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };

  return (
    <header className="header-container">
      <nav className="nav-container">
        <h1 className="nav-brand">
          <Link to="/">VisionVow</Link></h1>
        <ul className="nav-links">
          <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>Home</Link></li>
          <li><Link to="/aboutus" onClick={(e) => handleNavigation(e, '/aboutus')}>About</Link></li>
          <li><Link to="/dashboard" onClick={(e) => handleNavigation(e, '/dashboard')}>Dashboard</Link></li>
          <li><Link to="/contactus" onClick={(e) => handleNavigation(e, '/contactus')}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
