import React, { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa"; // Added Chevron Down icon
import MegaMenu from "../home/megamenu"; 
import "../../NewHeader.css";
import logo from "../../images/mallorcalogoblack.png";

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="new-header">
        <div className="container">
          <div className="row align-items-center">
            {/* Desktop Menu */}
            <div className="col-lg-12 d-flex justify-content-center d-none d-lg-flex">
              <ul className="new-header-menu">
                {/* Dropdown Menu with Arrow */}
                <li 
                  className="dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a href="/wedding-venues">
                    Your Wedding Venues 
                    <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`} />
                  </a>
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      <li><a href="/club-nautico">Club Nautico Porto Cristo</a></li>
                      <li><a href="/finca-art">Finca Art</a></li>
                      <li><a href="/fincasa-plana">Finca Sa Plana Nova</a></li>
                      <li><a href="/finca-encanto">Finca Encanto</a></li>
                      <li><a href="/la-vista-marina">La Vista Marina</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/catering">Catering</a></li>
                <li><a href="/private-chef">Private Chef</a></li>
                <li><a href="/corporate-events">Corporate Events & Team Building</a></li>
                <li><a href="/private-events">Private Events</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact-us">Contact & Map</a></li>
              </ul>
            </div>

            {/* Mobile View */}
            <div className="col-12 d-flex justify-content-between d-lg-none">
              <img src={logo} alt="Mallorca Header Logo" className="mobile-header-logo" />
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
