import React from "react";
import "../../../assets/css/styles.css";
import BaseDetailCard from "../../../base/BaseDetailCard";
import Amazon from "../../../assets/images/amazon.png";
const FavoritesNav = () => {
  return (
    <div className="favorites-container">
      <div className="row">
        <BaseDetailCard
          image={Amazon}
          detail="2021/1/19"
          description="Imad Alzayat"
          isNotRating={true}
          isAlarm={false}
          isPrevProduct={false}
        />
      </div>
    </div>
  );
};
export default FavoritesNav;
