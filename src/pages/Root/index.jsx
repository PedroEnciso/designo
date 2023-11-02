import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/MainNavigation";
import FooterSection from "src/Components/Footer";

import classes from "./RootLayout.module.css";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.wrapper}>
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
}

export default RootLayout;
