import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import Hero from "../../components/Hero";

import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
