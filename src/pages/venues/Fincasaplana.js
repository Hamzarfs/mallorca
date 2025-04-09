// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/fincasaplanabanner.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";

import VenueGallery from '../../components/venues/Venuegallery';
import clubvid from "../../images/FincaSaPlanaNova.mp4";
import image1 from "../../images/weddingvenue2.webp"; 
import image2 from "../../images/fincaart.webp";
import image3 from "../../images/FincaEncanto.webp";
import image4 from "../../images/lavistamarinanewimg.webp";
import fincasagallery1 from "../../images/fincasaplanagallery/fincasaplana (1).webp";
import fincasagallery2 from "../../images/fincasaplanagallery/fincasaplana (2).webp";
import fincasagallery3 from "../../images/fincasaplanagallery/fincasaplana (3).webp";
import fincasagallery4 from "../../images/fincasaplanagallery/fincasaplana (4).webp";
import fincasagallery5 from "../../images/fincasaplanagallery/fincasaplana (5).webp";
import fincasagallery6 from "../../images/fincasaplanagallery/fincasaplana (6).webp";
import fincasagallery7 from "../../images/fincasaplanagallery/fincasaplana (7).webp";
import fincasagallery8 from "../../images/fincasaplanagallery/fincasaplana (8).webp";
import fincasagallery9 from "../../images/fincasaplanagallery/fincasaplana (9).webp";
import fincasagallery10 from "../../images/fincasaplanagallery/fincasaplana (10).webp";
import fincasagallery11 from "../../images/fincasaplanagallery/fincasaplana (11).webp";
import fincasagallery12 from "../../images/fincasaplanagallery/fincasaplana (12).webp";
import fincasagallery13 from "../../images/fincasaplanagallery/fincasaplana (13).webp";
import fincasagallery14 from "../../images/fincasaplanagallery/fincasaplana (14).webp";
import fincasagallery15 from "../../images/fincasaplanagallery/fincasaplana (15).webp";
import fincasagallery17 from "../../images/fincasaplanagallery/fincasaplana (17).webp";
import fincasagallery18 from "../../images/fincasaplanagallery/fincasaplana (18).webp";
import fincasagallery19 from "../../images/fincasaplanagallery/fincasaplana (19).webp";
import fincasagallery20 from "../../images/fincasaplanagallery/fincasaplana (20).webp";
import fincasagallery21 from "../../images/fincasaplanagallery/fincasaplana (21).webp";
import fincasagallery22 from "../../images/fincasaplanagallery/fincasaplana (22).webp";
import fincasagallery23 from "../../images/fincasaplanagallery/fincasaplana (23).webp";
import fincasagallery24 from "../../images/fincasaplanagallery/fincasaplana (24).webp";
import fincasagallery25 from "../../images/fincasaplanagallery/fincasaplana (25).webp";
import fincasagallery26 from "../../images/fincasaplanagallery/fincasaplana (26).webp";
import fincasagallery27 from "../../images/fincasaplanagallery/fincasaplana (27).webp";
import fincasagallery28 from "../../images/fincasaplanagallery/fincasaplana (28).webp";
import fincasagallery29 from "../../images/fincasaplanagallery/fincasaplana (29).webp";
import { useBrochureModal } from '../../components/hooks/useBrochureModal';

import '../../BrochureModal.css';
import BrochureModal from "../../components/BrochureModal";


const clubnauticaimages = [
  fincasagallery1,
  fincasagallery2,
  fincasagallery3,
  fincasagallery4,
  fincasagallery5,
  fincasagallery6,
  fincasagallery7,
  fincasagallery8,
  fincasagallery9,
  fincasagallery10,
  fincasagallery11,
  fincasagallery12,
  fincasagallery13,
  fincasagallery14,
  fincasagallery15,

  fincasagallery17,
  fincasagallery18,
  fincasagallery19,
  fincasagallery20,
  fincasagallery21,
  fincasagallery22,
  fincasagallery23,
  fincasagallery24,
  fincasagallery25,
  fincasagallery26,
  fincasagallery27,
  fincasagallery28,
  fincasagallery29,

];


const venues = [
  {
    name: "Club Nautico Porto Cristo ",
    image: image1, 
    link: "/club-nautico",
  },
  {
    name: "Finca Art",
    image: image2,
    link: "/finca-art",
  },
  {
    name: "Finca Encanto",
    image: image3,
    link: "/finca-encanto",
  },
  {
    name: "La Vista Marina",
    image: image4,
    link: "/la-vista-marina",
  },
];


function Fincasaplana() {


  const {
    showModal,
    formData,
    submitted,
    handleOpen,
    handleClose,
    setFormData,
    setSubmitted
  } = useBrochureModal();
  
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Finca Sa Plana Nova"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "23px" }}>
        Say ‘I Do’ at the Historic Sa Plana Nova
        
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Imagine exchanging vows in the heart of Mallorca’s serene countryside, surrounded by the timeless beauty of Sa Plana Nova—a meticulously preserved finca dating back to 1880. Steeped in history and surrounded by breathtaking natural landscapes, this intimate venue offers a truly magical backdrop for your special day.<br></br><br></br>
        Accommodating up to 18 guests in eight double rooms and one quadruple room, Sa Plana Nova perfectly blends traditional Mallorcan charm with modern comforts. Its expansive terrace, with panoramic views of the rolling countryside, is ideal for wedding celebrations, sunset toasts, and peaceful morning reflections. Lush surroundings of holly oaks, almond, carob, and wild olive trees provide a naturally stunning setting, enhancing the romance of every moment.
        <br></br><br></br>
        Whether you envision a rustic-chic ceremony, a romantic outdoor reception, or a more intimate gathering with loved ones, Sa Plana Nova offers endless possibilities to make your day uniquely yours. With personalized service and attention to every detail, we’ll help bring your dream wedding to life, creating memories to treasure for a lifetime.<br></br><br></br>
        Experience the timeless magic of Sa Plana Nova and let your love story unfold in this unforgettable setting.
        <br /><br />
        </p>

      </div>

      
   
    </div>
    <div className="container d-flex justify-content-center align-items-center gap-3 ">
    {/* <button
      className="weddingbrochure-btn px-4"
      onClick={() => window.open(brochurePDF, "_blank")}
    >
      <span>VIEW OUR WEDDING BROCHURE</span>
    </button> */}

<button
        className="weddingbrochure-btn px-4"
        onClick={handleOpen}
      >
        <span>VIEW OUR WEDDING BROCHURE</span>
      </button>
      <BrochureModal
        show={showModal}
        onHide={handleClose}
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />


 <a href='/contact-us' target="_blank"> <button className="weddingbrochure-btn">
    <span>CONTACT US</span>
  </button> </a>
</div>

<VenueGallery images={clubnauticaimages} />

<section className="venuegallery container">
      {/* Heading */}
   
      {/* Responsive Video Embed */}
         <div className="video-wrapper">
     <video  controls>
       <source src={clubvid} type="video/mp4" />
       Your browser does not support the video tag.
     </video>
   </div>
    </section>

    
    <section className="venuegallery container">
      {/* Heading */}
      <h2 className="venuegallery-heading">Other Venues</h2>

      {/* Venues Grid */}
      <div className="row">
        {venues.map((venue, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12">
            <a href={venue.link} className="venue-card">
              <img src={venue.image} alt={venue.name} className="img-fluid venue-img" />
              <h5 className="venue-name">{venue.name}</h5>
            </a>
          </div>
        ))}
      </div>
    </section>


   
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Fincasaplana;
