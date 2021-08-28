import React from "react";
import "../../../assets/css/styles.css";
const ProductNameAndRate = (props) => {
  return (
    <div className="name-and-rating">
      <div className="row">
        <p className="name tajawal-25">{props.title}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">الماركة التجارية : {props.brand}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">المشاهدات : {props.views}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">الحالة : {props.status}</p>
      </div>
    </div>
  );
};
export default ProductNameAndRate;
