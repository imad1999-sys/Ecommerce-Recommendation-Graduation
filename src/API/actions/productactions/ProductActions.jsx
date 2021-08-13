import { getAllProductsService, getProductService } from "../../services/other/ProductService.jsx";
export const fetchAllProductsAction = (data, headers) => {
  return getAllProductsService(data, headers);
};
export const fetchProductAction = (id , data , headers) => {
  return getProductService(id , data , headers);
}
