import { del, get, post } from "../../functions/BaseAxiosFunctions.jsx";
import {
  addReviewApiUrl,
  deleteReviewByIdApiUrl,
  getUserReviewsApiUrl,
  getAllReviews,
} from "../../urls/ApiUrls.jsx";
export const getUserReviewsService = (data, headers) => {
  return get(getUserReviewsApiUrl, data, headers);
};
export const getAllReviewsService = () => {
  return get(getAllReviews);
};
export const addReviewService = (data , headers) => {
  return post(addReviewApiUrl, data , headers);
};
export const deleteReviewService = (id , headers) => {
  return del(deleteReviewByIdApiUrl + id , headers);
};
