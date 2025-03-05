// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/corporatebanner.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';

import imageSrc from "../images/Corporatesec1.webp";
import imageSrc2 from "../images/Corporate&TeamBuildingEvents.jpeg"; 

// import HeroBanner from '../components/home/mainbanner';





function Corporateevents() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Corporate Events & Team Building"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={aboutus}
                />
    </div>
    {/* <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Private, Corporate & Team building events
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Securing that deal in style… regarded as having some of the finest facilities and restaurants in the Mediterranean, Mallorca Weddings & Events prides itself on its attention to detail, exquisite cuisine and incredible level of service.
        </p>
      </div>
    </div> */}


    <section className="aboutusthree py-5">
      <div className="container">
        {/* First Row - Default Order */}
        <div className="row align-items-center ">
          {/* Left Column - Image */}
          <div className="col-md-5 text-center">
            <img src={imageSrc} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph */}
          <div className="col-md-7">
            {/* <div className="heading-container">
              <h2 className="stroke-text">Personal </h2>
              <h2 className="strokhead">Personal & Group Events
              </h2>
            </div> */}
            <p>
            Treat your team to a memorable corporate celebration or an engaging team-building experience that’s as fun as it is rewarding. With our extensive corporate menu, your event can be customized to suit your exact needs, blending exceptional dining with exciting, hands-on activities.<br></br><br></br>
Learn to craft iconic Italian dishes, create a spread of authentic tapas, or master the art of traditional Spanish paella making—all in a vibrant, interactive setting. These experiences are designed to help your staff unwind, collaborate, and enjoy themselves, fostering connections and creativity. <br></br><br></br>
It’s the perfect recipe for fun, team spirit, and lasting memories!

            </p>
            {/* <p>
              Sergio then went on to set up Mallorca Weddings & Events almost 4
              years ago. His commitment to crafting exceptional cuisine, paired
              with his meticulous attention to detail, has made him a trusted
              name in creating unforgettable celebrations. Fluent in Italian,
              Spanish, Russian, and English, Sergio seamlessly connects with
              clients from around the globe, ensuring every event is as
              personal as it is extraordinary.
            </p> */}
          </div>
        </div>


      </div>
    </section>
 
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Corporateevents;
