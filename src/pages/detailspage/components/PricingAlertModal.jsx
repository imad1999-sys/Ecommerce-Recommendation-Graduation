import React, { useState } from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import BaseInput from "../../../base/BaseInput";
import { addPricingAlertAction } from "../../../API/actions/alertactions/AlertActions";
import { headers } from "../../../API/tokens/tokens";

const PricingAlertModal = (props) => {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const addPricingAlert = () => {
    const productId = props.productId;
    let pricingJsonItem = { price, email, productId };
    addPricingAlertAction(pricingJsonItem, headers).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-primary tajawal-15"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {props.modalIcon}
        {props.btnModalText}
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title tajawal-25" id="staticBackdropLabel">
                {props.modalTitle}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="auth-container">
                <div className="row">
                  <BaseInput
                    label="البريد الالكتروني"
                    type="text"
                    value={props.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row">
                  <BaseInput
                    label="سعر التنبيه"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary tajawal-15"
                data-bs-dismiss="modal"
              >
                {props.closeIcon}
                إغلاق
              </button>
              <button
                type="button"
                class="btn btn-primary tajawal-15"
                onClick={addPricingAlert}
              >
                {props.addIcon}
                {props.btnModalClickText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingAlertModal;
