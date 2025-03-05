import React from "react";
import "../../HeroBanner.css";
import bannervideo from "../../images/malcorawdding.mp4"

const HeroBanner = () => {
  return (
    <section className="main-banner">
      <video autoPlay loop muted className="background-video">
        <source src={bannervideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h3 className="sub-heading">Where Love Never Fades – Timeless Elegance for Your Perfect Day."</h3>
        <h1 className="hero-heading">YOUR DREAM WEDDING <br></br> IN MALLORCA</h1>
        <a href="/contact-us"><button className="btn-transparent mt-4">Get a Quote</button></a> 
      </div>
    </section>
  );
};

export default HeroBanner;
