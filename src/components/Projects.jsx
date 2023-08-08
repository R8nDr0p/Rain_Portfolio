import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsGithub,
} from "react-icons/bs";
import { PiDotOutlineDuotone, PiDotDuotone } from "react-icons/pi";
import project2Pic from "../assets/Anime-Hub.png";
import project1Pic from "../assets/mp1.png";
function Projects() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2013/07/12/15/03/clouds-149344_1280.png",
      link: "https://anime-hub-omega.vercel.app/",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
      link: "https://keebs-gold.vercel.app/",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742_640.jpg",
      link: "https://anime-hub-omega.vercel.app/",
    },
    {
      url: project2Pic,
      link: "https://anime-hub-omega.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/anime_hub",
    },
    {
      url: project1Pic,
      link: "https://keebs-gold.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/project-1",
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
        <a href={slides[currentIndex].link} target="_blank">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </a>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {slides[currentIndex].gitHubLink && (
          <div className="hidden group-hover:block absolute top-[85%] left-[50%] bg-black/20 opacity-80 rounded px-4 py-1">
            <a href={slides[currentIndex].gitHubLink} target="_blank">
              <BsGithub className="text-3xl text-[#dbeafe]" />
            </a>
          </div>
        )}
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
