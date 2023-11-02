import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/MainNavigation";
import Footer from "src/Components/Footer";

import classes from "./RootLayout.module.css";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
