import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import "../../venuegallery.css";

const VenueGallery = ({ images }) => {
  return (
    <section className="venuegallery container">
      {/* Heading */}
      <h2 className="venuegallery-heading">Club Nautica Porto Cristo Gallery</h2>

      {/* Image Grid with Lightbox */}
      <PhotoProvider>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <PhotoView src={image}>
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="img-fluid venuegallery-img"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default VenueGallery;
