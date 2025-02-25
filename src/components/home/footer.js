import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "../../footer.css"; // Unique CSS file

const Footer = () => {
  return (
    <footer className="custom-footer">
      {/* First Row: Large Heading */}
      <div className="container">
      <h2 className="footer-heading">
  You Dream <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; & relax. <br /> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; We plan.
</h2>

      </div>

      {/* Second Row: Navigation Links */}
      <div className="footer-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/wedding-venues">Wedding Venues</a></li>
          <li><a href="/corporate-events">Corporate & Team Building Events</a></li>
          <li><a href="/private-chef">Private Chef Services</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact Us</a></li>
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
