import React from "react";

import HeroSection from "src/components/Hero";
import ProjectsSection from "src/components/Projects";

import data from "src/data.js";

function HomePage(props) {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={data} />
    </>
  );
}

export default HomePage;
