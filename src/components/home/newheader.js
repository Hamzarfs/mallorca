import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MegaMenu from "../home/megamenu";  // Mega Menu Component
import "../../NewHeader.css"; // Unique CSS for this header
import logo from "../../images/mallorcalogoblack.png";

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="new-header">
        <div className="container">
          <div className="row align-items-center">
            {/* Desktop Menu */}
            <div className="col-lg-12 d-flex justify-content-center d-none d-lg-flex">
              <ul className="new-header-menu">
                {/* <li><a href="/">Home</a></li> */}
                <li><a href="/wedding-venues">Your Wedding Venues</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/our-team">Our Team</a></li>
                <li><a href="/catering">Catering </a></li>
                <li><a href="/catering">Private Chef</a></li>
                <li><a href="/catering">Corporate Events & Team Building</a></li>
                <li><a href="/catering">Private Events</a></li> 
                <li><a href="/contact-us">Contact & Map</a></li>
              </ul>
            </div>

            {/* Mobile View */}
            <div className="col-12 d-flex justify-content-between d-lg-none">
              {/* Logo */}
              <img src={logo} alt="Mallorca Header Logo" className="mobile-header-logo" />
              
              {/* Toggle Menu Button */}
              <div className="menu" onClick={() => setMenuOpen(true)}>
                <FaBars className="menu-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu (Opens on Mobile) */}
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default NewHeader;
