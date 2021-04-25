import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const BaseInput = (props) => {
  return (
    <div className="auto-input-section">
      <input
        type={props.type}
        id="search"
        autoComplete="off"
        className="auto-input baloo-15"
        placeholder=" "
      />
      <label className="auto-label baloo-15">{props.label}</label>
    </div>
  );
};
export default BaseInput;
