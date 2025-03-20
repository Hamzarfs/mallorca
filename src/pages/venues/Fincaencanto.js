// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/fincaencantobannernew.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";
import image1 from "../../images/weddingvenue2.webp"; 
import image2 from "../../images/fincasa.webp";
import image3 from "../../images/fincaart.webp";
import image4 from "../../images/lavistamarinanewimg.webp";
import VenueGallery from '../../components/venues/Venuegallery';

import clubvid from "../../images/FincaEncanto.mp4";

import Galleryencanto1 from "../../images/fincaencanto/Fincaencantogallery (1).webp";
import Galleryencanto2 from "../../images/fincaencanto/Fincaencantogallery (2).webp";
import Galleryencanto4 from "../../images/fincaencanto/Fincaencantogallery (4).webp";
import Galleryencanto5 from "../../images/fincaencanto/Fincaencantogallery (5).webp";
import Galleryencanto6 from "../../images/fincaencanto/Fincaencantogallery (6).webp";
import Galleryencanto7 from "../../images/fincaencanto/Fincaencantogallery (7).webp";
import Galleryencanto8 from "../../images/fincaencanto/Fincaencantogallery (8).webp";
import Galleryencanto9 from "../../images/fincaencanto/Fincaencantogallery (9).webp";
import Galleryencanto10 from "../../images/fincaencanto/Fincaencantogallery (10).webp";
import Galleryencanto11 from "../../images/fincaencanto/Fincaencantogallery (11).webp";
import Galleryencanto12 from "../../images/fincaencanto/Fincaencantogallery (12).webp";
import Galleryencanto13 from "../../images/fincaencanto/Fincaencantogallery (13).webp";
import Galleryencanto14 from "../../images/fincaencanto/Fincaencantogallery (14).webp";
import Galleryencanto15 from "../../images/fincaencanto/Fincaencantogallery (15).webp";
import Galleryencanto16 from "../../images/fincaencanto/Fincaencantogallery (16).webp";

const clubnauticaimages = [
  Galleryencanto1,
  Galleryencanto2,
  Galleryencanto5,
  Galleryencanto7,
  Galleryencanto9,
  Galleryencanto10,
  Galleryencanto11,
  Galleryencanto12,
  Galleryencanto13,
  Galleryencanto14,
  Galleryencanto15,
  Galleryencanto16,
  Galleryencanto4,
  Galleryencanto6,
  Galleryencanto8,
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
    name: "La Vista Marina",
    image: image4,
    link: "/la-vista-marina",
  },
];


function Fincaencanto() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Finca Encanto"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Celebrate Your Love at the Enchanting Finca Encanto <br></br><br></br>
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Nestled in Mallorca’s picturesque southeast, Finca Encanto is a meticulously restored 14th-century estate that provides a truly breathtaking setting for your dream wedding. From the moment you arrive, you’ll be swept away by its seamless blend of historic charm, sophisticated luxury, and the serene beauty of rolling olive groves and fragrant orange trees.<br></br><br></br>
        Whether you’re planning an intimate ceremony or a grand celebration, Finca Encanto offers a range of magical spaces to suit your vision. Picture saying “I do” in the estate’s enchanting courtyards or lush gardens, perfect for romantic outdoor ceremonies and starlit receptions. Inside, its elegant spaces fuse rustic Mallorcan architecture with contemporary sophistication—ideal for vibrant celebrations.
        <br></br><br></br>
        With 22 exquisitely designed suites and double rooms, Finca Encanto provides a serene retreat for you and your guests, ensuring everyone feels indulged and at ease. Tailored luxury is at the heart of the experience, with personalized service and bespoke wedding packages designed to make your day effortlessly perfect.<br></br><br></br>
        Let Finca Encanto’s timeless charm, elegant surroundings, and impeccable attention to detail bring your wedding dreams to life.<br></br><br></br>
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
      {/* <h2 className="venuegallery-heading">
        This magical wedding was planned by us at this location
      </h2> */}

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

export default Fincaencanto;
