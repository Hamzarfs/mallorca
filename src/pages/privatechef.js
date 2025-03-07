// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import cateringbg from '../../src/images/privatechefbanner.webp';
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
                    heading="Private Chef"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={cateringbg}
                />
    </div>

   
    <div className="container d-flex justify-content-center align-items-center text-center mt-4">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Private Chef Service – A Luxurious & Personalized Culinary Experience
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        At Mallorca Weddings and Events, our private chef service was created to meet the
 needs of those who want to offer their guests something truly special—an
 elegant gourmet dining experience in the comfort and convenience of their own home,
 holiday villa, or yacht. <br></br>
<strong>An Exclusive Fine Dining Experience</strong> <br></br>
 Why settle for ordinary when you can have a private chef experience tailored just for
 you? With Mallorca Weddings and Events, we bring restaurant-quality cuisine to
 your chosen setting, ensuring an exclusive and unforgettable dining experience.
        <br></br><br></br>

        Would you like to surprise your guests with a special dinner? Are you on holiday and
 prefer not to cook every day? Or are you looking to create a tailored dining experience for a birthday, hen do, or intimate gathering? Our private chef service is dedicated
 to smaller, more exclusive events, ensuring a refined, restaurant-quality experience.
        </p>

      </div>
   
    </div>
    <CateringSecTwo/>
 
   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Catering;
