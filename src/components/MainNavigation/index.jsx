import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

import MobileMenu from "../MobileMenu";

import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const toggleMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (showMenu) {
      toggleMenuHandler();
    }
  }, [location]);

  return (
    <header className={classes.wrapper}>
      <nav className={classes.nav} role="navigation" aria-label="Main menu">
        <Link to="/">
          <div className={classes.logo}></div>
        </Link>
        <button onClick={toggleMenuHandler} aria-expanded="false">
          <svg
            aria-hidden="true"
            focusable="false"
            width="24"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#1D1C1E" fillRule="evenodd">
              <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
            </g>
          </svg>
        </button>
        {showMenu && <MobileMenu />}
        <ul className={classes.menu}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              our company
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
