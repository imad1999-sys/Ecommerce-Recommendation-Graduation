import React from "react";
import Rating from "@material-ui/lab/Rating";
import StoreImage from "./StoreImage.jsx";
import "../../../assets/css/styles.css";

const cardPrice = (props) => {
  return (
    <div className="d-flex position-relative">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt}/>
      </div>
      <div className="row">
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </div>
      <div>
        <h5 className="mt-0">{props.title}</h5>
        <p>{props.store}</p>
        <p>{props.type}</p>
        <p>Cargo from USA</p>
        <p>Deliver in 24 hours</p>
        <div className="row">
          <div className="col-4">
            <p>{props.price}</p>
          </div>
          <div className="col-4">
            <p>free delivery</p>
          </div>
          <div className="col-4">
            <a href="#" className="stretched-link">
              Go to store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardPrice;
