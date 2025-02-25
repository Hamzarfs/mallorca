import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF, FaTiktok, FaTripadvisor } from "react-icons/fa";
import "../../Topbar.css"; // Ensure to create this CSS file
import logo from "../../images/mallcorawhitelogo.png";
import NewHeader from "./newheader";


const Topbar = () => {
  return (
    <>
    <div className="topbar-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Phone Numbers */}
          <div className="col-lg-2 d-flex align-items-center">
            <FaPhoneAlt className="topbar-icon" />
            <div className="topbar-text">
              <p>+44 7876 740598</p>
              <p>+34 671 63 55 11</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-lg-2 d-flex align-items-center">
            <FaWhatsapp className="topbar-icon" />
            <span className="topbar-text">WhatsApp Us</span>
          </div>

          {/* Logo */}
          <div className="col-lg-4 text-center">
            <img src={logo} alt="Mallorca Weddings & Events" className="topbar-logo" />
          </div>

{/* Social Media Icons */}
<div className="col-lg-2 d-flex justify-content-center topbarsocial-icons">
    <FaInstagram className="topbar-social-icon" />
    <FaYoutube className="topbar-social-icon" />
    <FaFacebookF className="topbar-social-icon" />
    <FaTiktok className="topbar-social-icon" />
    <FaTripadvisor className="topbar-social-icon" />
</div>



          {/* Get A Quote Button */}
          <div className="col-lg-2 text-end">
            <button className="topbar-quote-btn">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
    <NewHeader/>

    </>
  );
};

export default Topbar;
