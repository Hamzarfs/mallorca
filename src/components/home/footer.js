import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTripadvisor , FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
                <li><a href="/gallery">Gallery</a></li>
        </ul>
      </div>

      {/* Third Row: Social Icons & Policy Links */}
      <div className="container-fluid footer-bottom">
        <div className="footer-left">
         <a href="https://www.youtube.com/channel/UCHRuPwVKJ_6Ag17eD-LiW3g" target="_blank" rel="noopener noreferrer">
                         <FaYoutube />
                       </a>
                       <a href="https://www.instagram.com/mallorca.weddings.events/" target="_blank" rel="noopener noreferrer">
                         <FaInstagram />
                       </a>
                       <a href="https://www.facebook.com/mallorcaweddingsandevents/" target="_blank" rel="noopener noreferrer">
                         <FaFacebookF />
                       </a>
                       <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g580311-d25929839-Reviews-Mallorca_Weddings_Events-Porto_Cristo_Majorca_Balearic_Islands.html" target="_blank" rel="noopener noreferrer">
                         <FaTripadvisor />
                       </a>
                          <a href="https://www.tiktok.com/@mallorcaweddingsevents" target="_blank" rel="noopener noreferrer">
                         <FaTiktok />
                       </a>
                       {/* <a href="https://x.com/Mallorcaweddin1" target="_blank" rel="noopener noreferrer">
           <FaXTwitter />
         </a> */}
        </div>
        <div className="footer-right">
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-condition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
