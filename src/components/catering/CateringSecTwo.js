import React from "react";
import "../../cateringsectwo.css";
import cateringImage from "../../images/cateringimg3.webp";

const CateringSecTwo = () => {
  return (
    <section className="cateringsectwo container">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-lg-6 cateringsectwo-text">
          <h2>Our Catering Services</h2>
          <p>
            Transform your celebration into a culinary masterpiece with our Private Chef and catering service, delivering restaurant-quality cuisine in the comfort of your home or chosen venue anywhere on the island of Mallorca. From intimate dinners for two, to grand weddings and corporate events, no gathering is too big or small.
          </p>
          <p>
            For us, cooking is more than just preparing food; it's an art form fueled by creativity and passion. Each dish is crafted with enthusiasm, turning every meal into a celebration.
          </p>
          <button className="cateringsectwo-btn">CONTACT US</button>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-6">
          <img src={cateringImage} alt="Catering Service" className="img-fluid cateringsectwo-img" />
        </div>
      </div>
    </section>
  );
};

export default CateringSecTwo;
