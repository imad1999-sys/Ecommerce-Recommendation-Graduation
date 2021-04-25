import React from "react";
import Rating from "@material-ui/lab/Rating";
import StoreImage from "./StoreImage.jsx";
import "../../../assets/css/styles.css";

const cardPrice = (props) => {
  return (
    <div className="d-flex position-relative">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div>
        <h5 className="mt-0">{props.title}</h5>
        <div className="row">
          <dt class="col-sm-3 baloo-15">Rating: </dt>
          <dd class="col-sm-9 baloo-15">
            {" "}
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </dd>
          <dt class="col-sm-3 baloo-15">Store: </dt>
          <dd class="col-sm-9 baloo-15">{props.store}</dd>
          <dt class="col-sm-3 baloo-15">Type: </dt>
          <dd class="col-sm-9 baloo-15">{props.type}</dd>
          <dt class="col-sm-3 baloo-15">Cargo zone: </dt>
          <dd class="col-sm-9 baloo-15">Cargo from USA</dd>
          <dt class="col-sm-3 baloo-15">Hours of delivering: </dt>
          <dd class="col-sm-9 baloo-15">Deliver in 24 hours</dd>
        </div>
        <div className="row">
          <div className="col-4">
            <dt class="col-sm-3 baloo-15">Price: </dt>
            <dd class="col-sm-9 baloo-15">{props.price}</dd>
          </div>
          <div className="col-4">
            <dt class="col-sm-3 baloo-15">Delivery: </dt>
            <dd class="col-sm-9 baloo-15">Free delivery</dd>
          </div>
          <div className="col-4">
            <a href="#" className="stretched-link baloo-20">
              Go to store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardPrice;
