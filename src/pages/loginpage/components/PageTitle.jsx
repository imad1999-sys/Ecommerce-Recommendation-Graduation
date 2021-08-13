import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
const PageTitle = (props) => {
  return (
    <div className="title-section">
      <p className="title tajawal-25">{props.title}</p>
    </div>
  );
};
export default PageTitle;
