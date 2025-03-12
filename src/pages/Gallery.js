// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import contactusbg from '../../src/images/contactusbg.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import ContactUsHome from '../components/home/contactussec';
import VenueGallery from '../components/venues/Venuegallery';


import VenueGallery1 from "../images/fincaartgallery/fincaartgallery (1).webp";
import VenueGallery2 from "../images/fincaartgallery/fincaartgallery (2).webp";
import VenueGallery3 from "../images/fincaartgallery/fincaartgallery (3).webp";
import VenueGallery4 from "../images/fincaartgallery/fincaartgallery (4).webp";
import VenueGallery5 from "../images/fincaartgallery/fincaartgallery (5).webp";
import VenueGallery6 from "../images/fincaartgallery/fincaartgallery (6).webp";
import VenueGallery7 from "../images/fincaartgallery/fincaartgallery (7).webp";
import VenueGallery8 from "../images/fincaartgallery/fincaartgallery (8).webp";
import VenueGallery9 from "../images/fincaartgallery/fincaartgallery (9).webp";
import VenueGallery10 from "../images/fincaartgallery/fincaartgallery (10).webp";
import VenueGallery11 from "../images/fincaartgallery/fincaartgallery (11).webp";
import VenueGallery12 from "../images/fincaartgallery/fincaartgallery (12).webp";
import VenueGallery13 from "../images/fincaartgallery/fincaartgallery (13).webp";
import VenueGallery14 from "../images/fincaartgallery/fincaartgallery (14).webp";
import VenueGallery15 from "../images/fincaartgallery/fincaartgallery (15).webp";
import VenueGallery16 from "../images/fincaartgallery/fincaartgallery (16).webp";
import VenueGallery17 from "../images/fincaartgallery/fincaartgallery (17).webp";
import VenueGallery18 from "../images/fincaartgallery/fincaartgallery (18).webp";
import VenueGallery19 from "../images/fincaartgallery/fincaartgallery (19).webp";
import VenueGallery20 from "../images/fincaartgallery/fincaartgallery (20).webp";
import VenueGallery21 from "../images/fincaartgallery/fincaartgallery (21).webp";
import VenueGallery22 from "../images/fincaartgallery/fincaartgallery (22).webp";
import VenueGallery23 from "../images/fincaartgallery/fincaartgallery (23).webp";
import VenueGallery24 from "../images/fincaartgallery/fincaartgallery (24).webp";
import VenueGallery25 from "../images/fincaartgallery/fincaartgallery (25).webp";
import VenueGallery26 from "../images/fincaartgallery/fincaartgallery (26).webp";
import VenueGallery27 from "../images/fincaartgallery/fincaartgallery (27).webp";
import VenueGallery28 from "../images/fincaartgallery/fincaartgallery (28).webp";
import VenueGallery29 from "../images/fincaartgallery/fincaartgallery (29).webp";
import VenueGallery30 from "../images/fincaartgallery/fincaartgallery (30).webp";
import VenueGallery31 from "../images/fincaartgallery/fincaartgallery (31).webp";
import VenueGallery32 from "../images/fincaartgallery/fincaartgallery (32).webp";
import VenueGallery33 from "../images/fincaartgallery/fincaartgallery (33).webp";
import VenueGallery34 from "../images/fincaartgallery/fincaartgallery (34).webp";
import VenueGallery35 from "../images/fincaartgallery/fincaartgallery (35).webp";
import VenueGallery36 from "../images/fincaartgallery/fincaartgallery (36).webp";


// import HeroBanner from '../components/home/mainbanner';

const clubnauticaimages = [
  VenueGallery1,
  VenueGallery2,
  VenueGallery3,
  VenueGallery4,
  VenueGallery5,
  VenueGallery6,
  VenueGallery7,
  VenueGallery8,
  VenueGallery9,
  VenueGallery10,
  VenueGallery11,
  VenueGallery12,
  VenueGallery13,
  VenueGallery14,
  VenueGallery15,
  VenueGallery16,
  VenueGallery17,
  VenueGallery18,
  VenueGallery19,
  VenueGallery20,
  VenueGallery21,
  VenueGallery22,
  VenueGallery23,
  VenueGallery24,
  VenueGallery25,
  VenueGallery26,
  VenueGallery27,
  VenueGallery28,
  VenueGallery29,
  VenueGallery30,
  VenueGallery31,
  VenueGallery32,
  VenueGallery33,
  VenueGallery34,
  VenueGallery35,
  VenueGallery36
  // Add more images if needed...
];

// import HeroBanner from '../components/home/mainbanner';





function Gallery() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Gallery"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={contactusbg}
                />
    </div>


    <VenueGallery images={clubnauticaimages} />
 
   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Gallery;
