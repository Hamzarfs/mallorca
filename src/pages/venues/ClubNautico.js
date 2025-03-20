import BreadcrumbSection from '../../components/aboutus/BreadCrumb';
import '../../App.css';
import MainHeader from '../../components/common/header';
import bannerimg from '../../images/clubnauticobannernew.webp';
import Topbar from '../../components/home/topbar';
import ContactDetailsEnd from '../../components/home/ContactDetailsEnd';
import Footer from '../../components/home/footer';
import brochurePDF from "../../images/Wedding-Brochure.pdf";
import image1 from "../../images/fincaart.webp"; 
import image2 from "../../images/fincasa.webp";
import image3 from "../../images/FincaEncanto.webp";
import image4 from "../../images/lavistamarinanewimg.webp";
import clubvid from "../../images/ClubNauticoPortoCristo.mp4";

import VenueGallery from '../../components/venues/Venuegallery';

// Dynamically import all 144 images
const clubnauticaimages = [];
for (let i = 1; i <= 144; i++) {
  const image = require(`../../images/clubnauticogallery/clubnautico (${i}).webp`);
  clubnauticaimages.push(image.default || image);
}

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
      <Topbar />
      <div>
        <BreadcrumbSection
          heading="Club Nautico Porto Cristo"
          backgroundImage={bannerimg}
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center text-center mt-5">
        <div className="col-md-8 col-lg-8">
          <h2 className="" style={{ fontSize: "40px", fontWeight: "700", color: "#A19C7E", marginBottom: "10px" }}>
            Celebrate Your Love at the Iconic Club Náutico Porto Cristo
            <br /><br />
          </h2>
          <p style={{ fontSize: 16, color: "#333", lineHeight: 1.6 }}>
            Close to some of <strong>Mallorca’s finest holiday resorts</strong>, nestled in the heart of <strong>Porto Cristo</strong>, 
            <strong>a charming fishing village on Mallorca’s serene east coast</strong>, Club Náutico offers <strong>an idyllic setting for your wedding day</strong>. 
            Perched on the edge of the <strong>glistening Mediterranean</strong>, this is where <strong>unforgettable moments come to life</strong>, 
            creating <strong>wedding memories you'll treasure forever.</strong>
            <br />
            <br />
            Upon arrival, you’ll be captivated by a <strong>sprawling outdoor terrace</strong> that wraps around the venue, framed by 
            <strong>elegant white sail canopies</strong> and <strong>expansive glass doors</strong>. With the <strong>warm sun on your skin</strong> 
            and a <strong>gentle marina breeze</strong>, enjoy cocktails while gazing at <strong>uninterrupted sea views.</strong>
            <br />
            <br />
            For your ceremony, choose between two <strong>spectacular backdrops</strong>: 
            <strong>an elegant terrace overlooking the sea</strong> or 
            <strong>a secluded spot on the rocks beside the Mediterranean ocean</strong>—<strong>perfectly picturesque and intimate</strong>. 
            Dining options include <strong>al fresco dining under the stars</strong> or the comfort of our 
            <strong>air-conditioned event room</strong>, which features a <strong>stylish bar.</strong>
            <br />
            <br />
            From the <strong>beauty of the natural surroundings</strong> to the <strong>impeccable amenities and atmosphere</strong>, 
            <strong>Club Náutico Porto Cristo is a breathtaking venue where your dream wedding can truly come to life.</strong>
          </p>
          <br /><br />
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center gap-3">
        <button
          className="weddingbrochure-btn px-4"
          onClick={() => window.open(brochurePDF, "_blank")}
        >
          <span>VIEW OUR WEDDING BROCHURE</span>
        </button>
        <a href='/contact-us' target="_blank">
          <button className="weddingbrochure-btn">
            <span>CONTACT US</span>
          </button>
        </a>
      </div>

      <VenueGallery images={clubnauticaimages} />

      <section className="venuegallery container">
        <div className="video-wrapper">
          <video controls>
            <source src={clubvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="venuegallery container">
        <h2 className="venuegallery-heading">Other Venues</h2>
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

      <ContactDetailsEnd />
      <Footer />
    </>
  );
}

export default Clubnautica;