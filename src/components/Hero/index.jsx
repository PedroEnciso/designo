import React from "react";

import classes from "./HeroSection.module.css";
import phoneImg from "src/assets/home/desktop/image-hero-phone.png";

function HeroSection(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.heroDetails}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="button buttonOnDark">learn more</button>
      </div>
      <img src={phoneImg} alt="" />
      <div className={classes.svg}>
        <svg width="640" height="639" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
              <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 -1 -1 0 640 640)"
            cx="320"
            cy="320"
            r="320"
            fillRule="evenodd"
            opacity=".309"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
