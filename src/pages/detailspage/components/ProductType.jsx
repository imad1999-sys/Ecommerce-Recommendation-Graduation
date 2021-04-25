import React from "react";
import "../../../assets/css/styles.css";
import CardPrice from "./CardPrice.jsx";
import amazon from "../../../assets/images/amazon.png";
const ProductType = () => {
    return (
      <div className="product-type-section">
        <div className="row">
          <CardPrice
            image={amazon}
            alt="amazon"
            title="Laptop"
            store="Amazon"
            type="New"
            price="1500000"
          />
        </div>
        <div className="row">
          <CardPrice
            image={amazon}
            alt="amazon"
            title="Laptop"
            store="Amazon"
            type="New"
            price="1500000"
          />
        </div>
      </div>
    );
}
export default ProductType;