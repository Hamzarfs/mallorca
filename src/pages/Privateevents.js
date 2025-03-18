// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/privateeventbanner.webp';
import bannertwo from '../../src/images/privateeventimgsec.webp';
import Topbar from '../components/home/topbar';
import AboutUsTwo from '../components/aboutus/aboutsectwo';
import AboutUsThree from '../components/aboutus/aboutussecthree';
import ContactDetailsEnd from '../components/home/ContactDetailsEnd';
import Footer from '../components/home/footer';
import OurTeamCards from '../components/OurTeam/OurTeam';
import imageSrc from "../images/Corporatesec1.webp";
import imageSrc2 from "../images/Corporate&TeamBuildingEvents.jpeg"; 

// import HeroBanner from '../components/home/mainbanner';





function Privateevents() {
  return (
    <>
    <Topbar/>
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="Private Events"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={aboutus}
                />
    </div>
    <section className="weddingbnrtwo py-5">
      <div className="container d-flex flex-column align-items-center text-center">
        <div className="col-8 sm-12 md-10 lg-col-12">
        
          <h2 className="strokhead mb-4">Private Events & Celebrations
            <br></br>
          </h2>
        <p className="venue-description">
  Celebrate life’s special moments in style at <strong>Club Náutico Porto Cristo</strong>, where breathtaking sea views, elegant surroundings, and exceptional cuisine come together to create unforgettable experiences. Whether you're planning a <strong>milestone birthday, anniversary, engagement party, family reunion, or any special occasion</strong>, our venue offers the perfect setting for a truly magical event.
</p>

<p className="venue-description">
  For couples tying the knot, our venue is also ideal for an unforgettable <strong>pre-wedding gathering</strong> or a <strong>post-wedding celebration</strong>, where guests can unwind and enjoy the Mediterranean charm before or after the big day.
</p>

<p className="venue-description">
  Our <strong>spacious terrace overlooking the sea</strong> provides a stunning backdrop for your celebration, setting the scene for an intimate gathering or a grand affair. Choose from a range of exquisite dining experiences, from a <strong>gourmet gala dinner</strong> to a <strong>laid-back BBQ with live music</strong> or a <strong>tapas night featuring multiple food stations</strong>—all carefully curated to suit your tastes and preferences.
</p>

<p className="venue-description">
  Looking for something more interactive? Add a special touch to your event with a <strong>private cooking experience</strong>, a <strong>wine and food pairing session</strong>, or even a <strong>cocktail-making workshop</strong> for a fun and engaging element that your guests will love.
</p>

<p className="venue-description">
  At <strong>Club Náutico Porto Cristo</strong>, every detail is tailor-made to bring your vision to life. From elegant décor and entertainment to customized menus featuring the finest Mediterranean flavors, we ensure your event is as unique and memorable as the occasion itself.
</p>

<p className="venue-description">
  ✅ <strong>Let’s make your celebration truly special! Contact us today and let us help you create an unforgettable private event at Club Náutico Porto Cristo.</strong>
</p>
<div className='py-5'>
<a href="/contact-us" target="_blank"> <button className="cateringsectwo-btn">CONTACT US</button></a>
</div>
        {/* Main Heading */}
        {/* <h2 className="wedvenues-heading" >
        Wedding Venues
        </h2> */}
        </div>

        {/* Image */}
        <img
          src={bannertwo} // Replace with actual image path
          alt="Wedding Venue"
          className="img-fluid rounded"
        />

        {/* Heading Below Image */}
        {/* <h3 className="venue-title">Club Nautica Porto Cristo</h3> */}

        {/* Description */}
   

        {/* View Details Button */}
       {/* <a href="/club-nautico"> <button className="view-details-btn">VIEW DETAILS</button></a> */}
      </div>
    </section>
 
    <ContactDetailsEnd/>
    <Footer/>
    


  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default Privateevents;
