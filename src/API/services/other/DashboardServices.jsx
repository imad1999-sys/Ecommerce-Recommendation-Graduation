import { del, get, put } from "../../functions/BaseAxiosFunctions"
import { deleteStoreUrl, deleteUserByIdUrl, freezeStoreUrl, freezeStoreUrl2, getStoresUrl, getUsersUrl, statisticsUrl } from "../../urls/ApiUrls"

export const getAllStoresService = (data , headers) => {
    return get(getStoresUrl , data , headers);
}
export const freezeStoreService = (name , data , headers) => {
    let finalFreezeStoreUrl = freezeStoreUrl + name + freezeStoreUrl2;
    return put(finalFreezeStoreUrl, data , headers);
}
export const deleteStoreService = (name , headers) => {
    return del(deleteStoreUrl + name , headers);
}
export const getUsersService = (data , headers) => {
    return get(getUsersUrl , data , headers);
}
export const deleteUserByIdService = (id , data , headers) => {
    return del(deleteUserByIdUrl + id , data , headers);
}
export const getStatisticsService = (data , headers) => {
    return get(statisticsUrl , data , headers);
}