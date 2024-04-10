import React, { useEffect, useState } from "react";
import car1 from "../assets/Images/car1.jpg";
import car2 from "../assets/Images/car2.jpg";
import car3 from "../assets/Images/car3.jpg";
import car4 from "../assets/Images/car4.jpg";
import car5 from "../assets/Images/car5.jpg";

import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const slides = [car1, car2, car3, car4, car5];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="mt-12 overflow-hidden relative w-5/6 m-auto max-h-[90vh]">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <img className="object-cover" src={s} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-neutral-50 text-gray-900 hover:bg-neutral-200"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-neutral-50 text-gray-900 hover:bg-neutral-200"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 ">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full
            
            ${current === i ? "p-2" : "bg-opacity-50"}

            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
