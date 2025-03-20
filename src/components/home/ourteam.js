import React from "react";
import "../../OurTeam.css"; // Unique CSS for styling
import ourteam1 from "../../images/ourteam1.webp";
import ourteam2 from "../../images/ourteam2.webp";
import ourteam3 from "../../images/ourteam3.webp";


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
                <p>With years of experience managing top-tier hotels across Spain and running his own successful Cooking Holidays business, Sergio brings a wealth of expertise and passion to the world of weddings and events. </p>
                <p>
                Sergio then went on to set up Mallorca Weddings & Events almost 4 years ago.  His commitment to crafting exceptional cuisine, paired with his meticulous attention to detail, has made him a trusted name in creating unforgettable celebrations.
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
                <p>Claire brings 16 years of passionate dedication to the wedding industry, making her an expert at creating unforgettable celebrations. Formerly the Wedding & Events Manager at the prestigious Yacht Club Cala d’Or</p>
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

                {/* ✅ First Row (Normal) */}
                <div className="row align-items-stretch team-row">
          {/* Left Column - Image */}
          <div className="col-md-6 p-0 team-image">
            <div className="image-wrapper">
              <img src={ourteam3} alt="Sergio" className="img-fluid w-100" />
              <div className="hover-content">
                <h2>Lucas Aguilera</h2>
                <p>
            Luca Aguilera, an Argentinian-born, highly talented, and experienced Executive Chef, leads the culinary team at Mallorca Weddings & Events, delivering exceptional dining experiences for all types of celebrations. 
            </p>
            <p>
            Luca specializes in a diverse range of cuisines, including Mediterranean, Spanish, Italian, Latin American, Asian, Middle Eastern, and Vegan dishes. His extensive knowledge and creativity allow him to curate menus that cater to a variety of tastes and dietary preferences, ensuring an unforgettable dining experience for every guest.
            </p>
   
              </div>
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="col-md-6 d-flex flex-column px-4 py-5 team-text">
            <div className="text-content">
              <h2 className="text-white">Lucas Aguilera
              </h2>
              <p className="text-white">Executive Chef
              </p>
            </div>
            <img src={ourteam3} alt="Sergio" className="img-fluid w-100 hidden-image" />
          </div>
        </div>
              <div className="container d-flex justify-content-center align-items-center gap-3 py-5">
     
             
              <a href='/about-us' target="_blank"> <button className="weddingbrochure-btn">
                 <span>Learn More</span>
               </button> </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
