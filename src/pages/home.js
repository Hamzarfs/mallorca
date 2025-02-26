// import logo from './logo.svg';
import '../../src/App.css';
import MainHeader from '../components/common/header';
import HeroBanner from '../components/home/mainbanner';
import LeftImgContent from '../components/home/clubnautica';
import ImageHovVideo from '../components/home/Imghovvideo';
import AboutUsSec from '../components/home/aboutussec';
import HomeVerticalSlider from '../components/home/homevertslider';
import StickySlides from '../components/home/stickyslides';
import StickyScrollSlide from '../components/home/stickyslides';
import OurTeam from '../components/home/ourteam';
import ContactUsHome from '../components/home/contactussec';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import Topbar from '../components/home/topbar';
import Newheader from '../components/home/newheader';
import WhatsAppButton from '../components/common/Whatsapp';
import MallorcaMap from '../components/home/map';



function home() {
  return (



    <>
    {/* <MainHeader /> */}
    <Topbar/>
    
    <HeroBanner />
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "56px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Club Náutico Porto Cristo
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Mallorca Weddings and Events ensures your celebration is unforgettable. Our exclusive venues provide elegant and unique settings for weddings, receptions, corporate events, and private celebrations. Whether by the beach, in the countryside, or at the marina, we have the perfect location for your dream event.
        </p>
      </div>
    </div>
    <LeftImgContent/>
    <ImageHovVideo/>
    <AboutUsSec/>
    <StickyScrollSlide/>
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-6">
        <h2 className="" style={{ fontSize: "56px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Our Team
        </h2>
    
      </div>
    </div>
    <OurTeam/>
 
    <ContactUsHome/>

    <ContactDetailsEnd/>
 
    <Footer/>
    <WhatsAppButton/>


  </>
 

  );
}

export default home;
