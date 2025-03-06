import React from "react";
import { FaPhoneAlt,FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "../../contact-details-end.css"; // Make sure this CSS file exists

const ContactDetailsEnd = () => {
  return (
    <section className="contact-details-end">
      <div className="container d-flex justify-content-center align-items-center text-center py-2">
        <div className="col-md-8 col-lg-6">
          <h2
            className=""
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#A19C7E",
              marginBottom: "10px",
            }}
          >
            Get In Touch
          </h2>
        </div>
      </div>
      <div className="contact-details-end-container">
        <div className="contact-details-end-row">
          {/* Telephone Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
               <FaWhatsapp  className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">CONTACT:</h3>
            <p className="contact-details-end-text">
              <a href="https://wa.me/447876740598" className="contact-link">
                +44 7876 740598
              </a>{" "}
              |{" "}
              <a href="tel:+34671635511" className="contact-link">
                +34 671 635 511
              </a>
            </p>
          </div>

          {/* Address Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
              <FaMapMarkerAlt className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">ADDRESS:</h3>
            <p className="contact-details-end-text">
              <a
                href="https://maps.app.goo.gl/3Fm5PZnfs9xjJ7DP6"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Sala Magna, Carrer de la Vela, 29, 07680 Porto Cristo, Illes Balears, Spain
              </a>
            </p>
          </div>

          {/* Email Column */}
          <div className="contact-details-end-col">
            <div className="contact-details-end-icon-box">
              <FaEnvelope className="contact-details-end-icon" />
            </div>
            <h3 className="contact-details-end-heading">EMAIL:</h3>
            <p className="contact-details-end-text">
              <a href="mailto:info@mallorcaweddingsandevents.com" className="contact-link">
                info@mallorcaweddingsandevents.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsEnd;
