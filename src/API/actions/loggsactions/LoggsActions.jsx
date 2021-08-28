import { addLogService } from "../../services/other/LoggingService"
export const addLogAction = (query , id , message , headers) => {
    let action = message;
    let productId = id;
    let data = {productId , action , query};
    return addLogService(data , headers);
}