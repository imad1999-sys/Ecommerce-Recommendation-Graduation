import React from "react";
import "../../../assets/css/styles.css";
import BaseButton from "../../../base/BaseButton.jsx";
import SignupIcon from "../../../icons/SignupIcon.jsx";
const RegisterLink = (props) => {
  return (
    <div className="link-section">
      <p className="link-text">If you don't have an account</p>
      <BaseButton text="Signup now" icon={<SignupIcon />} link={props.link} />
    </div>
  );
};
export default RegisterLink;
