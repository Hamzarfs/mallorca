import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../components/home/topbar";
import Footer from "../components/home/footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Topbar/>
    <div className="container py-5">
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <p className="text-muted text-center">Last updated: 1st March 2025</p>

      <div className="mt-4">
        <h2>1. Information We Collect</h2>
        <p>We may collect and process the following information:</p>
        <ul>
          <li>Personal details such as name, email, phone number, and postal address when you contact us or book our services.</li>
          <li>Payment details when making a reservation.</li>
          <li>Technical information, including IP address, browser type, and cookies, to improve website functionality.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and manage our wedding and event services.</li>
          <li>Communicate with you regarding inquiries, bookings, and customer support.</li>
          <li>Improve our website and services.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>3. Data Protection & Security</h2>
        <p>We take appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>
      </div>

      <div className="mt-4">
        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or share your personal data with third parties except:</p>
        <ul>
          <li>When required by law.</li>
          <li>With trusted service providers who assist us in delivering our services (e.g., payment processors).</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>Request details on how we process your data.</li>
        </ul>
        <p>
          To exercise these rights, contact us at:{" "}
          <a href="mailto:info@mallorcaweddingsandevents.com" className="no-style">
            info@mallorcaweddingsandevents.com
          </a>
        </p>
      </div>

      <div className="mt-4">
        <h2>6. Cookies Policy</h2>
        <p>We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, but some website features may not function properly.</p>
      </div>

      <div className="mt-4">
        <h2>7. Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Please check this page regularly for any changes.</p>
        <p>
          For questions, contact us at:{" "}
          <a href="mailto:info@mallorcaweddingsandevents.com" className="no-style">
            info@mallorcaweddingsandevents.com
          </a>
        </p>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .no-style {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
