// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import cateringbg from '../../src/images/cateringbgnewbanner.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import ContactUsHome from '../components/home/contactussec';
import CateringSecOne from '../components/catering/Cateringsecone';
import CateringSecTwo from '../components/catering/CateringSecTwo';

// import HeroBanner from '../components/home/mainbanner';





function Catering() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Wedding Catering"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={cateringbg}
                />
    </div>

    <CateringSecOne/>
   
 
   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Catering;
