import React from "react";
import "../../../assets/css/styles.css";
import CardOffer from "./CardOffer.jsx";
import amazon from "../../../assets/images/amazon.png";
const ProductOffers = (props) => {
  return (
    <div className="product-type-section">
      <p className="tajawal-25">المنتج من متاجر أخرى : </p>
      <div className="row">
        <CardOffer
          matchedProducts={props.matchedProducts}
          image={amazon}
          siteName={props.siteName}
          salePrice={props.salePrice}
          productUrl={props.productUrl}
          id={props.id}
        />
      </div>
    </div>
  );
};
export default ProductOffers;
