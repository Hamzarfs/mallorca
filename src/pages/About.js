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
   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default About;
