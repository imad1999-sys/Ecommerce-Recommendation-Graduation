import {
  deleteStoreService,
  deleteUserByIdService,
  freezeStoreService,
  getAllStoresService,
  getStatistics,
  getStatisticsService,
  getUsersService,
} from "../../services/other/DashboardServices.jsx";

export const getAllStoresAction = (data, headers) => {
  return getAllStoresService(data, headers);
};
export const freezeStoreAction = (name , data, headers) => {
  return freezeStoreService(name , data, headers);
};
export const deleteStoreAction = (name , headers) => {
  return deleteStoreService(name , headers);
};
export const getUsersAction = (data , headers) => {
    return getUsersService(data , headers);
}
export const deleteUserByIdAction = (id , data , headers) => {
    return deleteUserByIdService(id , data , headers);
}
export const getStatisticsAction = (data , headers) => {
  return getStatisticsService(data , headers);
}
