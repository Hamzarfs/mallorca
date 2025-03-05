import React from "react";
import "../../WeddingBnrTwo.css"; // Custom CSS
import bannertwo from "../../images/weddingbnrtwo.webp"

const WeddingBnrTwo = () => {
  return (
    <section className="weddingbnrtwo py-2">
      <div className="container d-flex flex-column align-items-center text-center">
        <div className="col-8 sm-12 md-10 lg-col-12">
        {/* Main Heading */}
        <h2 className="wedvenues-heading" >
        Wedding Venues
        </h2>
        </div>

        {/* Image */}
        <img
          src={bannertwo} // Replace with actual image path
          alt="Wedding Venue"
          className="img-fluid rounded"
        />

        {/* Heading Below Image */}
        <h3 className="venue-title">Club Nautica Porto Cristo</h3>

        {/* Description */}
        <p className="venue-description">
          Our majestic Club Nautica is in Porto Cristo, a working fishing
          village on the east coast of Mallorca. Porto Cristo is a very relaxed
          and beautiful area with the marina being the hub and a variety of
          hotels and accommodation options to choose from...
        </p>

        {/* View Details Button */}
       <a href="/club-nautico"> <button className="view-details-btn">VIEW DETAILS</button></a>
      </div>
    </section>
  );
};

export default WeddingBnrTwo;
