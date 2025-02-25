import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "../../contact-details-end.css"; // Make sure this CSS file exists

const ContactDetailsEnd = () => {
  return (
    <section className="contact-details-end">
      <div className="contact-details-end-container">
        <div className="contact-details-end-row">
          {/* Telephone Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
              <FaPhoneAlt className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">TELEPHONE:</h3>
            <p className="contact-details-end-text">+44 7876 740598 | +34 671 635 511</p>
          </div>

          {/* Address Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
              <FaMapMarkerAlt className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">ADDRESS:</h3>
            <p className="contact-details-end-text">
              Sala Magna, Carrer de la Vela, 29, 07680 Porto Cristo, Illes Balears, Spain
            </p>
          </div>

          {/* Email Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
              <FaEnvelope className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">EMAIL:</h3>
            <p className="contact-details-end-text">info@mallorcaweddingsandevents.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsEnd;
