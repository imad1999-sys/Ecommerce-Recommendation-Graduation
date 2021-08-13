import { del, get, post } from "../../functions/BaseAxiosFunctions.jsx";
import {
  addPriceAlert,
  deletePriceAlertById,
  getAllPriceAlert,
  getPriceAlertForUser,
  sendPriceAlert,
} from "../../urls/ApiUrls.jsx";
export const getUserPriceAlertService = (data , headers) => {
  return get(getPriceAlertForUser , data , headers);
};
export const getAllPriceAlertsService = (data , headers) => {
  return get(getAllPriceAlert , data , headers);
};
export const addPriceAlertService = (data , headers) => {
  return post(addPriceAlert, data , headers);
};
export const deletePriceAlertServiceById = (id , headers) => {
  return del(deletePriceAlertById + id , headers);
};
export const endPriceAlertService = (data , headers) => {
  return get(sendPriceAlert , data , headers);
};
