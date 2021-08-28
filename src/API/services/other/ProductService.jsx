import { del, get, post } from "../../functions/BaseAxiosFunctions.jsx";
import {
  addProduct,
  deleteAllProducts,
  deleteProductById,
  fetchAllProducts,
  fetchProduct,
  matchProductUrl,
  mostPopularCategoryUrl,
  mostViewedUrl,
  recentlyAddedUrl,
  storeProductUrl,
  topItemsForCategoryUrl,
} from "../../urls/ApiUrls.jsx";
export const getProductService = (id, data, headers) => {
  return get(fetchProduct + id, data, headers);
};
export const getAllProductsService = (data, headers) => {
  return get(fetchAllProducts, data, headers);
};
export const addProductService = (data) => {
  return post(addProduct, data);
};
export const deleteProductService = (id) => {
  return del(deleteProductById, id);
};
export const deleteAllProductService = () => {
  return get(deleteAllProducts);
};
export const matchProductService = (data, queryParams, headers) => {
  let matchUrl = matchProductUrl + data;
  return get(matchUrl, queryParams, headers);
};
export const fetchStoreProductsService = (name, data, headers) => {
  let storeProduct = storeProductUrl + name;
  return get(storeProduct, data, headers);
};
export const mostViewedService = (data, headers) => {
  return get(mostViewedUrl, data, headers);
};
export const recentlyAddedService = (data, headers) => {
  return get(recentlyAddedUrl, data, headers);
};
export const mostPopularCategoryService = (data, headers) => {
  return get(mostPopularCategoryUrl, data, headers);
};
export const topItemsForCategoryService = (data, headers) => {
  return get(topItemsForCategoryUrl, data, headers);
};
