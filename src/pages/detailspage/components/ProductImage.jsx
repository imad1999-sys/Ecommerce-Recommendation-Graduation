import React from "react";
import "../../../assets/css/styles.css";

const ProductImage = (props) =>{
    return <img src={props.image} class="w-100 product-image" alt="..." />;
}
export default ProductImage;