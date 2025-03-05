import React from "react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import "../../venuegallery.css";

const VenueGallery = ({ images }) => {
  // Breakpoints for responsive masonry layout
  const breakpointColumnsObj = {
    default: 3, // 3 columns for larger screens
    1024: 2, // 2 columns for medium screens
    768: 1, // 1 column for small screens
  };

  return (
    <section className="venuegallery container">
      {/* Heading */}
      <h2 className="venuegallery-heading">Gallery</h2>

      {/* Masonry Grid with Lightbox */}
      <PhotoProvider>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {images.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="img-fluid venuegallery-img"
              />
            </PhotoView>
          ))}
        </Masonry>
      </PhotoProvider>
    </section>
  );
};

export default VenueGallery;
