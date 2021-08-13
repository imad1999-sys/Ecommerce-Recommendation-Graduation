import { deletePriceAlertServiceById, getUserPriceAlertService } from "../../services/other/PriceAlertService.jsx";
export const fetchAllPricingAlertForUserAction = (data, headers) => {
  return getUserPriceAlertService(data, headers);
};
export const deletePricingAlertForUserById = (data , headers) => {
    return deletePriceAlertServiceById(data , headers);
}
