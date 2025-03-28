import React from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Use React Router for navigation
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          {/* Directly using public/logo.png */}
          <img src="/logo.png" alt="Logo" className="logo" />
          <span>Harsh Tech</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">
              <FaHome className="navbar-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle className="navbar-icon" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhone className="navbar-icon" /> Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
