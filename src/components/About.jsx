import React from "react";
import resume from "../assets/Copy of Resume Template.pdf"
const About = () => {
  return (
    <section id="about-section" className="bg-slate-800 pt-20">
      <div className="container mx-auto pb-20">
        <div className="row flex flex-col gap-6">
          <div className="row">
            <h1 className="text-center text-2xl md:text-5xl text-blue-200 underline bg-slate-800">
              About Me
            </h1>
          </div>
          <div className="row pb-20">
            <p className="text-center text-xl md:text-3xl text-blue-200 ">
              <span className={`text-2xl md:text-5xl text-teal-300`}>Hi! </span>I am{" "}
              <span className="font-bold text-teal-300">
                Rain Christian Seguban
              </span>{" "}
              from Tuguegarao city, Cagayan, Philippines, I am a graduate of
              Bachelor of Science in Business Administration Major in Marketing
              Management. I am a self-taught web developer, I started learning
              web development last January 2023, I am a fast learner and I am
              willing to learn new things.
            </p>
            <br />
            <p className="text-center text-4xl text-blue-300 font-bold">
              <span className="text-4xl md:text-8xl text-teal-500">"</span>I see myself not
              through past achievements, but through future aspirations. I value
              personality over taught skills. I embrace learning, pushing my
              limits, and engaging in meaningful endeavors.
              <span className="text-8xl text-teal-500">"</span>
            </p>
            <h1 className={blur}>

            </h1>
            <p className="text-4xl text-blue-300 pt-4 text-center font-bold">
              <span className="text-8xl text-teal-500">"</span>Crafting seamless
              experiences from front-end elegance to back-end robustness, I
              bring a holistic approach to web development that merges
              innovation with functionality
              <span className="text-8xl text-teal-500">"</span>
            </p>
            <h3>
              Work Experiences
            </h3>
            <div>
            <p>
              Inventory Analyst
            </p>
              <p>
                sept.4 2019 - sept. 4 2022
              </p>
            </div>
            <div className="m-3 flex justify-center space-x-2">
              <a
                href={resume}
                download
                className="text-center btn my-3 py-2 px-4 rounded text-md md:text-2xl text-blue-100 bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:text-white hover:shadow-cyan-500/100 hover:scale-125 transition duration-200"
              >
                Download CV
              </a>
              <a
                href="https://assets.kodego.ph/public/isa/b52goDyLX1HtOoCIWcKA7FkmdTxrvWYXETtXojZi.pdf"
                className="text-center btn my-3 py-2 px-4 rounded text-md md:text-2xl text-blue-100 bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:text-white hover:shadow-cyan-500/100 hover:scale-125 transition duration-200"
              >
                View Certificate
              </a>
            </div>
          </div>
          <hr className="mx-6" />
        </div>
      </div>
    </section>
  );
};

export default About;
