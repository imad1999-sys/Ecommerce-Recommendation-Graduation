import React from "react";
import "../../../assets/css/styles.css";

const Subtitle = (props) => {
  return (
    <div className="subtitle-section">
      <div className="subtitle tajawal-25">
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};
export default Subtitle;
