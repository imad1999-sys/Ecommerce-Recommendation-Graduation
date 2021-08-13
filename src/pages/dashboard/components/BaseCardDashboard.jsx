import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const BaseCardDashboard = (props) => {
  return (
    <div class="card card-dashboard text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title tajawal-25">{props.title}</h5>
        <p class="card-text tajawal-15">
            {props.subTitle}
        </p>
      </div>
    </div>
  );
};
export default BaseCardDashboard;
