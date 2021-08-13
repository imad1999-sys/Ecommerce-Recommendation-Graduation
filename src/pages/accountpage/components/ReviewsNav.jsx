import React, { useEffect, useState } from "react";
import "../../../assets/css/styles.css";
import BaseButton from "../../../base/BaseButton";
import BaseDetailCard from "../../../base/BaseDetailCard";
import CommentIcon from "../../../icons/CommentIcon";
import Amazon from "../../../assets/images/amazon.png";
import {
  deleteUserReviewAction,
  getUserReviewsAction,
} from "../../../API/actions/reviewsactions/ReviewActions";
import { headers } from "../../../API/tokens/tokens.jsx";
const ReviewsNav = () => {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    getUserReviewsAction("", headers).then((response) => {
      if (response.status < 300) {
        if (response.data.response.reviews != null) {
          alert("تم جلب تقييمات المستخدم بنجاح");
        }
        setReviews(response.data.response.reviews);
      } else {
        alert("حدث خطأ أثناء عملية الجلب");
      }
      console.log(response);
    });
  };
  const deleteReviewById = (id) => {
    deleteUserReviewAction(id, headers).then((response) => {
      if (response.status < 300) {
        alert("تمت عملية حذف التقييم بنجاح");
        getReviews();
      } else {
        alert("حدث خطأ أثناء عملية الحذف");
      }
      console.log(response);
    });
  };
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="reviews-container">
      <div className="row">
        <BaseButton icon={<CommentIcon />} text="إضافة تقييم" link="/home" />
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 gx-5">
        {reviews.map((review) => (
          <div className="col-sm">
            <BaseDetailCard
              image={Amazon}
              siteName={review.siteName}
              description={review.description}
              deleteText="حذف التفييم"
              isNotRating={true}
              isAlarm={false}
              isPrevProduct={false}
              onClick={() => deleteReviewById(review.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewsNav;
