import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const BaseInput = (props) => {
  return (
    <div className="input-section">
      <input
        className="form-input baloo-20"
        list="datalistOptions"
        id="exampleDataList"
        type={props.type}
      />
      <label className="form-label baloo-20">{props.label}</label>
    </div>
  );
};
export default BaseInput;
