import React from "react";

import PassionateSvg from "src/components/Svg/PassionateSvg";
import FriendlySvg from "src/components/Svg/FriendlySvg";
import ResourcefulSvg from "src/components/Svg/ResourcefulSvg";

import classes from "./DesignerQualitiesSection.module.css";

function DesignerQualitiesSection(props) {
  return (
    <section className={classes.wrapper}>
      <div className={classes.quality}>
        <div className={classes.svgContainer}>
          <PassionateSvg />
          <svg
            className={`${classes.backgroundSvg} ${classes.rotate270}`}
            width="202"
            height="202"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <circle
              fill="url(#a)"
              transform="matrix(0 -1 -1 0 202 202)"
              cx="101"
              cy="101"
              r="101"
              fillRule="evenodd"
              opacity=".309"
            />
          </svg>
        </div>
        <div>
          <h2 className={`heading3 ${classes.qualityTitle}`}>passionate</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>

      <div className={classes.quality}>
        <div className={classes.svgContainer}>
          <ResourcefulSvg />
          <svg
            className={`${classes.backgroundSvg} ${classes.rotate180}`}
            width="202"
            height="202"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <circle
              fill="url(#a)"
              transform="matrix(0 -1 -1 0 202 202)"
              cx="101"
              cy="101"
              r="101"
              fillRule="evenodd"
              opacity=".309"
            />
          </svg>
        </div>
        <div>
          <h2 className={`heading3 ${classes.qualityTitle}`}>resourceful</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>

      <div className={classes.quality}>
        <div className={classes.svgContainer}>
          <FriendlySvg />
          <svg
            className={`${classes.backgroundSvg}`}
            width="202"
            height="202"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <circle
              fill="url(#a)"
              transform="matrix(0 -1 -1 0 202 202)"
              cx="101"
              cy="101"
              r="101"
              fillRule="evenodd"
              opacity=".309"
            />
          </svg>
        </div>
        <div>
          <h2 className={`heading3 ${classes.qualityTitle}`}>friendly</h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DesignerQualitiesSection;
