// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/aboutus.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import { FaCheck } from "react-icons/fa";

// import HeroBanner from '../components/home/mainbanner';





function About() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="About Us"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={aboutus}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Transforming Dreams Into Unforgettable Mallorca Weddings
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        With over 15 years of experience and more than 700 weddings and events brought to life, Mallorca Weddings & Events is your expert partner in creating breathtaking celebrations. Our close-knit team of event and catering professionals is more than just a group—we’re like family, and this warmth shines through in everything we do.
        </p>
      </div>
    </div>
    <AboutUsTwo/>
    <AboutUsThree/>
    <div className="container text-center">
      <h4 className="feature-subtitle">
        Because your wedding deserves nothing less than unforgettable.
      </h4>

      <h2 className="section-title mt-4">What Makes Us Unique….</h2>

      <div className="row mt-4 g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="feature-card">
            <div className="card-icon">
              <FaCheck className="text-dark me-2" />
              <strong>Your Wedding, Your Space</strong>
            </div>
            <p className="card-text">
              We host only one event per day, meaning the entire club will be exclusively yours to enjoy—no time limits, no shared spaces.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="feature-card">
            <div className="card-icon">
              <FaCheck className="text-dark me-2" />
              <strong>Tailored Gastronomy</strong>
            </div>
            <p className="card-text">
              We've included our wedding brochure with sample menus and services, but if you have something special in mind, we'd be delighted to create a bespoke menu just for you.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="feature-card">
            <div className="card-icon">
              <FaCheck className="text-dark me-2" />
              <strong>Beyond the Club</strong>
            </div>
            <p className="card-text">
              Dreaming of a different location? Our catering services are available anywhere on the island, so you can enjoy our culinary experience wherever your perfect setting may be.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <OurTeamCards/> */}
    <ContactDetailsEnd/>
    <Footer/>
    

  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default About;
