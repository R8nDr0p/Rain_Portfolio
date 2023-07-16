import React from "react";

const About = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto">
        <div className="row flex flex-col gap-6">
          <div className="row">
            <h1 className="text-center text-5xl text-blue-200 underline bg-slate-800">
              About Me
            </h1>
          </div>
          <div className="row">
            <p className="text-center text-3xl text-blue-200 ">
              I am Rain Christian Seguban from Tuguegarao city, Cagayan,
              Philippines, I am a graduate of Bachelor of Science in Business
              Administration Major in Marketing Management. I am a self-taught
              web developer, I started learning web development last January
              2023, I am a fast learner and I am willing to learn new things.
            </p>
          </div>
          <hr className="mx-6" />
        </div>
      </div>
    </section>
  );
};

export default About;
