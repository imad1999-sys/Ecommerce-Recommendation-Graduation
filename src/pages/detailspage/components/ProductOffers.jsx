import React from "react";
import "../../../assets/css/styles.css";
import CardOffer from "./CardOffer.jsx";
import amazon from "../../../assets/images/amazon.png";
const ProductOffers = (props) => {
  return (
    <div className="product-type-section">
        <p className="tajawal-25">روابط المتجر و المنتج : </p>
      <div className="row">
        <CardOffer
          image={amazon}
          siteName={props.siteName}
          title={props.title}
          productUrl={props.productUrl}
        />
      </div>
    </div>
  );
};
export default ProductOffers;
