import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import StoreImage from "./StoreImage.jsx";
const cardOffer = (props) => {
  return (
    <div className="offers d-flex position-relative">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div className="offers-details">
        <dl className="row">
          <dt class="col-sm-3 baloo-20">Price</dt>
          <dd class="col-sm-9 baloo-15">
            {props.price}
          </dd>
          <dt class="col-sm-3 baloo-20">Delivery: </dt>
          <dd class="col-sm-9 baloo-15">
            free delivery
          </dd>
        </dl>
        <div className="row">
          <a href="#" className="stretched-link">
            Go to store
          </a>
        </div>
      </div>
    </div>
  );
};
export default cardOffer;
