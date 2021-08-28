import { get } from "../../functions/BaseAxiosFunctions.jsx";
import { headers } from "../../tokens/tokens.jsx";
import {
  searchFirst,
  searchAutoComplete,
  searchSecond,
  searchByCategory,
  recommendUrl,
  searchThird,
} from "../../urls/ApiUrls.jsx";
export const searchService = (queryParams, data, headers) => {
  let searchUrl = searchFirst + queryParams + searchSecond + data;
  return get(searchUrl, queryParams, headers);
};
export const searchAutoCompleteService = (data, queryParams, headers) => {
  let autocomplete = searchAutoComplete + data;
  return get(autocomplete, queryParams, headers);
};
export const searchByCategoryService = (data, sort, queryParams, headers) => {
  let searchByCategoryUrl = searchByCategory + data;
  return get(searchByCategoryUrl, queryParams, headers);
};
export const searchByLanguage = (
  data,
  lang,
  queryParams,
  headers
) => {
  let sortAndLangUrl = "";
  if (lang === "ar") {
    sortAndLangUrl =
      searchByCategory + data + " AND language_s:ar AND site_name_s:noon";
  } else {
    sortAndLangUrl = searchByCategory + data;
  }
  return get(sortAndLangUrl, queryParams, headers);
};
export const searchByFilter = (data , filter , queryParams , headers) => {
  let filterUrl = "";
  if(filter === "date_dt"){
    filterUrl = searchByCategory + data + " &sort=date_dt desc";
  }
  else if(filter === "views_i"){
    filterUrl = searchByCategory + data + " &sort=views_i desc";
  }
  else if(filter === "sale_price_d"){
    filterUrl = searchByCategory + data + " &sort=sale_price_d desc";
  }
  return get(filterUrl, queryParams, headers);
}
export const searchBySort = (data , sort , queryParams , headers) => {
  let sortUrl = "";
  if(sort === "asc"){
    sortUrl =  searchByCategory + data + " &sort=date_dt asc";
  }
  else if(sort === "desc"){
    sortUrl =  searchByCategory + data + " &sort=date_dt desc";
  }
  return get(sortUrl, queryParams, headers);
}
export const recommendService = (id, data, headers) => {
  let recommedProdUrl = recommendUrl + id;
  return get(recommedProdUrl, data, headers);
};
