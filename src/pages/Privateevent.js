// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/aboutus.png';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';

import imageSrc from "../images/PersonalGroupEvents.jpeg";
import imageSrc2 from "../images/Corporate&TeamBuildingEvents.jpeg"; 

// import HeroBanner from '../components/home/mainbanner';





function Privateevent() {
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
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Private, Corporate & Team building events
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Securing that deal in style… regarded as having some of the finest facilities and restaurants in the Mediterranean, Mallorca Weddings & Events prides itself on its attention to detail, exquisite cuisine and incredible level of service.
        </p>
      </div>
    </div>


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
              <h2 className="stroke-text">Personal </h2>
              <h2 className="strokhead">Personal & Group Events
              </h2>
            </div>
            <p>
            Our professional team are committed to providing an unrivalled service in our stunning locations, presenting you with an exclusive taste of luxury away from the hustle and bustle of everyday life. Creating mouth-watering menus for your event, your requirements will be met with the highest quality ingredients, the best service and the most memorable experiences for yourself and your guests.
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

        {/* Second Row - Reverse Order */}
        <div className="row align-items-center flex-md-row-reverse">
          {/* Left Column - Image (Now on Right) */}
          <div className="col-md-5 text-center">
            <img src={imageSrc2} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph (Now on Left) */}
          <div className="col-md-7">
            <div className="heading-container">
              <h2 className="stroke-text">Corporate & Team Building Events
</h2>
              <h2 className="strokhead">Corporate & Team Building Events
</h2>
            </div>
            <p>
            Why not treat your staff to a fun corporate team building experience. Our Team Building events offer a variety of fun-filled courses, which can be tailor made to suit your requirements. Choose to learn how to cook up some famous Italian dishes, or create a spread of Tapas……..how about learning the art of traditional Spanish paella making. Your staff are guaranteed to relax, challenge and enjoy themselves. A real recipe for fun!
            </p>
            {/* <p>
            Her deep knowledge of Mallorca, paired with excellent connections to the island's top-rated suppliers, ensures that your wedding will be flawlessly planned and executed with care, creativity, and unmatched expertise.
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

export default Privateevent;
