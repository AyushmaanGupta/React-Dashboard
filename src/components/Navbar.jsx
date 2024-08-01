import React from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaBars />
        <span>Dashboard</span>
      </div>
      <div className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
