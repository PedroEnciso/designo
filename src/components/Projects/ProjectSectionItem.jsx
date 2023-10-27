import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectsSection.module.css";

function ProjectSectionItem({
  id,
  title,
  slug,
  imgMobile,
  imgTablet,
  imgDesktop,
}) {
  const getImg = () => {
    if (window.innerWidth < 768) {
      return imgMobile;
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      return imgTablet;
    }

    if (window.innerWidth >= 1440) {
      return imgDesktop;
    }
  };

  const [backImage, setBackImage] = useState(getImg());

  let timer;

  window.addEventListener("resize", () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setBackImage(getImg());
    }, 2000);
  });

  return (
    <li
      className={classes.card}
      style={{ backgroundImage: "url(" + backImage + ")" }}
    >
      <Link to={`/${slug}`}>
        <div>
          <p className={classes.title}>{title}</p>
          <p className={classes.view}>
            view projects
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default ProjectSectionItem;
