import React from "react";
import "./Navbar.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="navbar-icons">
        <FaSearch className="navbar-icon" />
        <FaBell className="navbar-icon" />
        <FaUserCircle className="navbar-icon" />
      </div>
    </div>
  );
}

export default Navbar;
