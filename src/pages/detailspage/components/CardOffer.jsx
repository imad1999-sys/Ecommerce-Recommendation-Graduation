import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import StoreImage from "./StoreImage.jsx";
const cardOffer = (props) => {
  return (
    <div className="offers d-flex position-relative card-offer-section">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div className="offers-details">
        <dl className="row">
          <dt class="col-sm-3 baloo-15">السعر: </dt>
          <dd class="col-sm-9 baloo-15">
            {props.price}
          </dd>
          <dt class="col-sm-3 baloo-15">التوصيل: </dt>
          <dd class="col-sm-9 baloo-15">
            توصيل مجاني
          </dd>
        </dl>
        <div className="row">
          <a href="#" className="btn btn-primary stretched-link baloo-20">
            اذهب الى المتجر
          </a>
        </div>
      </div>
    </div>
  );
};
export default cardOffer;
