import React from "react";
import "../../../assets/css/styles.css";
import BaseButton from "../../../base/BaseButton";
import BaseDetailCard from "../../../base/BaseDetailCard";
import CommentIcon from "../../../icons/CommentIcon";
import Amazon from "../../../assets/images/amazon.png";
const ReviewsNav = () => {
  return (
    <div className="reviews-container">
      <div className="row">
        <BaseButton icon={<CommentIcon />} text="إضافة تقييم" link="/home" />
      </div>
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
export default ReviewsNav;
