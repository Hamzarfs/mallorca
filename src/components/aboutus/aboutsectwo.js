import React from "react";
import "../../aboutustwo.css";
import imageSrc from "../../images/aboutustwo.webp"; // Ensure the correct path

const AboutUsTwo = () => {
  return (
    <section className="aboutustwo">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-md-4">
            <p>
              From luxurious venues to seamless planning, we pride ourselves on
              delivering exceptional quality, personalized service, and
              cost-effective solutions in Mallorca’s most stunning and
              exclusive locations. Our multilingual team understands the
              importance of every detail and works tirelessly to ensure your big
              day is as stress-free as it is extraordinary.
            </p>
          </div>

          {/* Center Column - Image */}
          <div className="col-md-4 text-center">
            <img src={imageSrc} alt="Wedding" className="img-fluid rounded-circle" />
          </div>

          {/* Right Column - Text */}
          <div className="col-md-4">
            <p>
              Every love story is one of a kind, and your wedding should be no
              different. Let us turn your vision into reality with care,
              creativity, and the expertise that has made us a trusted name for
              over a decade. Discover why couples continue to praise our
              dedication and let us make your dream day unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
