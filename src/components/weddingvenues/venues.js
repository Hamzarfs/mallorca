import React from "react";
import image1 from "../../images/venue1.webp"; 
import image2 from "../../images/venue2.webp";
import image3 from "../../images/venue3.webp";
import image4 from "../../images/venue4.webp";
import "../../wedvenues.css"; // Import CSS

const WedVenues = () => {
  return (
    <section className="wedvenues py-4">
      <div className="container">
        <div className="row justify-content-center">
          {/* First Row */}
          <div className="col-md-6 text-center mt-4">
            <img src={image1} alt="Finca Art" className="img-fluid" />
            <h2 className="venue-title">Finca Art</h2>
            <p className="venue-description">
              Finca Art 9 is a stunning Spanish country home located just
              outside the beautiful village of Ses Salines on the south coast of
              Mallorca.
            </p>
            <a href="/finca-art">   <button className="view-details-btn">VIEW DETAILS</button></a>
          </div>

          <div className="col-md-6 text-center mt-4">
            <img src={image2} alt="Finca Sa Plana Nova" className="img-fluid" />
            <h2 className="venue-title">Finca Sa Plana Nova</h2>
            <p className="venue-description">
              Say ‘I Do’ at the historic Sa Plana Nova, a meticulously restored
              finca dating back to 1880. Steeped in history and breathtaking
              natural landscapes...
            </p>
            <a href="/fincasa-plana">     <button className="view-details-btn">VIEW DETAILS</button></a>
          </div>
        </div>

        <div className="row justify-content-center ">
          {/* Second Row */}
          <div className="col-md-6 text-center mt-4">
            <img src={image3} alt="Finca Encanto" className="img-fluid" />
            <h2 className="venue-title">Finca Encanto</h2>
            <p className="venue-description">
              Finca Art 9 is a stunning Spanish country home located just
              outside the beautiful village of Ses Salines on the south coast of
              Mallorca.
            </p>
            <a href="/finca-Encanto">  <button className="view-details-btn">VIEW DETAILS</button> </a>
          </div>

          <div className="col-md-6 text-center mt-4">
            <img src={image4} alt="La Vista Marina" className="img-fluid" />
            <h2 className="venue-title">La Vista Marina</h2>
            <p className="venue-description">
              This stunning rooftop venue is situated in the heart of the
              marina, in the picturesque resort of Cala d’Or on the south-east
              coast of Mallorca.
            </p>
            <a href="/la-vista-marina">  <button className="view-details-btn">VIEW DETAILS</button> </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WedVenues;
