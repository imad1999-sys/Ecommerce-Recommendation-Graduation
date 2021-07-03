import React from "react";
import DetailsIcon from "../../../../icons/DetailsIcon.jsx";
import "../../../../assets/css/styles.css";
import { Link } from "react-router-dom";
const detailsLink = (props) => {
  return (
    <Link className="btn btn-success carousel-link baloo-15" to={props.link}>
      عرض المحتوى
      <DetailsIcon />
    </Link>
  );
};
export default detailsLink;
