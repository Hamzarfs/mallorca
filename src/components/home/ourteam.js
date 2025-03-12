import React from "react";
import "../../OurTeam.css"; // Unique CSS for styling
import ourteam1 from "../../images/ourteam1.png";
import ourteam2 from "../../images/ourteam2.png";

const OurTeam = () => {
  return (
    <section className="ourteam">
      <div className="container">
        {/* ✅ First Row (Normal) */}
        <div className="row align-items-stretch team-row">
          {/* Left Column - Image */}
          <div className="col-md-6 p-0 team-image">
            <div className="image-wrapper">
              <img src={ourteam1} alt="Sergio" className="img-fluid w-100" />
              <div className="hover-content">
                <h2>Sergio</h2>
                <p>With years of experience managing top-tier hotels across Spain and running his own successful Cooking Holidays business, Sergio brings a wealth of expertise and passion to the world of weddings and events. As the General Manager of the renowned Yacht Club Cala d’Or for 12 years, he oversaw hundreds of spectacular events, earning a stellar reputation in Mallorca’s events scene.</p>
                <p>
                Sergio then went on to set up Mallorca Weddings & Events almost 4 years ago.  His commitment to crafting exceptional cuisine, paired with his meticulous attention to detail, has made him a trusted name in creating unforgettable celebrations. Fluent in Italian, Spanish, Russian, and English, Sergio seamlessly connects with clients from around the globe, ensuring every event is as personal as it is extraordinary.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="col-md-6 d-flex flex-column px-4 py-5 team-text">
            <div className="text-content">
              <h2 className="text-white">Sergio</h2>
              <p className="text-white">Director</p>
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
                <h2>Claire</h2>
                <p>Claire brings 16 years of passionate dedication to the wedding industry, making her an expert at creating unforgettable celebrations. Formerly the Wedding & Events Manager at the prestigious Yacht Club Cala d’Or, Claire had the privilege of working alongside Sergio, describing herself as "the luckiest person in the world" to have been part of so many incredible weddings.</p>
                <p>
                Her deep knowledge of Mallorca, paired with excellent connections to the island's top-rated suppliers, ensures that your wedding will be flawlessly planned and executed with care, creativity, and unmatched expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Section (Now on Left) */}
          <div className="col-md-6 d-flex flex-column px-4 py-5 team-text">
            <div className="text-content">
              <h2 className="text-white">Claire</h2>
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
