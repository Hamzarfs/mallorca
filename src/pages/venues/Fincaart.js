// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/fincaartnewbanner.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";
import VenueGallery from '../../components/venues/Venuegallery';

import clubvid from "../../images/FincaArt.mp4";
import image1 from "../../images/weddingvenue2.webp"; 
import image2 from "../../images/fincasa.webp";
import image3 from "../../images/FincaEncanto.webp";
import image4 from "../../images/lavistamarinanewimg.webp";


import VenueGallery1 from "../../images/fincaartgallery/fincaartgallery (1).webp";
import VenueGallery2 from "../../images/fincaartgallery/fincaartgallery (2).webp";
import VenueGallery3 from "../../images/fincaartgallery/fincaartgallery (3).webp";
import VenueGallery4 from "../../images/fincaartgallery/fincaartgallery (4).webp";
import VenueGallery5 from "../../images/fincaartgallery/fincaartgallery (5).webp";
import VenueGallery6 from "../../images/fincaartgallery/fincaartgallery (6).webp";
import VenueGallery7 from "../../images/fincaartgallery/fincaartgallery (7).webp";
import VenueGallery8 from "../../images/fincaartgallery/fincaartgallery (8).webp";
import VenueGallery9 from "../../images/fincaartgallery/fincaartgallery (9).webp";
import VenueGallery10 from "../../images/fincaartgallery/fincaartgallery (10).webp";
import VenueGallery11 from "../../images/fincaartgallery/fincaartgallery (11).webp";
import VenueGallery12 from "../../images/fincaartgallery/fincaartgallery (12).webp";
import VenueGallery13 from "../../images/fincaartgallery/fincaartgallery (13).webp";
import VenueGallery14 from "../../images/fincaartgallery/fincaartgallery (14).webp";
import VenueGallery15 from "../../images/fincaartgallery/fincaartgallery (15).webp";
import VenueGallery16 from "../../images/fincaartgallery/fincaartgallery (16).webp";
import VenueGallery17 from "../../images/fincaartgallery/fincaartgallery (17).webp";
import VenueGallery18 from "../../images/fincaartgallery/fincaartgallery (18).webp";
import VenueGallery19 from "../../images/fincaartgallery/fincaartgallery (19).webp";
import VenueGallery20 from "../../images/fincaartgallery/fincaartgallery (20).webp";
import VenueGallery21 from "../../images/fincaartgallery/fincaartgallery (21).webp";
import VenueGallery22 from "../../images/fincaartgallery/fincaartgallery (22).webp";
import VenueGallery23 from "../../images/fincaartgallery/fincaartgallery (23).webp";
import VenueGallery24 from "../../images/fincaartgallery/fincaartgallery (24).webp";
import VenueGallery25 from "../../images/fincaartgallery/fincaartgallery (25).webp";
import VenueGallery26 from "../../images/fincaartgallery/fincaartgallery (26).webp";
import VenueGallery27 from "../../images/fincaartgallery/fincaartgallery (27).webp";
import VenueGallery28 from "../../images/fincaartgallery/fincaartgallery (28).webp";
import VenueGallery29 from "../../images/fincaartgallery/fincaartgallery (29).webp";

import { useBrochureModal } from '../../components/hooks/useBrochureModal';

import '../../BrochureModal.css';
import BrochureModal from "../../components/BrochureModal";


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

];

const venues = [
  {
    name: "Club Nautico Porto Cristo ",
    image: image1, 
    link: "/club-nautico",
  },
  {
    name: "Finca Sa Plana Nova",
    image: image2,
    link: "/fincasa-plana",
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


function Clubnautica() {

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
                    heading="Finca Art"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Say ‘I Do’ at the Enchanting Finca Art
        <br></br><br></br>
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Nestled just outside the picturesque village of Ses Salines on Mallorca’s stunning south coast, Finca Art is a breathtaking Spanish country estate, perfect for couples dreaming of a one-of-a-kind wedding. With sweeping views of the countryside and mountains, this venue effortlessly blends Mallorcan charm with modern elegance, creating a setting that is as unforgettable as your love story.<br></br><br></br>
        The crown jewel of Finca Art is its expansive outdoor space—a dream for those envisioning a magical "Mamma Mia"-style celebration. Picture your reception by the sparkling turquoise pool, fairy lights reflecting off the water as the warm Mallorcan breeze surrounds you. Eat, drink, and dance under the stars, creating memories that will last a lifetime.
        <br></br><br></br>
        Whether you choose to hire Finca Art exclusively for your big day or for a longer stay, the villa offers ultimate comfort and luxury. With seven stylish bedrooms, a fully equipped modern kitchen, and both indoor and outdoor living spaces, it’s the perfect retreat for you and your loved ones.<br></br><br></br>
        Finca Art isn’t just a wedding venue—it’s a place where dreams come true and moments turn into cherished memories.
        <br></br><br></br>
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
      {/* <h2 className="venuegallery-heading">
        This magical wedding was planned by us at this location
      </h2> */}

      {/* Responsive Video Embed */}
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

export default Clubnautica;
