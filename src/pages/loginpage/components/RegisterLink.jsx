import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import BaseButton from "../../../base/BaseButton.jsx";
import { SignupIcon } from "../../../icons/icons";
const RegisterLink = (props) => {
  return (
    <div className="link-section">
      <p className="link-text tajawal-25">اذا لم يكن لديك حساب</p>
      <BaseButton text="قم بإنشاء حساب" icon={<SignupIcon />} onClick={props.onClick} />
    </div>
  );
};
export default RegisterLink;
