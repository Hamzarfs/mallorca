import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import "../../cateringsecone.css";
import cateringimg1 from "../../images/cateringimg1.webp";
import cateringimg2 from "../../images/cateringimg2.webp";

const CateringSecOne = () => {
  return (
    <section className="cateringsecone container">
      <div className="row">
        {/* Left Column - Big Image */}
        <div className="col-lg-6">
          <img src={cateringimg1} alt="Chef" className="img-fluid cateringsecone-img" />
        </div>

        {/* Right Column - Full-width Image + Text + Button */}
        <div className="col-lg-6 cateringsecone-content">
          <div className="cateringsecone-image-overlay">
            <img src={cateringimg2} alt="Cooking" className="img-fluid cateringsecone-full-img" />
            <h2 className="cateringsecone-heading">
              <RiDoubleQuotesL className="cateringsecone-quote-icon" />
              We Provide <br /> Exceptional Private <br /> Chef Services
            </h2>
            <button className="cateringsecone-btn">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSecOne;
