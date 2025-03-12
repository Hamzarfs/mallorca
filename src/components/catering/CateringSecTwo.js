import React from "react";
import "../../cateringsectwo.css";
import cateringImage from "../../images/cateringimg3.webp";
import { FaCheck } from "react-icons/fa";

const CateringSecTwo = () => {
  return (
    <section className="cateringsectwo container">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-lg-6 cateringsectwo-text">
         <p className="text-muted">
         With our personalized approach, you can book your private chef daily to prepare
         your favorite dishes at your chosen location. The service includes:
                  </p>
                 
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p>  <strong>Custom menu creatio -</strong> Tailored to your tastes and preferences.</p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p>  <strong>Ingredient sourcing & delivery -</strong> Using only the freshest, highest-quality
products.
</p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p> <strong>Cooking & full kitchen cleanup – </strong> So you can relax and enjoy the moment.</p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <p>  For those looking for a fully immersive fine dining experience, we also offer
                      additional services such as: </p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p> <strong>Service staff – </strong> Professional waiters for seamless service.</p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p> <strong>Tableware glassware – </strong>  Elegant settings for a sophisticated dining
                      experience.</p>
                    </li>
                    <li className="d-flex align-items-center text-muted">
                      <FaCheck style={{ color: "#A19C7E", marginRight: "8px" }} />
                      <p> <strong>Cooking & full kitchen cleanup –</strong> Custom setups to match your event’s
                      style.</p>
                    </li>
                    <br></br>
                  </ul>
                  <p className="text-muted">
                  Our experienced wedding planners and event managers coordinate every detail, saving you time and ensuring a stress-free, beautifully executed celebration.
                  </p>
                  <p className="text-muted">
                  The greatest benefit of our private chef service is the luxury of time—spending quality moments with your guests while enjoying exceptional cuisine in a relaxed and intimate setting.
                  </p>
                
         
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-6">
          <img src={cateringImage} alt="Catering Service" className="img-fluid cateringsectwo-img" />
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
    
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        With Mallorca Weddings and Events, you’re not just booking a chef—you’re booking
 an unforgettable culinary experience, designed to indulge your senses and elevate
 your special occasions.<br></br><br></br>
 <strong>Contact us today</strong> to book your private chef and let us create something truly
 extraordinary for your next event!
        <br></br><br></br>

        </p>
       <a href="/contact-us" target="_blank"> <button className="cateringsectwo-btn">CONTACT US</button></a>
      </div>
      
   
    </div>
    
    </section>
  );
};

export default CateringSecTwo;
