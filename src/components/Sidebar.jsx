import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FaHome /><a href="#home">Home</a></li>
        <li><FaUser /><a href="#profile">Profile</a></li>
        <li><FaCog /><a href="#settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
