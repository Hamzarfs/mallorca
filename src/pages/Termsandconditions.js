import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../components/home/topbar";
import Footer from "../components/home/footer";

const TermsAndConditions = () => {
  return (
    <>
      <Topbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">Terms & Conditions</h1>
        <p className="text-muted text-center">Last updated: 1st March 2025</p>

        <div className="mt-4">
          <h2>1. Booking & Payment</h2>
          <ul>
            <li>
              A deposit is required to confirm bookings. The remaining balance
              must be paid <strong>[X days]</strong> before the event.
            </li>
            <li>Payments can be made via Credit card or bank transfer.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h2>2. Cancellations & Refunds</h2>
          <p>
            For any cancellations and refunds, please refer to our contract.
          </p>
        </div>

        <div className="mt-4">
          <h2>3. Service Modifications</h2>
          <ul>
            <li>
              We reserve the right to make reasonable modifications to event
              services due to unforeseen circumstances. Clients will be notified
              in advance.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2>4. Liability & Force Majeure</h2>
          <ul>
            <li>
              Mallorca Weddings and Events is not responsible for delays,
              cancellations, or damages caused by force majeure events (e.g.,
              natural disasters, strikes, or emergencies).
            </li>
            <li>
              We are not liable for any third-party service provider issues, but
              we will assist in resolving any disputes.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2>5. Use of Website</h2>
          <ul>
            <li>
              You may not use our website for unlawful purposes or distribute
              harmful content.
            </li>
            <li>
              Unauthorized use of copyrighted materials or content from our
              website is prohibited.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2>6. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued
            use of our services constitutes acceptance of the new terms.
          </p>
          <p>
            For inquiries, contact us at:{" "}
            <a
              href="mailto:info@mallorcaweddingsandevents.com"
              className="no-style"
            >
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
      <Footer />
    </>
  );
};

export default TermsAndConditions;
