import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import BaseButton from "./BaseButton.jsx";
const Card = (props) => {
  return (
    <div>
      <div class="card base-card h-100">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title c-title tajawal-25">{props.title}</h5>
        </div>{" "}
        <ul class="list group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
            <span class="badge bg-light rounded-pill list-span tajawal-15">
              {props.price}
            </span>
            السعر
            {props.priceTag}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
            <span class="badge bg-light rounded-pill list-span tajawal-15">
              {props.salePrice}
            </span>
            سعر المبيع
            {props.priceTag}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
            <span class="badge bg-light rounded-pill list-span tajawal-15">
              {props.views}
            </span>
            عدد المشاهدات
            {props.viewTag}
          </li>
          {props.isFav ? (
            <div className="row">
              <div className="btn-card tajawal-15">
                <BaseButton
                  icon={props.favIcon}
                  text={props.favBtnText}
                  onClick={props.onClickFav}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {props.isAlert ? (
            <div className="row">
              <div className="btn-card tajawal-15">
                <BaseButton
                  icon={props.alertIcon}
                  text={props.alertBtnText}
                  onClick={props.onClickAlert}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </ul>
        <div className="row">
          <div class="btn-card tajawal-15">
            <BaseButton
              icon={props.icon}
              text={props.btnText}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
