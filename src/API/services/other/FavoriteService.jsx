import { post , get , del} from "../../functions/BaseAxiosFunctions.jsx";
import { addFavoriteApiUrl, deleteFavoriteByIdApiUrl, getAllFavorites, getFavoritesForUserApiUrl } from "../../urls/ApiUrls.jsx";
  export const getUserFavoritesService = (data , headers) => {
    return get(getFavoritesForUserApiUrl , data , headers);
  };
  export const getAllFavoritesService = (data , headers) => {
    return get(getAllFavorites , data , headers);
  };
  export const addFavoriteService = (data , headers) => {
    return post(addFavoriteApiUrl, data , headers)
  };
  export const deleteFavoriteService = (id , headers) => {
    return del(deleteFavoriteByIdApiUrl + id , headers)
  };

