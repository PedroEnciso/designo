import React from "react";

import HeroSection from "src/components/Hero";
import ProjectsSection from "src/components/Projects";
import DesignerQualitiesSection from "src/components/DesignerQualities";

import data from "src/data.js";

function HomePage(props) {
  return (
    <>
      <HeroSection />
      <ProjectsSection projects={data} />
      <DesignerQualitiesSection />
    </>
  );
}

export default HomePage;
