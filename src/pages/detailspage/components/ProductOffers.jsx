import React from "react";
import "../../../assets/css/styles.css";
import CardOffer from "./CardOffer.jsx";
import amazon from "../../../assets/images/amazon.png";
const ProductOffers = (props) => {
  return (
    <div className="product-type-section">
      <p className="tajawal-25">المنتج من متاجر أخرى : </p>
      <div className="row">
        {props.matchedProducts.map((prod) => (
          <div className="col-6">
            <CardOffer
              storeName={prod.storeName}
              sale_price={prod.sale_price}
              product_url={prod.product_url}
              id={props.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductOffers;
