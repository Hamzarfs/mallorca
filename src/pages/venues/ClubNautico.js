// import logo from './logo.svg';
import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/clubnauticobanner.webp';
import Topbar from '../../components/home/topbar';
import AboutUsTwo from '../../components/aboutus/aboutsectwo';
import AboutUsThree from '../../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import WeddingBnrTwo from '../../components/weddingvenues/weddingbnrtwo';
import WedVenues from '../../components/weddingvenues/venues';
import brochurePDF from "../../images/Wedding-Brochure.pdf";
import VenueGallery from '../../components/venues/Venuegallery';
import VenueGallery1 from "../../images/clubnauticagallery1.webp";
import VenueGallery2 from "../../images/clubnauticagallery2.webp";
import VenueGallery3 from "../../images/clubnauticagallery3.webp";
import VenueGallery4 from "../../images/clubnauticagallery4.webp";
import VenueGallery5 from "../../images/clubnauticagallery5.webp";
import VenueGallery6 from "../../images/clubnauticagallery6.webp";
import VenueGallery7 from "../../images/clubnauticagallery7.webp";
import VenueGallery8 from "../../images/clubnauticagallery8.webp";
import VenueGallery9 from "../../images/clubnauticagallery9.webp";
import VenueGallery10 from "../../images/clubnauticagallery10.webp";
import VenueGallery11 from "../../images/clubnauticagallery11.webp";
import VenueGallery12 from "../../images/clubnauticagallery12.webp";
import image1 from "../../images/venue1.webp"; 
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
  VenueGallery12

  // Add more images...
];


const venues = [
  {
    name: "Finca Art",
    image: image1, 
    link: "/finca-art",
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
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Club Nautica Porto Cristo"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={bannerimg}
                />
    </div>
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">
      <div className="col-md-8 col-lg-8">
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Celebrate Your Love at the Iconic Club Náutico in Porto Cristo
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Nestled in the heart of Porto Cristo, a charming fishing village on Mallorca’s serene east coast, Club Náutico offers an idyllic setting for your wedding day.  Perched on the edge of the glistening Mediterranean, Club Náutico Porto Cristo is where unforgettable moments come to life, creating wedding memories you'll treasure forever. <br></br><br></br>
        Upon arrival, you’ll be captivated by a sprawling outdoor terrace that wraps around the venue, framed by elegant white sail canopies and expansive glass doors. With the warm sun on your skin and a gentle marina breeze, enjoy cocktails while gazing at uninterrupted sea views.
        <br></br><br></br>

        For your ceremony, choose between two spectacular backdrops: an elegant terrace overlooking the water or a secluded spot on the rocks beside the ocean—perfectly picturesque and intimate. Dining options include al fresco dining under the stars or the comfort of our air-conditioned event room, which features a stylish bar. <br>
        </br><br></br>
        From the beauty of the natural surroundings to the impeccable amenities and atmosphere, Club Náutico Porto Cristo is a breathtaking venue where your dream wedding can truly come to life.
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

export default Clubnautica;
