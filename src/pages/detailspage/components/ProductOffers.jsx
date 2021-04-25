import React from "react";
import "../../../assets/css/styles.css";
import CardOffer from "./CardOffer.jsx";
import amazon from "../../../assets/images/amazon.png";
const ProductOffers = () => {
  return (
    <div className="product-type-section">
        <p className="baloo-chettan-25">ProductOffers</p>
      <div className="row">
        <CardOffer
          image={amazon}
          price="1000000"
        />
      </div>
      <div className="row">
        <CardOffer
          image={amazon}
          price="1000000"
        />
      </div>
    </div>
  );
};
export default ProductOffers;
