import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const baseButton = (props) => {
  return (
    <div className="button-section">
        <button
          onClick={props.onClick}
          className="btn btn-outline-primary btn-link tajawal-15"
        >
          {props.text} {props.icon}
        </button>
    </div>
  );
};
export default baseButton;
