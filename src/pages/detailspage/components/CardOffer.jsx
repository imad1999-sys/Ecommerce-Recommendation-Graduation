import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import axiomTelecom from "../../../assets/images/axiom-telecom.png";
import gadgetBy from "../../../assets/images/gadgetby.jfif";
import godukkan from "../../../assets/images/godukkan.jfif";
import grandStores from "../../../assets/images/grand stores.png";
import noon from "../../../assets/images/noon.png";
import StoreImage from "./StoreImage.jsx";
import BaseButton from "../../../base/BaseButton";
import { ArrowCircleLeft } from "../../../icons/icons";
import { headers } from "../../../API/tokens/tokens";
const cardOffer = (props) => {
  const goToSite = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      <div className="offers d-flex position-relative card-offer-section">
        <div className="row">
          {props.storeName === "noon" ? (
            <StoreImage image={noon} alt={props.alt} />
          ) : (
            ""
          )}
          {props.storeName === "اكسيوم تيليكوم" ? (
            <StoreImage image={axiomTelecom} alt={props.alt} />
          ) : (
            ""
          )}
          {props.storeName === "جادجت باي" ? (
            <StoreImage image={gadgetBy} alt={props.alt} />
          ) : (
            ""
          )}
          {props.storeName === "godukkan" ? (
            <StoreImage image={godukkan} alt={props.alt} />
          ) : (
            ""
          )}
          {props.storeName === "المحلات الكبرى" ? (
            <StoreImage image={grandStores} alt={props.alt} />
          ) : (
            ""
          )}
        </div>
        <div className="offers-details">
          <p className="tajawal-15">اسم المتجر: {props.storeName} </p>
          <p className="tajawal-15">السعر: {props.sale_price} </p>
          <div className="row">
            <BaseButton
              text="إذهب الى المتجر"
              icon={<ArrowCircleLeft />}
              onClick={() => goToSite(props.product_url)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardOffer;
