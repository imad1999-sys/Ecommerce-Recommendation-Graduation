import React, { useState } from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import BaseInput from "../../../base/BaseInput";
import { addPricingAlertAction } from "../../../API/actions/alertactions/AlertActions";
import { headers } from "../../../API/tokens/tokens";
import { addLogAction } from "../../../API/actions/loggsactions/LoggsActions";
import { addUserReviewAction } from "../../../API/actions/reviewsactions/ReviewActions";

const ReviewModal = (props) => {
  const [siteName, setSiteName] = useState("");
  const [description, setDescription] = useState("");
  console.log(props.siteName);
  const addPricingAlert = () => {
    const productId = props.productId;
    let pricingJsonItem = { siteName, description, productId };
    addPricingAlertAction(pricingJsonItem, headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert(response.data.response);
        addLogAction(productId, "price_alert", headers);
      } else {
        alert("حدث خطأ أثناء عملية الإضافة");
      }
    });
  };
  const addReview = () => {
    const productId = props.productId;
    let reviewJsonItem = { siteName, description, productId };
    addUserReviewAction(reviewJsonItem, headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert(response.data.response);
        addLogAction(productId, "review", headers);
      } else {
        alert("حدث خطأ أثناء عملية الإضافة");
      }
    });
  };
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-primary tajawal-15"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {props.modalIcon}
        {props.btnModalText}
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title tajawal-25" id="exampleModalLabel">
                التقييمات
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              <div className="container">
                <div className="row">
                  <BaseInput
                    label="البريد الالكتروني"
                    type="text"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                  />
                </div>
                <div className="row">
                  <BaseInput
                    label="وصف التقييم"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                onClick={addReview}
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
export default ReviewModal;
