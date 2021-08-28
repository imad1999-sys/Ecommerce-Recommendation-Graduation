import React from "react";
import "../../assets/css/styles.css";
import "../../assets/css/fonts.css";
import {Link} from "react-router-dom";
import { SigninIcon } from "../../icons/icons";
const splashScreen = () => {
  return (
    <div className="landing-page">
      <div className="page-content">
        <h1 className="title-landing tajawal-25">
          أهلا بكم في البيت الالكتروني
        </h1>
        <p className="text-landing tajawal-15">
          لتصفح المتجر{" "}
          <Link to="/login" className="link-landing .tajawal-15">
            قم بتسجيل الدخول
            <SigninIcon />
          </Link>
        </p>
      </div>
    </div>
  );
};
export default splashScreen;
