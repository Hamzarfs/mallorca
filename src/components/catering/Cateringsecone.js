import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import "../../cateringsecone.css";
import cateringimg1 from "../../images/cateringimg1.webp";
import cateringimg2 from "../../images/cateringimg2.webp";
import { FaCheck } from "react-icons/fa";

const CateringSecOne = () => {
  return (
    <section className="cateringsecone container">
      <div className="row">
        {/* Left Column - Big Image */}
        <div className="col-lg-6 align-content-center">
          <img src={cateringimg1} alt="Chef" className="img-fluid cateringsecone-img" />
        </div>

        {/* Right Column - Full-width Image + Text + Button */}
        <div className="col-lg-6 cateringsecone-content">
          <div className="cateringsecone-image-overlay cateringsectwo-text">
            {/* <img src={cateringimg2} alt="Cooking" className="img-fluid cateringsecone-full-img" /> */}
            {/* <h2 className="cateringsecone-heading">
              <RiDoubleQuotesL className="cateringsecone-quote-icon" />
              We Provide <br /> Exceptional Private <br /> Chef Services
            </h2>
            <button className="cateringsecone-btn">CONTACT US</button> */}
            <h2 className="" style={{ color: "#A19C7E" }}>
            Our Catering Services
          </h2>
          <p className="text-muted">
            At Mallorca Weddings and Events, we believe that exceptional cuisine is at the heart of every unforgettable celebration. 
            Beyond offering exclusive wedding catering at our four stunning venues, we also provide high-end catering services across 
            the entire island, ensuring a seamless and personalized dining experience at the location of your choice.
          </p>
          <p className="text-muted">
            Whether you are hosting a beachside wedding, a private villa event, a corporate gathering, or a celebration at a 
            beautiful Mallorcan finca, our team will take care of everything—from menu creation and exquisite food preparation 
            to full event setup, including tables, chairs, tableware, and professional service staff.
          </p>
          <p className="fw-bold">To ensure your event runs flawlessly, we also provide full event planning services, including:</p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center text-muted">
              <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
              <p>  <strong>Decoration & Styling –</strong> Elegant setups tailored to your theme.</p>
            </li>
            <li className="d-flex align-items-center text-muted">
              <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
              <p>  <strong>DJ & Entertainment Services –</strong> Music and performances to enhance your event.</p>
            </li>
            <li className="d-flex align-items-center text-muted">
              <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
              <p> <strong>Transport & Transfers –</strong> Seamless guest transportation across the island.</p>
            </li>
            <li className="d-flex align-items-center text-muted">
              <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
              <p>  <strong>Access to Trusted Suppliers –</strong> A handpicked list of vendors for flowers, photography, lighting, and more. </p>
            </li>
          </ul>
          <p className="text-muted">
            Our experienced wedding planners and event managers coordinate every detail, saving you time and ensuring a stress-free, beautifully executed celebration.
          </p>
          <p className="text-muted">
            With Mallorca Weddings and Events, you don’t just get catering—you get a full-service event experience, designed to make your special day effortless & unforgettable.
          </p>
          <p> <strong className="fw-bold"> Contact us </strong> today
           to discuss your catering and event needs, and let us create an
          extraordinary celebration in Mallorca!
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSecOne;
