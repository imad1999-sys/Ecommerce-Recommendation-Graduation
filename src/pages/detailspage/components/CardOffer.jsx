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
import { addLogAction } from "../../../API/actions/loggsactions/LoggsActions";
import { headers } from "../../../API/tokens/tokens";
const cardOffer = (props) => {
  const goToSite = (url) => {
    addLogAction("", props.id, "redirect", headers);
    window.location.href = url;
  };
  return (
    <div>
      {props.matchedProducts.map((prod) => (
        <div className="offers d-flex position-relative card-offer-section">
          <div className="row">
            {prod.storeName === "noon" ? (
              <StoreImage image={noon} alt={props.alt} />
            ) : (
              ""
            )}
            {prod.storeName === "اكسيوم تيليكوم" ? (
              <StoreImage image={axiomTelecom} alt={props.alt} />
            ) : (
              ""
            )}
            {prod.storeName === "جادجت باي" ? (
              <StoreImage image={gadgetBy} alt={props.alt} />
            ) : (
              ""
            )}
            {prod.storeName === "godukkan" ? (
              <StoreImage image={godukkan} alt={props.alt} />
            ) : (
              ""
            )}
            {prod.storeName === "المحلات الكبرى" ? (
              <StoreImage image={grandStores} alt={props.alt} />
            ) : (
              ""
            )}
          </div>
          <div className="offers-details">
            <dl className="row">
              <dt class="col-sm-3 tajawal-15">اسم المتجر: </dt>
              <dd class="col-sm-9 tajawal-15">{prod.storeName}</dd>
              <dt class="col-sm-3 tajawal-15">السعر: </dt>
              <dd class="col-sm-9 tajawal-15">{prod.sale_price}</dd>
            </dl>
            <div className="row">
              <BaseButton
                text="إذهب الى المتجر"
                icon={<ArrowCircleLeft />}
                onClick={() => goToSite(prod.product_url)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default cardOffer;
