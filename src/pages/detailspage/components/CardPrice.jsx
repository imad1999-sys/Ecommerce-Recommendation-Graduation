import React from "react";
import Rating from "@material-ui/lab/Rating";
import StoreImage from "./StoreImage.jsx";
import "../../../assets/css/styles.css";

const cardPrice = (props) => {
  return (
    <div className="d-flex position-relative card-price-section">
      <div className="row">
        {" "}
        <StoreImage image={props.image} alt={props.alt} />
      </div>
      <div>
        <h5 className="mt-0 baloo-20">{props.title}</h5>
        <div className="row">
          <dt class="col-sm-3 baloo-15">التصنيف: </dt>
          <dd class="col-sm-9 baloo-15">
            {" "}
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </dd>
          <dt class="col-sm-3 baloo-15">المتجر: </dt>
          <dd class="col-sm-9 baloo-15">{props.store}</dd>
          <dt class="col-sm-3 baloo-15">النوع: </dt>
          <dd class="col-sm-9 baloo-15">{props.type}</dd>
          <dt class="col-sm-3 baloo-15">منطقة الشحن: </dt>
          <dd class="col-sm-9 baloo-15">الشحن من الولايات المتحدة الامريكية</dd>
          <dt class="col-sm-3 baloo-15">ساعات التوصيل: </dt>
          <dd class="col-sm-9 baloo-15">يتم التوصيل خلال 24 ساعة</dd>
        </div>
        <div className="row">
          <div className="col-4">
            <dt class="col-sm-3 baloo-15">السعر: </dt>
            <dd class="col-sm-9 baloo-15">{props.price}</dd>
          </div>
          <div className="col-4">
            <dt class="col-sm-3 baloo-15">التوصيل: </dt>
            <dd class="col-sm-9 baloo-15">توصيل مجاني</dd>
          </div>
          <div className="col-4">
            <a href="#" className="btn btn-primary stretched-link baloo-20">
              اذهب الى المتجر
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardPrice;
