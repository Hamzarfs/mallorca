import React, { useEffect, useState, useRef } from "react";
import "../../homevertslider.css";
import slider1 from "../../images/slider1catering.webp";
import slider2 from "../../images/slide2.webp";
import slider3 from "../../images/slide3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: slider1,
    heading: "Catering & Private Chef Services",
    text: "Transform your celebration into a culinary masterpiece with our Private Chef and catering service, delivering restaurant-quality cuisine anywhere in Mallorca.",
  },
  {
    image: slider2,
    heading: "Gourmet Experience at Home",
    text: "Enjoy a fine dining experience in the comfort of your home with our professional chefs and customized menus.",
  },
  {
    image: slider3,
    heading: "Exclusive Events & Celebrations",
    text: "From intimate dinners to large gatherings, our catering services make every occasion special with exquisite cuisine.",
  },
];

const HomeVertSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    const handleSlideChange = () => {
      if (swiper.activeIndex === slides.length - 1) {
        // Last slide -> scroll down
        window.scrollBy({ top: 200, behavior: "smooth" });
      } else if (swiper.activeIndex === 0) {
        // First slide -> scroll up
        window.scrollBy({ top: -200, behavior: "smooth" });
      }
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  return (
    <section className="hovertslider">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={{ forceToAxis: true }}
        pagination={{ clickable: true }}
        speed={800}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="hovertslider-content">
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
              <button>ABOUT US</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeVertSlider;
