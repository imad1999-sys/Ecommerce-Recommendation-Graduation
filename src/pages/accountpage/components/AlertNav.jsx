import React from "react";
import "../../../assets/css/styles.css";
import BaseDetailCard from "../../../base/BaseDetailCard";
import Amazon from "../../../assets/images/amazon.png";
const AlertNav = () => {
  return (
    <div className="alarm-container">
      <div className="row">
        <BaseDetailCard
          image={Amazon}
          detail="2021/1/19"
          description="Imad Alzayat"
          firstDetail="السعر القديم"
          firstPrice="15000 $"
          secondDetail="السعر الجديد"
          secondPrice="12000 $"
          isNotRating={false}
          isAlarm={true}
          isPrevProduct={false}
        />
      </div>
    </div>
  );
};
export default AlertNav;
