import { deleteFavoriteService, getUserFavoritesService } from "../../services/other/FavoriteService.jsx";
export const fetchUserFavoritesAction = (data, headers) => {
  return getUserFavoritesService(data, headers);
};
export const deleteUserFavoriteById = (data , headers) => {
    return deleteFavoriteService(data , headers);
}
