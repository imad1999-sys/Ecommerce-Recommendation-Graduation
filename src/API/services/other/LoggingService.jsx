import { post, get, del } from "../../functions/BaseAxiosFunctions.jsx";
import {
  deleteLogApiUrl,
  getAllLogsApiUrl,
  logApiUrl,
} from "../../urls/ApiUrls.jsx";
export const getUserLogService = (data, headers) => {
  return get(logApiUrl, data, headers);
};
export const getAllLogsService = (data, headers) => {
  return get(getAllLogsApiUrl, data, headers);
};
export const addLogService = (data, headers) => {
  return post(logApiUrl, data, headers);
};
export const deleteLogService = (id, headers) => {
  return del(deleteLogApiUrl + id, headers);
};
