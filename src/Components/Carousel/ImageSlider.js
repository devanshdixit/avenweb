import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // shoaib badshah work
  return (
    <section className="slider">
      <div className="flex justify-center ">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {/* {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )} */}
              <img src={slide.image} alt="travel image" className="image" />
            </div>
          );
        })}
      </div>
      <div className="flex w-full mt-3 justify-center ">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
};

export default ImageSlider;
