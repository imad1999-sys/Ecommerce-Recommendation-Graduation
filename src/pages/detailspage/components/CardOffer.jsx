import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import StoreImage from "./StoreImage.jsx";
import {Link} from "react-router-dom";
const cardOffer = (props) => {
  return (
    <div className="offers d-flex position-relative card-offer-section">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div className="offers-details">
        <dl className="row">
          <dt class="col-sm-3 baloo-15">اسم المتجر: </dt>
          <dd class="col-sm-9 baloo-15">
            {props.siteName}
          </dd>
          <dt class="col-sm-3 baloo-15">اسم المنتج: </dt>
          <dd class="col-sm-9 baloo-15">
            {props.title}
          </dd>
        </dl>
        <div className="row">
          <Link to={props.productUrl} className="btn btn-primary stretched-link baloo-20">
            اذهب الى المتجر
          </Link>
        </div>
      </div>
    </div>
  );
};
export default cardOffer;
