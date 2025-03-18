import React, { useState, useCallback, useEffect } from "react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import LazyLoad from "react-lazyload";
import "react-photo-view/dist/react-photo-view.css";
import "../../venuegallery.css";

const Placeholder = () => (
  <div className="lazy-placeholder">
    <div className="loading-spinner"></div>
  </div>
);

const NewVenuegallery = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(12);
  const [categories, setCategories] = useState(['All']);

  // Extract unique categories
  useEffect(() => {
    const uniqueCategories = [...new Set(images.map(img => img.category))];
    setCategories(['All', ...uniqueCategories]);
  }, [images]);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1,
  };

  // Filter images based on category
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  // Currently displayed images
  const displayedImages = filteredImages.slice(0, visibleItems);

  const loadMore = useCallback(() => {
    setVisibleItems(prev => prev + 9);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleItems(12);
  };

  return (
    <section className="venuegallery container">
      <h2 className="venuegallery-heading">Gallery</h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
          >
          
            {category.replace('category', 'Category ')}
          </button>
        ))}
      </div>

      <PhotoProvider photos={displayedImages.map(img => ({ src: img.src }))}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {displayedImages.map((image) => (
            <LazyLoad 
              key={image.src}
              height={300}
              offset={100}
              placeholder={<Placeholder />}
              once
            >
              <PhotoView src={image.src}>
                <img
                  src={image.src}
                  alt={image.alt || "Gallery image"}
                  className="img-fluid venuegallery-img"
                  loading="lazy"
                />
              </PhotoView>
            </LazyLoad>
          ))}
        </Masonry>
      </PhotoProvider>

      {filteredImages.length > visibleItems && (
        <div className="text-center py-4 ">
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

export default NewVenuegallery;