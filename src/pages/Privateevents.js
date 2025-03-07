// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/privateeventbanner.webp';
import bannertwo from '../../src/images/privateeventimgsec.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import imageSrc from "../images/Corporatesec1.webp";
import imageSrc2 from "../images/Corporate&TeamBuildingEvents.jpeg"; 

// import HeroBanner from '../components/home/mainbanner';





function Privateevents() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Private Events"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={aboutus}
                />
    </div>
    <section className="weddingbnrtwo py-5">
      <div className="container d-flex flex-column align-items-center text-center">
        <div className="col-8 sm-12 md-10 lg-col-12">
        <p className="venue-description">
          Our majestic Club Nautico is in Porto Cristo, a working fishing
          village on the east coast of Mallorca. Porto Cristo is a very relaxed
          and beautiful area with the marina being the hub and a variety of
          hotels and accommodation options to choose from...
        </p>
        {/* Main Heading */}
        {/* <h2 className="wedvenues-heading" >
        Wedding Venues
        </h2> */}
        </div>

        {/* Image */}
        <img
          src={bannertwo} // Replace with actual image path
          alt="Wedding Venue"
          className="img-fluid rounded"
        />

        {/* Heading Below Image */}
        {/* <h3 className="venue-title">Club Nautica Porto Cristo</h3> */}

        {/* Description */}
   

        {/* View Details Button */}
       {/* <a href="/club-nautico"> <button className="view-details-btn">VIEW DETAILS</button></a> */}
      </div>
    </section>
 
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Privateevents;
