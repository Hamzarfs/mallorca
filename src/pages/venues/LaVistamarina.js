// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/lavistamarinanewbanner.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";


import clubvid from "../../images/FincaArt.mp4";
import image1 from "../../images/venue5.webp"; 
import image2 from "../../images/venue2.webp";
import image3 from "../../images/venue3.webp";
import image4 from "../../images/venue4.webp";
import VenueGallery from '../../components/venues/Venuegallery';
import LavistaGallery1 from "../../images/lavistamarina/lavistamarina (1).webp";
import LavistaGallery2 from "../../images/lavistamarina/lavistamarina (2).webp";
import LavistaGallery3 from "../../images/lavistamarina/lavistamarina (3).webp";
import LavistaGallery4 from "../../images/lavistamarina/lavistamarina (4).webp";
import LavistaGallery5 from "../../images/lavistamarina/lavistamarina (5).webp";
import LavistaGallery6 from "../../images/lavistamarina/lavistamarina (6).webp";
import LavistaGallery7 from "../../images/lavistamarina/lavistamarina (7).webp";
import LavistaGallery8 from "../../images/lavistamarina/lavistamarina (8).webp";
import LavistaGallery9 from "../../images/lavistamarina/lavistamarina (9).webp";
import LavistaGallery10 from "../../images/lavistamarina/lavistamarina (10).webp";
import LavistaGallery11 from "../../images/lavistamarina/lavistamarina (11).webp";
import LavistaGallery12 from "../../images/lavistamarina/lavistamarina (12).webp";
import LavistaGallery13 from "../../images/lavistamarina/lavistamarina (13).webp";
import LavistaGallery14 from "../../images/lavistamarina/lavistamarina (14).webp";
import LavistaGallery15 from "../../images/lavistamarina/lavistamarina (15).webp";
import LavistaGallery16 from "../../images/lavistamarina/lavistamarina (16).webp";
import LavistaGallery17 from "../../images/lavistamarina/lavistamarina (17).webp";
import LavistaGallery18 from "../../images/lavistamarina/lavistamarina (18).webp";
import LavistaGallery19 from "../../images/lavistamarina/lavistamarina (19).webp";
import LavistaGallery20 from "../../images/lavistamarina/lavistamarina (20).webp";
import LavistaGallery21 from "../../images/lavistamarina/lavistamarina (21).webp";
import LavistaGallery22 from "../../images/lavistamarina/lavistamarina (22).webp";
import LavistaGallery23 from "../../images/lavistamarina/lavistamarina (23).webp";
import LavistaGallery24 from "../../images/lavistamarina/lavistamarina (24).webp";
import LavistaGallery25 from "../../images/lavistamarina/lavistamarina (25).webp";
import LavistaGallery26 from "../../images/lavistamarina/lavistamarina (26).webp";
import LavistaGallery27 from "../../images/lavistamarina/lavistamarina (27).webp";
import LavistaGallery28 from "../../images/lavistamarina/lavistamarina (28).webp";
import LavistaGallery29 from "../../images/lavistamarina/lavistamarina (29).webp";
import LavistaGallery30 from "../../images/lavistamarina/lavistamarina (30).webp";
import LavistaGallery31 from "../../images/lavistamarina/lavistamarina (31).webp";
import LavistaGallery32 from "../../images/lavistamarina/lavistamarina (32).webp";
import LavistaGallery33 from "../../images/lavistamarina/lavistamarina (33).webp";
import LavistaGallery34 from "../../images/lavistamarina/lavistamarina (34).webp";
import LavistaGallery35 from "../../images/lavistamarina/lavistamarina (35).webp";
import LavistaGallery36 from "../../images/lavistamarina/lavistamarina (36).webp";
import LavistaGallery37 from "../../images/lavistamarina/lavistamarina (37).webp";
import LavistaGallery38 from "../../images/lavistamarina/lavistamarina (38).webp";
import LavistaGallery39 from "../../images/lavistamarina/lavistamarina (39).webp";
import LavistaGallery40 from "../../images/lavistamarina/lavistamarina (40).webp";

const clubnauticaimages = [
  LavistaGallery1, LavistaGallery2, LavistaGallery3, LavistaGallery4, LavistaGallery5,
  LavistaGallery6, LavistaGallery7, LavistaGallery8, LavistaGallery9, LavistaGallery10,
  LavistaGallery11, LavistaGallery12, LavistaGallery13, LavistaGallery14, LavistaGallery15,
  LavistaGallery16, LavistaGallery17, LavistaGallery18, LavistaGallery19, LavistaGallery20,
  LavistaGallery21, LavistaGallery22, LavistaGallery23, LavistaGallery24, LavistaGallery25,
  LavistaGallery26, LavistaGallery27, LavistaGallery28, LavistaGallery29, LavistaGallery30,
  LavistaGallery31, LavistaGallery32, LavistaGallery33, LavistaGallery34, LavistaGallery35,
  LavistaGallery36, LavistaGallery37, LavistaGallery38, LavistaGallery39, LavistaGallery40,
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
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "20px" }}>
        Celebrate in Style at La Vista Marina
        <br></br>
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
{/* <section className="venuegallery container">
      <h2 className="venuegallery-heading">
        This magical wedding was planned by us at this location
      </h2>

      <div className="video-wrapper">
  <video  controls>
    <source src={clubvid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    </section> */}

    
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
 