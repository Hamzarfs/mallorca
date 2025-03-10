import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../LeftImgContent.css"; // Custom CSS
import clubimg from "../../images/clubnautico.webp";
import clubvid from "../../images/ClubNauticoPortoCristo.mp4";

const LeftImgContent = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="leftimgcontent">
      <div className="container bgcolor">
        <div className="row align-items-center">
          {/* Image & Video Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 image-container">
            <div
              className="image-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={clubimg} // Change with your image path
                alt="Event Venue"
                className="img-fluid"
              />
              <video
                ref={videoRef}
                className="hover-video"
                src={clubvid} // Change with your video path
                muted
                loop
              ></video>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 text-container">
            <p><strong>Exclusive Venue for Mallorca Weddings and Events</strong></p>
            <h2>Club Nautico Porto Cristo
            </h2>
            <p>
            Nestled in the heart of Porto Cristo, a charming fishing village on Mallorca’s serene east coast, Club Náutico offers an idyllic setting for your wedding day. Perched on the edge of the glistening Mediterranean, Club Náutico Porto Cristo is where unforgettable moments come to life, creating wedding memories you'll treasure forever.
            </p>
           <a href="/club-nautico"><button className="btn-transparent">FURTHER INFO</button></a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImgContent;
