import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "../../footer.css"; // Unique CSS file

const Footer = () => {
  return (
    <footer className="custom-footer">
      {/* First Row: Large Heading */}
      <div className="container">
      <h2 className="footer-heading">
      Your wedding, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your dream, <br /> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; your way.
</h2>

      </div>

      {/* Second Row: Navigation Links */}
      <div className="footer-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/wedding-venues">Wedding Venues</a></li>
                <li><a href="/catering">Catering</a></li>
                <li><a href="/private-chef">Private Chef</a></li>
                <li><a href="/corporate-events">Corporate Events & Team Building</a></li>
                <li><a href="/private-events">Private Events</a></li>
                <li><a href="/contact-us">Contact & Map</a></li>
        </ul>
      </div>

      {/* Third Row: Social Icons & Policy Links */}
      <div className="container-fluid footer-bottom">
        <div className="footer-left">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="/about-us" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div className="footer-right">
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
