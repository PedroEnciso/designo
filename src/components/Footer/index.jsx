import React from "react";

import CallToAction from "src/components/Svg/CallToAction";

import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <section className={classes.callToActionWrapper}>
        <div className={classes.callToAction}>
          <div className={classes.callToActionText}>
            <h2 className="heading2">Let's talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="button buttonOnDark">get in touch</button>
          <CallToAction />
        </div>
      </section>
      <footer>this is the footer</footer>
    </>
  );
}

export default Footer;
