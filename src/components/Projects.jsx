import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { PiDotOutlineDuotone, PiDotDuotone } from "react-icons/pi";
import project2Pic from "../assets/mp2.png";
function Projects() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2013/07/12/15/03/clouds-149344_1280.png",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742_640.jpg",
    },
    {
      url: project2Pic,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const index = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const index = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <section className="bg-slate-800 py-8">
      <div className="div">
        <h1 className="text-center text-5xl text-blue-200 underline">
          Projects
        </h1>
      </div>
      <div className="max-w-[1400px] h-[780px] m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className="text-3xl text-blue-200 cursor-pointer"
          >
            {slideIndex === currentIndex ? (
              <PiDotOutlineDuotone />
            ) : (
              <PiDotDuotone />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
