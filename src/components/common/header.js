import "../../mainheader.css";
import React from "react";
import logo from "../../images/mallorcaheader.svg"
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MainHeader = () => {
  return (
    <header className="mainheader">
      <div className="container">
        <div className="header-content">
          {/* Left Section - Phone Numbers */}
          <div className="header-left">
            <div className="phone-numbers">
              <p><FaPhoneAlt className="icon" /> +44 7876 740698 <br></br>
               +34 671 63 55 11</p>
            </div>
            <div className="whatsapp">
              <FaWhatsapp className="icon" />
              <span>WhatsApp Us</span>
            </div>
            <div className="social-icons">
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
              <FaFacebookF className="icon" />
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="header-center">
  <img src={logo} alt="Mallorca Weddings & Events" className="logo-img" />
  {/* <p className="tagline">YOUR WEDDING, YOUR DREAM, YOUR WAY</p> */}
</div>

          {/* Right Section - Buttons */}
          <div className="header-right">
            <button className="quote-btn">GET A QUOTE</button>
            <div className="menu">
              <span>MENU</span>
              <FaBars className="menu-icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
