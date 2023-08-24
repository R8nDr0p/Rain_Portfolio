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

function Projects() {
  const slides = [
    {
      url: project1Pic,
      link: "https://keebs-gold.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/project-1",
      synopsis:
        "This is one of my 1st projects showcasing how an online website should look like, it is an online store that is about keyboard or ergonomic keyboards to help your wrists and avoid RSI",
    },

    {
      url: project2Pic,
      link: "https://anime-website-rose.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/anime_hub",
      synopsis:
        "This is a  React project to showcase my API manipulation skills and my abilities to adapt and learn fast to use ReactJS effectively and efficiently",
    },
    {
      url: project3Pic,
      link: "https://music-player-project-xi.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/Music-Player-Project",
      synopsis:
        "This projects showcases my DOM manipulation and how I utilize Vanilla Javascript to make a working mp3 player!.",
    },
    {
      url: project4Pic,
      link: "https://tic-tac-toe-qsvn.vercel.app/",
      gitHubLink: "https://github.com/R8nDr0p/Tic-tac-toe",
      synopsis:
        "This is my first projects using express JS or making a full stack application its just a very simple tic-tac-toe game that need two players to play. You can make two accounts to test the application by using a private tab and a regular tab to differentiate.",
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
