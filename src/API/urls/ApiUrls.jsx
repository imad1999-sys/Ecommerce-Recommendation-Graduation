import { baseUrl } from "../base/BaseUrl";

/* user apis */ 
export const loginApiUrl = baseUrl + "/api/login";
export const registerApiUrl = baseUrl + "/api/register";
export const getUserInfoUrl = baseUrl + "/api/profile";

/* reviews apis */
export const addReviewApiUrl = baseUrl + "/api/reviews";
export const getUserReviewsApiUrl = baseUrl + "/api/reviews";
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
export const deleteAllProducts = baseUrl + "/api/products/all";
export const addProduct = baseUrl + "/api/products";
export const deleteProductById = baseUrl + "/api/products/"

/* price alert */
export const addPriceAlert = baseUrl + "/api/price-alert";
export const getPriceAlertForUser = baseUrl + "/api/price-alert";
export const getAllPriceAlert = baseUrl + "/api/price-alert/all";
export const sendPriceAlert = baseUrl + "/api/price-alert/send";
export const deletePriceAlertById = baseUrl + "/api/price-alert/";

/* smart search */
export const searchFirst = baseUrl + "/api/search/?q=";
export const searchSecond = "?q=&filter=category_sa:";
export const searchByCategory = baseUrl + "/api/search/?q=*&filter=category_sa:"
export const searchAutoComplete = baseUrl + "/api/autocomplete?q=";

/* logging */
export const logApiUrl = baseUrl + "/api/logs";
export const deleteLogApiUrl = baseUrl + "/api/logs/";
export const getAllLogsApiUrl = baseUrl + "/api/logs/all";

