import React from "react";
import "../../OurTeam.css"; // Unique CSS for styling
import ourteam1 from "../../images/ourteam1.png";

const OurTeam = ({ reverse = false }) => {
  return (
    <section className="ourteam">
      <div className="container-fluid">
        <div className={`row align-items-stretch team-row ${reverse ? "flex-row-reverse" : ""}`}>
          {/* Left Column - Image */}
          <div className="col-md-6 p-0 team-image">
            <div className="image-wrapper">
              <img src={ourteam1} alt="Sergio" className="img-fluid w-100" />
              <div className="hover-content">
                <h2>Sergio</h2>
                <p>Wedding & Events Manager</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="col-md-6 d-flex flex-column px-4 py-5 team-text">
            <div className="text-content">
              <h2 className="text-white">Sergio</h2>
              <p className="text-white">Wedding & Events Manager</p>
            </div>
            <img src={ourteam1} alt="Sergio" className="img-fluid w-100 hidden-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
