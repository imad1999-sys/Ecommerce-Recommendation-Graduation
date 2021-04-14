import React from "react";
import RatingBar from "./RatingBar.jsx";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
const optionsSection = (props) => {
  return (
    <div className="options-section">
      <a href="#" className="title baloo-20">
        {props.title}
      </a>
      <RatingBar value={props.value} />
    </div>
  );
};
export default optionsSection;
