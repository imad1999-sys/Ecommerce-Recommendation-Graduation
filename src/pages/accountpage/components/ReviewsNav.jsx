import React, { useEffect, useState } from "react";
import "../../../assets/css/styles.css";
import BaseDetailCard from "../../../base/BaseDetailCard";
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
        setReviews(response.data.response.reviews);
      }
      console.log(response);
    });
  };
  const deleteReviewById = (id) => {
    deleteUserReviewAction(id, headers).then((response) => {
      if (response.status < 300) {
        getReviews();
      } 
    });
  };
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="reviews-container">
      <div className="row row-cols-1 row-cols-md-2 g-4 gx-5">
        {reviews.map((review) => (
          <div className="col-sm">
            <BaseDetailCard
              title={review.title}
              image={review.image}
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
