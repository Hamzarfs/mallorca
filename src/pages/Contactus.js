// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import contactusbg from '../../src/images/contactusnewbanner2.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import ContactUsHome from '../components/home/contactussec';

// import HeroBanner from '../components/home/mainbanner';





function Ourteam() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Contact Us"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={contactusbg}
                />
    </div>
 
   <ContactUsHome/>
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Ourteam;
