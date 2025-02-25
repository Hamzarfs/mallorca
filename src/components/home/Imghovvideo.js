import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageHovVideo.css"; // Custom CSS
import img1 from "../../images/fincaart.webp"; 
import img2 from "../../images/fincasa.webp";
import vid1 from "../../images/FincaArt.mp4"; 
import vid2 from "../../images/FincaSaPlanaNova.mp4"; 
import img3 from "../../images/FincaEncanto.webp"; 
import img4 from "../../images/lavistamarina.webp";
import vid3 from "../../images/FincaEncanto.mp4"; 
// import vid4 from "../../images/FincaSaPlanaNova.mp4"; 

const ImageHovVideo = () => {
  const videoRefs = [useRef(null), useRef(null)];

  const handleMouseEnter = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
      videoRefs[index].current.currentTime = 0;
    }
  };

  return (
    <section className="imagehovvideo py-5">
      <div className="container">
        <div className="row">
          {/* First Card */}
          <div className="col-md-6 mt-2">
            <div
              className="imagehovvideo-card"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="image-wrapper">
                <img src={img1} alt="Finca Art" className="img-fluid" />
                <video ref={videoRefs[0]} className="hover-video" src={vid1} muted loop></video>
              </div>
              <div className="text-content">
                <h3>Finca Art</h3>
                {/* <p>Experience the beauty of Finca Art, the perfect event venue.</p> */}
                <button className="btn-transparent">FURTHER INFO</button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6 mt-2">
            <div
              className="imagehovvideo-card"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div className="image-wrapper">
                <img src={img2} alt="Finca Sa Plana Nova" className="img-fluid" />
                <video ref={videoRefs[1]} className="hover-video" src={vid2} muted loop></video>
              </div>
              <div className="text-content">
                <h3>Finca Sa Plana Nova</h3>
                {/* <p>Enjoy a stunning ambiance at Finca Sa Plana Nova.</p> */}
                <button className="btn-transparent">FURTHER INFO</button>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          {/* First Card */}
          <div className="col-md-6 mt-2">
            <div
              className="imagehovvideo-card"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="image-wrapper">
                <img src={img3} alt="Finca Art" className="img-fluid" />
                <video ref={videoRefs[0]} className="hover-video" src={vid3} muted loop></video>
              </div>
              <div className="text-content">
                <h3>Finca Encanto</h3>
                {/* <p>Experience the beauty of Finca Art, the perfect event venue.</p> */}
                <button className="btn-transparent">FURTHER INFO</button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6 mt-2">
  <div
    className="imagehovvideo-card no-video" // Extra class for no video case
    onMouseEnter={(e) => e.currentTarget.classList.add("hover-effect")}
    onMouseLeave={(e) => e.currentTarget.classList.remove("hover-effect")}
  >
    <div className="image-wrapper">
      <img src={img4} alt="Finca Sa Plana Nova" className="img-fluid" />
    </div>
    <div className="text-content">
      <h3>La Vista Marina</h3>
      {/* <p>Enjoy a stunning ambiance at Finca Sa Plana Nova.</p> */}
      <button className="btn-transparent">FURTHER INFO</button>
    </div>
  </div>
  
</div>



        </div>
        
      </div>

      <div className="container d-flex justify-content-center align-items-center mt-5">
      <button className="weddingbrochure-btn">
        <span>VIEW OUR WEDDING BROCHURE</span>
      </button>
    </div>
      
    </section>

    
  );
};

export default ImageHovVideo;
