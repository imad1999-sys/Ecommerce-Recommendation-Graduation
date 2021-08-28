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
export const deleteProductById = baseUrl + "/api/products/";
export const matchProductUrl = baseUrl + "/api/match?q=";
export const storeProductUrl = baseUrl + "/api/products/stores/";
export const mostViewedUrl = baseUrl + "/api/products/most-viewed";
export const recentlyAddedUrl = baseUrl + "/api/products/recently-added";
export const mostPopularCategoryUrl =
  baseUrl + "/api/products/most-popular-category";
export const topItemsForCategoryUrl =
  baseUrl + "/api/products/top-items-for-category";

/* price alert */
export const addPriceAlert = baseUrl + "/api/price-alert";
export const getPriceAlertForUser = baseUrl + "/api/price-alert";
export const getAllPriceAlert = baseUrl + "/api/price-alert/all";
export const sendPriceAlert = baseUrl + "/api/price-alert/send";
export const deletePriceAlertById = baseUrl + "/api/price-alert/";

/* smart search */
export const searchFirst = baseUrl + "/api/search/?limit=200&q=";
export const searchSecond = "&sort=";
export const searchThird = "&languages_s=";
export const searchByCategory =
  baseUrl + "/api/search/?limit=200&q=*&filter=category_sa:";
export const searchAutoComplete = baseUrl + "/api/autocomplete?q=";
export const recommendUrl = baseUrl + "/api/recommend/";

/* logging */
export const logApiUrl = baseUrl + "/api/logs";
export const deleteLogApiUrl = baseUrl + "/api/logs/";
export const getAllLogsApiUrl = baseUrl + "/api/logs/all";

/* dashboard */
export const getStoresUrl = baseUrl + "/api/stores";
export const freezeStoreUrl = baseUrl + "/api/stores/";
export const freezeStoreUrl2 = "?freeze=true";
export const deleteStoreUrl = baseUrl + "/api/stores/";
export const getUsersUrl = baseUrl + "/api/users";
export const deleteUserByIdUrl = baseUrl + "/api/users/";
export const statisticsUrl = baseUrl + "/api/stores/statistics";
