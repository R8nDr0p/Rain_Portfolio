import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsGithub,
} from "react-icons/bs";
import { PiDotOutlineDuotone, PiDotDuotone } from "react-icons/pi";
import project2Pic from "../assets/Anime-Hub.png";
import project1Pic from "../assets/mp1.png";
import project3Pic from "../assets/mp3.png";
import project4Pic from "../assets/mp4.png";
import project5Pic from "../assets/mp5.png";

function Projects() {
  const slides = [
    {
      url: project1Pic,
      link: "https://keebs-gold.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/project-1",
      synopsis:
        "This is one of my initial projects, serving as a conceptual representation of an ideal online store. It focuses on ergonomic keyboards, designed to promote wrist health and prevent Repetitive Strain Injury (RSI) while providing a comfortable shopping experience.",
    },

    {
      url: project2Pic,
      link: "https://anime-website-rose.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/anime_hub",
      synopsis:
        "This React project serves as a dynamic showcase of my adept API manipulation skills, reflecting my rapid adaptability and proficiency in harnessing the power of ReactJS to create efficient and effective web applications.",
    },
    {
      url: project3Pic,
      link: "https://music-player-project-xi.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/Music-Player-Project",
      synopsis:
        "This project demonstrates my expertise in DOM manipulation and showcases my ability to harness Vanilla JavaScript to create a fully functional MP3 player.",
    },
    {
      url: project4Pic,
      link: "https://tic-tac-toe-qsvn.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/Tic-tac-toe",
      synopsis:
        "This project marks my foray into Express.js and full-stack application development. It's a straightforward yet engaging Tic-Tac-Toe game designed for two players. Feel free to test the application by creating two distinct accounts—one in a private tab and another in a regular tab for a seamless gaming experience.",
    },
    {
      url: project5Pic,
      link: "https://clock-project-snowy.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/Clock-Project",
      synopsis:
        "This project is a testament to my expertise in DOM manipulation, showcasing the creation of a visually captivating analog clock set within the iconic Rolex Day-Date dial.",
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
    <section id="project-section" className="bg-slate-800 pt-14">
      <div className="div">
        <h1 className="text-center text-6xl text-blue-200 underline">
          Projects
        </h1>
      </div>
      <div className="max-w-[1400px] h-[780px] m-auto py-16 px-4 relative group">
        <a href={slides[currentIndex].link} target="_blank">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-top bg-cover duration-500"
          ></div>
        </a>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-110 duration-100">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-110 duration-100">
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
      <div className="flex justify-center items-center">
        <p className="text-3xl text-center text-teal-300">
          {slides[currentIndex].synopsis}
        </p>
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
