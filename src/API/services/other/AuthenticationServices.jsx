import { get, post } from "../../functions/BaseAxiosFunctions.jsx";
import {
  getUserInfoUrl,
  loginApiUrl,
  registerApiUrl,
} from "../../urls/ApiUrls";
  export const loginService = (data , headers) => {
    return post(loginApiUrl, data , headers);
  };
  export const registerService = (data , headers) => {
    return post(registerApiUrl, data , headers);
  };
  export const getUserInfoService = (data , headers) => {
    return get(getUserInfoUrl, data , headers);
  };
