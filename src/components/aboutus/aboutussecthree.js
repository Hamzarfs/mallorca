import React from "react";
import "../../aboutusthree.css";
import imageSrc from "../../images/segioimg.webp";
import imageSrc2 from "../../images/claire.webp"; 
import lucas from "../../images/lucasimg.webp";

const AboutUsThree = () => {
  return (
    <section className="aboutusthree py-5">
      <div className="container">
        {/* First Row - Default Order */}
        <div className="row align-items-center mb-5">
          {/* Left Column - Image */}
          <div className="col-md-5 text-center">
            <img src={imageSrc} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph */}
          <div className="col-md-7">
            <div className="heading-container">
              <h2 className="stroke-text">Sergio</h2>
              <h2 className="strokhead">Sergio</h2>
              <p><b>Director</b></p>
            </div>
            <p>
              With years of experience managing top-tier hotels across Spain
              and running his own successful Cooking Holidays business, Sergio
              brings a wealth of expertise and passion to the world of weddings
              and events. As the General Manager of the renowned Yacht Club
              Cala d’Or for 12 years, he oversaw hundreds of spectacular
              events, earning a stellar reputation in Mallorca’s events scene.
            </p>
            <p>
              Sergio then went on to set up Mallorca Weddings & Events almost 4
              years ago. His commitment to crafting exceptional cuisine, paired
              with his meticulous attention to detail, has made him a trusted
              name in creating unforgettable celebrations. Fluent in Italian,
              Spanish, Russian, and English, Sergio seamlessly connects with
              clients from around the globe, ensuring every event is as
              personal as it is extraordinary.
            </p>
          </div>
        </div>

        {/* Second Row - Reverse Order */}
        <div className="row align-items-center flex-md-row-reverse">
          {/* Left Column - Image (Now on Right) */}
          <div className="col-md-5 text-center">
            <img src={imageSrc2} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph (Now on Left) */}
          <div className="col-md-7">
            <div className="heading-container">
              <h2 className="stroke-text">Claire</h2>
              <h2 className="strokhead">Claire</h2>
              <p><b>Wedding & Event Manager</b></p>
            </div>
            <p>
            Claire brings 16 years of passionate dedication to the wedding industry, making her an expert at creating unforgettable celebrations. Formerly the Wedding & Events Manager at the prestigious Yacht Club Cala d’Or, Claire had the privilege of working alongside Sergio, describing herself as "the luckiest person in the world" to have been part of so many incredible weddings.
            </p>
            <p>
            Her deep knowledge of Mallorca, paired with excellent connections to the island's top-rated suppliers, ensures that your wedding will be flawlessly planned and executed with care, creativity, and unmatched expertise.
            </p>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          {/* Left Column - Image */}
          <div className="col-md-5 text-center">
            <img src={lucas} alt="lucas" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph */}
          <div className="col-md-7">
            <div className="heading-container">
              <h2 className="stroke-text">Lucas  </h2>
              <h2 className="strokhead">Lucas Aguilera </h2>
              <p><b>Executive Chef</b></p>
            </div>
            <p>
            Luca Aguilera, an Argentinian-born, highly talented, and experienced Executive Chef, leads the culinary team at Mallorca Weddings & Events, delivering exceptional dining experiences for all types of celebrations. Whether it’s an intimate gathering, a lavish wedding, a corporate function, or a grand-scale event, Luca’s passion and expertise ensure every dish is crafted to perfection.
            </p>
            <p>
            Luca specializes in a diverse range of cuisines, including Mediterranean, Spanish, Italian, Latin American, Asian, Middle Eastern, and Vegan dishes. His extensive knowledge and creativity allow him to curate menus that cater to a variety of tastes and dietary preferences, ensuring an unforgettable dining experience for every guest.
            </p>
            <p>
As the Executive Chef, Luca is dedicated to creating unforgettable culinary experiences for every event. His meticulous attention to detail and commitment to excellence allow him to transform any occasion into a gastronomic delight. Whether it's a gourmet plated dinner, a luxury BBQ, or an exquisite buffet, his focus remains on delivering outstanding taste, presentation, and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsThree;
