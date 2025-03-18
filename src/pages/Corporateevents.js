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

import imageSrc from "../images/corporateleftimg.webp";
import imageSrc2 from "../images/Corporate&TeamBuildingEvents.jpeg"; 
import clubimg from "../images/clubnautico.webp";

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


      <div className="row align-items-center mb-5">
          {/* Left Column - Image */}
          <div className="col-md-5 text-center">
            <img src={imageSrc} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph */}
          <div className="col-md-7">
            <div className="heading-container">
              <h2 className="stroke-text">Corporate</h2>
              <h2 className="strokhead">Corporate & Team-Building Events
              </h2>
            </div>
            <p className="venue-description">
  Take your corporate celebrations and team-building experiences to the next level with an unforgettable event at <strong>Club Náutico Porto Cristo</strong>. Set against the stunning backdrop of Mallorca’s beautiful coastline, our <strong>spacious terrace overlooking the sea</strong> provides the perfect setting for an inspiring and memorable gathering.
</p>

<p className="venue-description">
  Whether you’re looking to reward your team, strengthen collaboration, or simply enjoy a unique group experience, we offer interactive, hands-on activities paired with exceptional dining. Our extensive corporate menu allows you to customize every detail, blending gourmet flavors with engaging culinary challenges.
</p>

<p className="venue-description">
  Learn to craft classic Italian dishes, prepare a delicious spread of authentic tapas, or master the art of traditional Spanish paella—all in a fun and dynamic setting. For an extra dose of excitement, turn up the heat with a <strong>Master Chef-style competition</strong>, where teams go head-to-head in a friendly culinary showdown. Or, take part in a <strong>wine and food pairing experience</strong>, a <strong>cocktail-making workshop</strong>, or an interactive <strong>dessert challenge</strong>.
</p>
          </div>
        </div>


        {/* Second Row - Reverse Order */}
        <div className="row align-items-center flex-md-row-reverse">
          {/* Left Column - Image (Now on Right) */}
          <div className="col-md-5 text-center">
            <img src={clubimg} alt="Sergio" className="img-fluid styled-image" />
          </div>

          {/* Right Column - Heading + Paragraph (Now on Left) */}
          <div className="col-md-7">
            <div className="heading-container">
              {/* <h2 className="stroke-text">Claire</h2>
              <h2 className="strokhead">Claire</h2> */}
            </div>

            <p className="venue-description">
  Beyond team-building activities, <strong>Club Náutico Porto Cristo</strong> is also the perfect venue for a spectacular <strong>gala dinner</strong>, a vibrant <strong>tapas night with multiple food stations</strong>, or a <strong>BBQ under the stars with live music</strong>. With the <strong>Mediterranean breeze, breathtaking sea views, and a relaxed yet elegant ambiance</strong>, our terrace sets the stage for an event that is both exclusive and unforgettable.
</p>

<p className="venue-description">
  The possibilities are endless, and we are here to <strong>tailor-make every detail to match your vision</strong>, ensuring a truly one-of-a-kind experience that your team will remember for years to come.
</p>

<p className="venue-description">
  ✅ Let’s create an event to remember! <strong> <a href="/contact-us" className="text-decoration-none">
      Contact us
    </a> </strong>today and let’s start planning your perfect corporate gathering at Club Náutico Porto Cristo.
</p>

          </div>
        </div>







          {/* Right Column - Heading + Paragraph */}
          <div className="row align-items-center ">
          <div className="col-md-12">
            {/* <div className="heading-container">
              <h2 className="stroke-text">Personal </h2>
              <h2 className="strokhead">Personal & Group Events
              </h2>
            </div> */}

   
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
