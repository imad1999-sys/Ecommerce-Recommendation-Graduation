import React from "react";
import "../../assets/css/styles.css";
import "../../assets/css/fonts.css";
import SigninIcon from "../../icons/SigninIcon.jsx";
import {Link} from "react-router-dom";
const splashScreen = () => {
  return (
    <div className="landing-page">
      <div className="page-content">
        <h1 className="title-landing baloo-chettan-30">
          أهلا بكم في البيت الالكتروني
        </h1>
        <p className="text-landing baloo-20">
          لتصفح المتجر{" "}
          <Link to="/login" className="link-landing baloo-20">
            قم بتسجيل الدخول
            <SigninIcon />
          </Link>
        </p>
      </div>
    </div>
  );
};
export default splashScreen;
