import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
          <div className="col-lg-2 d-flex align-items-center text-center">
  <FaPhoneAlt className="topbar-icon" />
  <div className="topbar-text">
    <p><a href="tel:+447876740598" className="phone-link">+44 7876 740598</a></p>
    <p><a href="tel:+34671635511" className="phone-link">+34 671 63 55 11</a></p>
  </div>
</div>


          {/* WhatsApp */}
          {/* <div className="col-lg-2 d-flex align-items-center">
  <a
    href="https://wa.me/447876740598"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link d-flex align-items-center text-decoration-none"
  >
    <FaWhatsapp className="topbar-icon" />
    <span className="topbar-text">WhatsApp Us</span>
  </a>
</div> */}



          {/* Logo */}
          <div className="col-lg-5 text-end">
          <a href="/">
    <img 
      src={logo} 
      alt="Mallorca Weddings & Events" 
      className="topbar-logo" 
    />
  </a>
          </div>

{/* Social Media Icons */}
<div className="col-lg-3 d-flex justify-content-end footer-bottom ps-5">
    {/* <FaInstagram className="footer-left" />
    <FaYoutube className="topbar-social-icon" />
    <FaFacebookF className="topbar-social-icon" />
    <FaTiktok className="topbar-social-icon" />
    <FaTripadvisor className="topbar-social-icon" /> */}

           <div className="footer-left">
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a> */}
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
              {/* <a href="https://x.com/Mallorcaweddin1" target="_blank" rel="noopener noreferrer">
  <FaXTwitter />
</a> */}

           
            </div>
</div>



          {/* Get A Quote Button */}
          <div className="col-lg-2 text-end">
           <a href="/contact-us" target="_blank"> <button className="topbar-quote-btn">GET A QUOTE</button></a>
          </div>
        </div>
      </div>
    </div>
    <NewHeader/>

    </>
  );
};

export default Topbar;
