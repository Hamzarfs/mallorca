import logo from './logo.svg';
import './App.css';
import MainHeader from './components/common/header';
import HeroBanner from './components/home/mainbanner';
import LeftImgContent from './components/home/clubnautica';
import ImageHovVideo from './components/home/Imghovvideo';
import AboutUsSec from './components/home/aboutussec';
import HomeVerticalSlider from './components/home/homevertslider';
import StickySlides from './components/home/stickyslides';
import StickyScrollSlide from './components/home/stickyslides';
import OurTeam from './components/home/ourteam';



function App() {
  return (



    <>
    <MainHeader />
    <HeroBanner />
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-6">
        <h2 className="" style={{ fontSize: "36px", fontWeight: "bold", color: "#A19C7E", marginBottom: "10px" }}>
          Your Wedding Venues
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
          If you are looking for a unique place to celebrate one of the most special days of your life, 
          this estate will captivate you. An exceptional setting with exquisite decoration will be the 
          perfect place for an intimate and beautiful celebration.
        </p>
      </div>
    </div>
    <LeftImgContent/>
    <ImageHovVideo/>
    <AboutUsSec/>
    <StickyScrollSlide/>
    <div className="container d-flex justify-content-center align-items-center text-center py-5">
      <div className="col-md-8 col-lg-6">
        <h2 className="" style={{ fontSize: "36px", fontWeight: "bold", color: "#A19C7E", marginBottom: "10px" }}>
        Our Team
        </h2>
    
      </div>
    </div>
    <OurTeam/>
    <OurTeam reverse={true} />



  </>
 

  );
}

export default App;
