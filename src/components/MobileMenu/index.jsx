import { NavLink } from "react-router-dom";

import classes from "./MobileMenu.module.css";

function MobileMenu(props) {
  return (
    <div className={classes.menuContainer}>
      <ul className={classes.menu}>
        <li>
          <NavLink to="/about">our company</NavLink>
        </li>
        <li>
          <NavLink to="/">locations</NavLink>
        </li>
        <li>
          <NavLink to="/">contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
