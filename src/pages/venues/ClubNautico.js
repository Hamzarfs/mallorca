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
    link: "/finca-sa-plana-nova",
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
        Transforming Dreams Into Unforgettable Mallorca Weddings
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Our majestic Club Nautico is in Porto Cristo, a working fishing village on the east coast of Mallorca. Porto Cristo a very relaxed and beautiful area with the marina being the hub and a variety of hotels and accommodation options to choose from.  You can spend your days on the beaches or explore one of the many coves and when the sun goes down there are the many cafes, bars and restaurants dotted around the waterfront to explore, serving delicious local cuisine.<br></br><br></br>
        The venue itself is built on the edge of the Mediterranean – originally built as a member’s only club for Yacht owners but now offering their venue for weddings and events.

As you enter the venue you are greeted with a huge outside terrace area, spanning two sides of the building with glass doors surrounding the building and white sail canopies above.  You will feel the warmth of the sun and feel the marina breeze but be protected from the heat whilst you sip a cocktail and gaze out at sea.
        <br></br><br></br>

        The venue offers two different areas for your ceremony, either on one of the terraces or there is a grassed area closer to the sea, either are ideal for photos and privacy is ensured.

If you are a smaller wedding and prefer to eat al fresco, then this can be arranged.  Alternatively, you can dine in our air-conditioned event room.  The inside area also has a fully equipped bar and an outside bar can also be set up on the terrace for drinks and canapes after your ceremony.

For any couples who would prefer a Catholic wedding or an Anglican blessing a local church, there is a beautiful church called Església Mare de Déu del Carme Porto Cristo which is very close to the Club.

If you would like some recommendations for local accommodation in Porto Cristo and surrounding areas, just ask your wedding planner.
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

  <button className="weddingbrochure-btn">
    <span>CONTACT US</span>
  </button>
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
