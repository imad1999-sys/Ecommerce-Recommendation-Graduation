import React from "react";
import "../../../assets/css/styles.css";
import BaseButton from "../../../base/BaseButton.jsx";
import SignupIcon from "../../../icons/SignupIcon.jsx";
const RegisterLink = (props) => {
  return (
    <div className="link-section">
      <p className="link-text">اذا لم يكن لديك حساب</p>
      <BaseButton text="قم بإنشاء حساب" icon={<SignupIcon />} link={props.link} />
    </div>
  );
};
export default RegisterLink;
