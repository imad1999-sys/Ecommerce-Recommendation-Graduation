import {
  fetchStoreProductsService,
  getAllProductsService,
  getProductService,
  matchProductService,
  mostPopularCategoryService,
  mostViewedService,
  recentlyAddedService,
  topItemsForCategoryService,
} from "../../services/other/ProductService.jsx";
export const fetchAllProductsAction = (data, headers) => {
  return getAllProductsService(data, headers);
};
export const fetchProductAction = (id, data, headers) => {
  return getProductService(id, data, headers);
};
export const matchProductAction = (data , queryParams, headers) => {
  return matchProductService(data , queryParams, headers);
};
export const fetchStoreProductsAction = (name, data , headers) => {
  return fetchStoreProductsService(name,data, headers);
}
export const mostViewedAction = (data , headers) => {
  return mostViewedService(data , headers);
}
export const recentlyAddedAction =(data , headers) => {
  return recentlyAddedService(data , headers);
}
export const mostPopularCategoryAction = (data , headers) => {
  return mostPopularCategoryService(data , headers);
}
export const topItemsForCategoryAction = (data , headers) => {
  return topItemsForCategoryService(data , headers);
}