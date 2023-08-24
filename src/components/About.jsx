import React from "react";

const About = () => {
  return (
    <section id="about-section" className="bg-slate-800 pt-20">
      <div className="container mx-auto pb-20">
        <div className="row flex flex-col gap-6">
          <div className="row">
            <h1 className="text-center text-5xl text-blue-200 underline bg-slate-800">
              About Me
            </h1>
          </div>
          <div className="row pb-20">
            <p className="text-center text-3xl text-blue-200 ">
              <span className={`text-5xl text-teal-300`}>Hi! </span>I am{" "}
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
            <p className="text-center text-4xl text-blue-300">
              <span className="text-8xl text-teal-500">"</span>I see myself not
              through past achievements, but through future aspirations. I value
              personality over taught skills. I embrace learning, pushing my
              limits, and engaging in meaningful endeavors.
              <span className="text-8xl text-teal-500">"</span>
            </p>
            <p className="text-4xl text-blue-300 pt-4 text-center font-bold">
              <span className="text-8xl text-teal-500">"</span>Crafting seamless
              experiences from front-end elegance to back-end robustness, I
              bring a holistic approach to web development that merges
              innovation with functionality
              <span className="text-8xl text-teal-500">"</span>
            </p>
          </div>
          <hr className="mx-6" />
        </div>
      </div>
    </section>
  );
};

export default About;
