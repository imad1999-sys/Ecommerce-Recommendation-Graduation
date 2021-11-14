import {
  recommendService,
  searchAutoCompleteService,
  searchByCategoryService,
  searchByLangAndSortService,
  searchBySortService,
  searchService,
} from "../../services/other/SearchService";

export const autoCompleteAction = (data , queryParams, headers) => {
  return searchAutoCompleteService(data , queryParams, headers);
};
export const searchByCategoryAction = (data , queryParams, headers) => {
  return searchByCategoryService(data , queryParams, headers);
};
export const searchAction = (data , queryParams , headers) => {
  return searchService(data , queryParams , headers);
}
export const recommendAction = (id , data , headers) => {
  return recommendService(id , data , headers);
}