import React, { useState, useCallback } from "react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import LazyLoad from "react-lazyload";
import "react-photo-view/dist/react-photo-view.css";
import "../../venuegallery.css";
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>

// Lazy load placeholder component
const Placeholder = () => (
  <div className="lazy-placeholder">
    <div className="loading-spinner"></div>
  </div>
);

const VenueGallery = ({ images }) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(12);
  
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1,
  };

  const displayedImages = showAll ? images : images.slice(0, visibleItems);

  // Optimized load more function
  const loadMore = useCallback(() => {
    setVisibleItems(prev => {
      const newValue = prev + 9;
      if(newValue >= images.length) setShowAll(true);
      return newValue;
    });
  }, [images.length]);

  return (
    <section className="venuegallery container">
      <h2 className="venuegallery-heading">Gallery</h2>

      <PhotoProvider>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {displayedImages.map((image, index) => (
            <LazyLoad 
              key={index}
              height={300}  // Average image height estimate
              offset={100}  // Start loading 100px before element comes into view
              placeholder={<Placeholder />}
              once  // Load only once
            >
              <PhotoView src={image}>
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="img-fluid venuegallery-img"
                  loading="lazy"  // Native lazy loading as fallback
                />
              </PhotoView>
            </LazyLoad>
          ))}
        </Masonry>
      </PhotoProvider>

      {!showAll && images.length > visibleItems && (
        <div className="text-center py-4">
          <button 
            onClick={loadMore}
            className="btn-transparent"
            aria-label="Load more images"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default VenueGallery;