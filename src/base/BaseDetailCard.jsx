import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import BaseButton from "./BaseButton";
import DeleteIcon from "../icons/DeleteIcon";
const BaseDetailCard = (props) => {
  return (
    <div className="base-detail-card">
      <div class="d-flex position-relative">
        <img src={props.image} class="flex-shrink-0 me-3" alt="..." />
        <div>
          <h5 class="mt-0 tajawal-25">{props.siteName}</h5>
          <p className="tajawal-15">{props.description}</p>
          {props.isAlarm ? (
            <div>
              <div className="row">
                <h3 class="mt-0">{props.firstDetail}</h3>
                <p class="mt-4">{props.firstPrice}</p>
              </div>
              <div className="row">
                <h3 className="mt-0">{props.secondDetail}</h3>
                <p class="mt-4">{props.secondPrice}</p>
              </div>
              <div className="row">
                <a href="#" class="stretched-link">
                  تعديل
                </a>
                <a href="#" class="stretched-link">
                  حذف
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {props.isNotRating ? (
            <div>
              {" "}
              <BaseButton
                icon={<DeleteIcon />}
                text={props.deleteText}
                onClick={props.onClick}
              />
            </div>
          ) : (
            ""
          )}
          {props.isPrevProduct ? (
            <a href="#" className="btn btn-outline-danger">
              حذف المنتج
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default BaseDetailCard;
