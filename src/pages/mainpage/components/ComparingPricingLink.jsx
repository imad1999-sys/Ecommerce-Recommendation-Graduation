import React from "react";
import PricingTag from "../../../icons/PriceTagIcon.jsx";
import "../../../assets/css/styles.css";
const comparingPricingLink = () => {
  return (
    <a className="btn btn-success carousel-link baloo-15" href="#">
      قارن الاسعار
      <PricingTag />
    </a>
  );
};
export default comparingPricingLink;
