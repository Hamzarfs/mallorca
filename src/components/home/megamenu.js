import React from "react";
import "../../megamenu.css"; // Unique CSS for Mega Menu
import logo from "../../images/mallcorawhitelogo.png";
import { FaInstagram, FaYoutube, FaFacebookF, FaTimes } from "react-icons/fa";

const MegaMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`megamenu ${isOpen ? "open" : ""}`}>
      <div className="container">
        {/* 🔹 First Row: Logo & Close Button */}
        <div className="row align-items-center">
          <div className="col-6">
          <a href="/">
            <img src={logo} alt="Mallorca Weddings & Events" className="mega-logo" /></a>
          </div>
          <div className="col-6 text-end">
            <FaTimes className="close-btn" onClick={onClose} />
          </div>
        </div>

        {/* 🔹 Border Below */}
        <div className="menu-border"></div>

        {/* 🔹 Second Row: Navigation Links & Social Icons */}
        <div className="row bottom-row">
          {/* Left Column: Navigation Links */}
          <div className="col-md-8 menu-links">
        
    <h2><a href="/">Home</a></h2>
    <h2><a href="/about-us">About Us</a></h2>
    <h2><a href="/wedding-venues">Wedding Venues</a></h2>
    <h2><a href="/wedding-catering">Wedding Catering</a></h2>
    <h2><a href="/private-chef">Private Chef</a></h2>
    <h2><a href="/corporate-events">Corporate Events & Team Building</a></h2>
    <h2><a href="/private-events">Private Events</a></h2>
    <h2><a href="/gallery">Gallery</a></h2>
    <h2><a href="/contact-us">Contact & Map</a></h2>


          </div>

          {/* Right Column: Social Icons */}
          {/* <div className="col-md-4 megamenu-social">
            <FaInstagram className="megamenu-icon" />
            <FaYoutube className="megamenu-icon" />
            <FaFacebookF className="megamenu-icon" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
