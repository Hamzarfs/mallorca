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
    text: "Transform your celebration into a culinary masterpiece with our Private Chef and catering service, delivering restaurant-quality cuisine in the comfort of your home or chosen venue anywhere on the island of Mallorca.",
    link: "/catering", // Unique link for this slide
  },
  {
    id: 2,
    image: slider2,
    title: "Corporate & Team Building Events",
    text: "Treat your team to a memorable corporate celebration or an engaging team-building experience that’s as fun as it is rewarding. With our extensive corporate menu, your event can be customized to suit your exact needs, blending exceptional dining with exciting, hands-on activities.",
    link: "/corporate-events", // Unique link for this slide
  },
  {
    id: 3,
    image: slider3,
    title: "Private Events",
    text: "Our dedicated team is passionate about delivering unparalleled service in breathtaking locations, offering you an exclusive escape into luxury. From crafting exquisite menus tailored to your vision to sourcing the finest ingredients, we ensure every detail exceeds expectations.",
    link: "/private-events", // Unique link for this slide
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
        <a href={slide.link} className="slide-btn">Find out more</a> {/* Dynamic link */}
      <a href="/contact-us">  <button className="slide-btn">Get a Quote</button></a>
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
