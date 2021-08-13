import { deleteReviewService, getUserReviewsService , addReviewService } from "../../services/other/ReviewsService";
export const getUserReviewsAction = (data, headers) => {
  return getUserReviewsService(data, headers);
};
export const deleteUserReviewAction = (data , headers) => {
    return deleteReviewService(data, headers);
}
export const addUserReviewAction = (data, headers)=>{
    return addReviewService(data, headers);
}
