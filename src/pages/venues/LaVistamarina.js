// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/lavistamarinabanner.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";
import VenueGallery from '../../components/venues/Venuegallery';
import VenueGallery1 from "../../images/fincaartgallery/FA1.webp";
import VenueGallery2 from "../../images/fincaartgallery/FA2.webp";
import VenueGallery3 from "../../images/fincaartgallery/FA3.webp";
import VenueGallery4 from "../../images/fincaartgallery/FA4.webp";
import VenueGallery5 from "../../images/fincaartgallery/FA5.webp";
import VenueGallery6 from "../../images/fincaartgallery/1.webp";
import VenueGallery7 from "../../images/fincaartgallery/2.webp";
import VenueGallery8 from "../../images/fincaartgallery/3.webp";
import VenueGallery9 from "../../images/fincaartgallery/4.webp";
import VenueGallery10 from "../../images/fincaartgallery/5.webp";
import VenueGallery11 from "../../images/fincaartgallery/6.webp";
// import VenueGallery12 from "../../images/fincaartgallery/7.webp";
import image1 from "../../images/venue5.webp"; 
import image2 from "../../images/venue2.webp";
import image3 from "../../images/venue3.webp";
import image4 from "../../images/venue4.webp";

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
  // VenueGallery12

  // Add more images...
];


const venues = [
  {
    name: "Club Nautico",
    image: image1, 
    link: "/club-nautico",
  },
  {
    name: "Finca Sa Plana Nova",
    image: image2,
    link: "/fincasa-plana",
  },
  {
    name: "Finca Art",
    image: image3,
    link: "/finca-art",
  },
  {
    name: "Finca Encanto",
    image: image4,
    link: "/finca-encanto",
  },
];


function LaVistamarina() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="La Vista Marina"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Celebrate in Style at La Vista Marina
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Perched in the heart of Cala d’Or’s vibrant marina on Mallorca’s southeast coast, La Vista Marina is a sleek and modern rooftop venue offering a wedding experience as breathtaking as its panoramic views. Perfect for couples seeking a chic seaside celebration, this contemporary space blends sophisticated design with the natural beauty of the Mediterranean.<br></br><br></br>
        The open-air rooftop, surrounded by the sparkling marina, sets the stage for a stylish celebration under the endless Mallorcan sky—where every moment feels light, elegant, and unforgettable.
        <br></br><br></br>
        At La Vista Marina, your dream of a modern, waterfront wedding becomes a dazzling reality.<br></br><br></br>
   
        </p>

      </div>

      
   
    </div>
    <div className="container d-flex justify-content-center align-items-center gap-3 ">
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

<VenueGallery images={clubnauticaimages} />

<section className="venuegallery container">
      {/* Heading */}
      <h2 className="venuegallery-heading">
        This magical wedding was planned by us at this location
      </h2>

      {/* Responsive Video Embed */}
      <div className="video-wrapper">
        <iframe
          width="1060"
          height="515"
          src="https://www.youtube.com/embed/-yxvYG3KWYo?si=wVm2S053ltaTe6MY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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

export default LaVistamarina;
 