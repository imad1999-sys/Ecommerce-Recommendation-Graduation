import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import StoreImage from "./StoreImage.jsx";
import BaseButton from "../../../base/BaseButton";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft";
const cardOffer = (props) => {
  const goToSite = () => {
    window.location.href = props.productUrl;
  }
  return (
    <div className="offers d-flex position-relative card-offer-section">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div className="offers-details">
        <dl className="row">
          <dt class="col-sm-3 tajawal-15">اسم المتجر: </dt>
          <dd class="col-sm-9 tajawal-15">
            {props.siteName}
          </dd>
          <dt class="col-sm-3 tajawal-15">اسم المنتج: </dt>
          <dd class="col-sm-9 tajawal-15">
            {props.title}
          </dd>
        </dl>
        <div className="row">
          <BaseButton text="إذهب الى المتجر" icon={<ArrowCircleLeft />} onClick={goToSite}/>
        </div>
      </div>
    </div>
  );
};
export default cardOffer;
