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
            <h2>Club Nautico</h2>
            <p>
              If you are looking for a unique place to celebrate one of the most
              special days of your life, this estate will captivate you. An
              exceptional setting with exquisite decoration will be the perfect
              place for an intimate and beautiful celebration.
            </p>
            <p>
              If you are looking for a unique place to celebrate one of the most
              special days of your life, this estate will captivate you.
            </p>
            <button className="btn-transparent">FURTHER INFO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImgContent;
