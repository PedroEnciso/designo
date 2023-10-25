import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/MainNavigation";

import classes from "./RootLayout.module.css";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.wrapper}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
