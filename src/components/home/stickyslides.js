import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../StickySlides.css";
import slider1 from "../../images/slider1catering.webp";
import slider2 from "../../images/slide2.webp";
import slider3 from "../../images/slide3.webp";

const slides = [
  {
    id: 1,
    image: slider1,
    title: "Catering & Private Chef Services",
    text: "Transform your celebration into a culinary masterpiece with our Private Chef and catering services.",
  },
  {
    id: 2,
    image: slider2,
    title: "Luxury Dining Experience",
    text: "Enjoy gourmet dining with our professional chefs who craft exquisite meals tailored to your taste.",
  },
  {
    id: 3,
    image: slider3,
    title: "Fresh & Organic Ingredients",
    text: "We use only the freshest, locally sourced ingredients to create delicious and healthy dishes.",
  },
];

const Slide = ({ slide }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="slide"
      style={{ backgroundImage: `url(${slide.image})` }}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="slide-content">
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
        <button className="slide-btn">About Us</button>
      </div>
    </motion.div>
  );
};

const StickyScrollSlide = () => {
  return (
    <div className="stickyscrollslide">
      {slides.map((slide) => (
        <div key={slide.id} className="slide-wrapper">
          <Slide slide={slide} />
        </div>
      ))}
    </div>
  );
};

export default StickyScrollSlide;
