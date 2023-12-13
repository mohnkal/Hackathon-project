import React, { useState } from 'react';
import './style.scss'; // You can create a separate CSS file for styling

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Logo</div>
        <button className="hamburger" onClick={toggleSidebar}>&#9776;</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>&times;</button>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Your main content goes here */}
      {/* ... */}
    </div>
  );
};

export default Navbar;
