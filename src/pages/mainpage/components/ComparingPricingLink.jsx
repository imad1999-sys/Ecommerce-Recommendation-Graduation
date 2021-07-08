import React from "react";
import PricingTag from "../../../icons/PriceTagIcon.jsx";
import "../../../assets/css/styles.css";
import { Link } from "react-router-dom";
const ComparingPricingLink = (props) => {
  return (
    <Link className="btn btn-success carousel-link baloo-15" to={props.link}>
      {props.linkText}
      <PricingTag />
    </Link>
  );
};
export default ComparingPricingLink;
