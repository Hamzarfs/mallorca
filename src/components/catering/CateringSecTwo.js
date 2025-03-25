import React from "react";
import "../../cateringsectwo.css"; // Updated CSS import path
import cateringImage from "../../images/cateringimg3.webp";
import { FaCheck } from "react-icons/fa";

const CateringSecTwo = () => {
  return (
    <section className="cateringsectwo container">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-lg-6 cateringsectwo-text">
          <p className="cateringsectwo-intro">
            With our personalised approach, you can book your private chef daily to prepare
            your favorite dishes at your chosen location. The service includes:
          </p>
         
          <ul className="cateringsectwo-list">
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Custom menu creation -</strong> Tailored to your tastes and preferences.</p>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Ingredient sourcing & delivery -</strong> Using only the freshest, highest-quality products.</p>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Cooking & full kitchen cleanup – </strong> So you can relax and enjoy the moment.</p>
            </li>
            <li className="no-bullet">
              <p>For those looking for a fully immersive fine dining experience, we also offer
              additional services such as:</p>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Service staff – </strong> Professional waiters for seamless service.</p>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Tableware glassware – </strong> Elegant settings for a sophisticated dining experience.</p>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <p><strong>Cooking & full kitchen cleanup –</strong> Custom setups to match your event's style.</p>
            </li>
          </ul>

          <p className="cateringsectwo-outro">
            Our experienced wedding planners and event managers coordinate every detail, saving you time and ensuring a stress-free, beautifully executed celebration.
          </p>
          <p className="cateringsectwo-outro">
            The greatest benefit of our private chef service is the luxury of time—spending quality moments with your guests while enjoying exceptional cuisine in a relaxed and intimate setting.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-6 cateringsectwo-image-col">
          <img src={cateringImage} alt="Catering Service" className="cateringsectwo-img" />
        </div>
      </div>
      
      <div className="cateringsectwo-cta">
        <p className="cateringsectwo-cta-text">
          With Mallorca Weddings and Events, you're not just booking a chef—you're booking
          an unforgettable culinary experience, designed to indulge your senses and elevate
          your special occasions.
          <br /><br />
          <strong>Contact us today</strong> to book your private chef and let us create something truly
          extraordinary for your next event!
        </p>
        <a href="/contact-us" className="cateringsectwo-btn">CONTACT US</a>
      </div>
    </section>
  );
};

export default CateringSecTwo;