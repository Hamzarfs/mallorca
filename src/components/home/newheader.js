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
                <li><a href="#">Home</a></li>
                <li><a href="#">Your wedding venues</a></li>
                <li><a href="#">Find out more</a></li>
                <li><a href="#">Catering & Private events</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contact & Map</a></li>
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
