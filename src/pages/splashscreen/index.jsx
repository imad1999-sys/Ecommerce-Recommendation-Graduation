import React from "react";
import "../../assets/css/styles.css";
import "../../assets/css/fonts.css";
import SigninIcon from "../../icons/SigninIcon.jsx";

const splashScreen = () => {
  return (
    <div className="landing-page">
      <div className="page-content">
        <h1 className="title-landing baloo-chettan-30">Welcome to Electronic Home store</h1>
        <p className="text-landing baloo-20">
          To browse the store{" "}
          <a className="link-landing baloo-20" href="#">
            <SigninIcon />
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};
export default splashScreen;
