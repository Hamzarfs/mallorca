// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb';
import '../../src/App.css';
import MainHeader from '../components/common/header';
import bannerimg from '../../src/images/weddingvenubannerimg.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import WeddingBnrTwo from '../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../components/weddingvenues/venues';

import brochurePDF from "../images/Wedding-Brochure.pdf";

// import HeroBanner from '../components/home/mainbanner';


function weddingvenue() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Wedding Venues"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Transforming Dreams Into Unforgettable Mallorca Weddings
        <br></br><br></br>
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        With a portfolio of stunning venues, we offer something to suit every taste, style, and budget. Whether it’s our ultra-chic Yacht Club perched on the edge of the Mediterranean, a trendy rooftop venue with panoramic views of the Cala d’Or marina, or a romantic Spanish finca where you can dine under the stars, each setting is as breathtaking as your love story. <br></br><br></br>
        At Mallorca Weddings & Events, we believe your wedding day should be uniquely yours. That’s why our services go beyond our exclusive venues. Whether you dream of saying “I do” at a luxurious private villa, a charming countryside finca, or a serene beachside location, our expert wedding planning and catering services are designed to bring your vision to life—anywhere on the island.
        <br></br><br></br>

        At Mallorca Weddings & Events, we believe your wedding day should be uniquely yours. That’s why our services go beyond our exclusive venues. Whether you dream of saying “I do” at a luxurious private villa, a charming countryside finca, or a serene beachside location, our expert wedding planning and catering services are designed to bring your vision to life—anywhere on the island.
        <br></br><br></br>
        </p>

      </div>
   
    </div>
    <div className="container d-flex justify-content-center align-items-center gap-3 mb-5">
   <button
           className="weddingbrochure-btn px-4"
           onClick={() => window.open(brochurePDF, "_blank")}
         >
           <span>VIEW OUR WEDDING BROCHURE</span>
         </button>
         <a href='/contact-us' target="_blank"> <button className="weddingbrochure-btn">
         <span>CONTACT US</span>
       </button> </a>
</div>
<WeddingBnrTwo/>
<WedVenues/>



   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default weddingvenue;
