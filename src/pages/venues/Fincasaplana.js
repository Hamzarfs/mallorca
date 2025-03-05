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
import image2 from "../../images/venue1.webp";
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
        <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
        Say ‘I Do’ at the Historic Sa Plana Nova
        </h2>
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
        Imagine exchanging vows in the heart of Mallorca’s serene countryside, surrounded by the timeless beauty of Sa Plana Nova—a meticulously preserved finca dating back to 1880. Steeped in history and surrounded by breathtaking natural landscapes, this intimate venue offers a truly magical backdrop for your special day.<br></br><br></br>
        Accommodating up to 18 guests in eight double rooms and one quadruple room, Sa Plana Nova perfectly blends traditional Mallorcan charm with modern comforts. Its expansive terrace, with panoramic views of the rolling countryside, is ideal for wedding celebrations, sunset toasts, and peaceful morning reflections. Lush surroundings of holly oaks, almond, carob, and wild olive trees provide a naturally stunning setting, enhancing the romance of every moment.
        <br></br><br></br>
        Whether you envision a rustic-chic ceremony, a romantic outdoor reception, or a more intimate gathering with loved ones, Sa Plana Nova offers endless possibilities to make your day uniquely yours. With personalized service and attention to every detail, we’ll help bring your dream wedding to life, creating memories to treasure for a lifetime.<br></br><br></br>
        Experience the timeless magic of Sa Plana Nova and let your love story unfold in this unforgettable setting.
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

export default Fincasaplana;
