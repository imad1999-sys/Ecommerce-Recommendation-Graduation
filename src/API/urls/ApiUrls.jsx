import { baseUrl } from "../base/BaseUrl";

/* user apis */ 
export const loginApiUrl = baseUrl + "/api/login";
export const registerApiUrl = baseUrl + "/api/register";
export const getUserInfoUrl = baseUrl + "/api/profile";

/* search apis */
export const searchApiUrl = baseUrl + "/api/search?q=";
export const searchAutoCompleteUrl = baseUrl + "/api/autocomplete?q=";

/* reviews apis */
export const reviewsApiUrl = baseUrl + "/api/reviews";
export const getUserReviewsApiUrl = baseUrl + "/api/reviews/user";
export const deleteReviewByIdApiUrl = baseUrl + "/api/reviews/";
export const getAllReviews = baseUrl + "/api/reviews";

/* favorites apis */
export const addFavoriteApiUrl = baseUrl + "/api/favorites";
export const getFavoritesForUserApiUrl = baseUrl + "/api/favorites";
export const deleteFavoriteByIdApiUrl = baseUrl + "/api/favorites/";
export const getAllFavorites = baseUrl + "/api/favorites";

/* products */
export const fetchProduct = baseUrl + "/api/products/";
export const fetchAllProducts = baseUrl + "/api/products";

/* price alert */
export const addPriceAlert = baseUrl + "/api/price-alert";
export const getPriceAlertForUser = baseUrl + "/api/price-alert";
export const deletePriceAlertById = baseUrl + "/api/price-alert/";

/* favorites */
export const getFavoritesForUser = baseUrl + "/api/favorites/user";

/* smart search */
export const searchfirst = baseUrl + "/api/search/?q=";
export const searchSecond = "?q=&filter=category_sa:";
export const searchByCategory = baseUrl + "/api/search/?q=*&filter=category_sa:"
export const searchAutoComplete = baseUrl + "/api/autocomplete?q=";

/* logging */
export const logApiUrl = baseUrl + "/api/logs";

