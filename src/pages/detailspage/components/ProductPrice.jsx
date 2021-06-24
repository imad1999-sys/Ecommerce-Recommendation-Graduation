import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import HeartIcon from "../../../icons/HeartIcon.jsx";
import ButtonModal from "./ButtonModal.jsx";
const ProductPrice = (props) => {
  return (
    <div className="price-container">
      <p className="baloo-chettan-25">السعر & تنبيهات الاسعار & المفضلة</p>
      <div className="row">
        <p className="baloo-chettan-25">السعر : {props.price} ل.س</p>
      </div>
      <div className="row">
        <div className="col-6">
          <ButtonModal />
        </div>
        <div className="col-6">
          <button class="btn btn-outline-danger baloo-20">
            إضافة الى المفضلة
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPrice;
