import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const BaseCardDashboard = (props) => {
  return (
    <div className="card-dashboard-container">
      <div class="card card-dashboard text-white bg-dark mb-3">
        <div class="card-body">
          <h5 class="card-title tajawal-25">{props.countTitle}</h5>
          <p class="card-text tajawal-15">
            {props.count}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BaseCardDashboard;
