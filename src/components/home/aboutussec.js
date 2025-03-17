import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../aboutussec.css";

const AboutUsSec = () => {
  return (
    <div className="about-section">
      <div className="container-fluid">
        {/* First Row */}
        <div className="row">
          <div className="col-md-6">
            <p>ABOUT US</p>
            <h2 className="about-heading">
              Transforming Dreams Into The Unforgettable Mallorca Weddings
            </h2>
          </div>
          <div className="col-md-6">
            <p className="about-text">
              With over 15 years of experience and more than 700 weddings and events brought to life, Mallorca Weddings & Events is your expert partner in creating breathtaking celebrations. Our close-knit team of event and catering professionals is more than just a group—we’re like family, and this warmth shines through in everything we do.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row text-center mt-4">
        <div className="container">
          <div className="col-12">
            <h2 className="section-title">Where Your Love Story Begins</h2>
            <strong>Because your wedding deserves nothing less than unforgettable.</strong>
            <p className="section-text">
              From luxurious venues to seamless planning, we pride ourselves on delivering exceptional quality, personalized service, and cost-effective solutions in Mallorca’s most stunning and exclusive locations. Our multilingual team understands the importance of every detail and works tirelessly to ensure your big day is as stress-free as it is extraordinary. <br></br><br></br>
            </p>
            <p className="section-text pb-5 mb-5">
              Every love story is one of a kind, and your wedding should be no different. Let us turn your vision into reality with care, creativity, and the expertise that has made us a trusted name for over a decade. Discover why couples continue to praise our dedication and let us make your dream day unforgettable. <br></br><br></br>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSec;
