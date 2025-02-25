import React from "react";
import "../../OurTeam.css"; // Unique CSS for styling
import ourteam1 from "../../images/ourteam1.png";
import ourteam2 from "../../images/ourteam2.png";

const OurTeam = () => {
  return (
    <section className="ourteam">
      <div className="container-fluid">
        {/* ✅ First Row (Normal) */}
        <div className="row align-items-stretch team-row">
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

        {/* ✅ Second Row (Reversed) */}
        <div className="row align-items-stretch team-row flex-row-reverse">
          {/* Left Column - Image (Now on Right due to flex-row-reverse) */}
          <div className="col-md-6 p-0 team-image">
            <div className="image-wrapper">
              <img src={ourteam2} alt="Sergio" className="img-fluid w-100" />
              <div className="hover-content">
                <h2>Sergio</h2>
                <p>Wedding & Events Manager</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Section (Now on Left) */}
          <div className="col-md-6 d-flex flex-column px-4 py-5 team-text">
            <div className="text-content">
              <h2 className="text-white">Sergio</h2>
              <p className="text-white">Wedding & Events Manager</p>
            </div>
            <img src={ourteam2} alt="Sergio" className="img-fluid w-100 hidden-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
