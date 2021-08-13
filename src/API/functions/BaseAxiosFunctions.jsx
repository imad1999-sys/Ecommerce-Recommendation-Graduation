import axios from "axios";

export const get = async(url, queryParams , headers) => {
  return await axios.get(url, {params: queryParams, headers: headers}).then(res => {
      return res;
  }).catch(function (error) {
      // handle error
      console.log(error);
  });
}

export const patch  = async (url, data , headers) =>{
  return await axios.patch(url,data,{headers: headers}).then(res => {
      return res;
  }).catch(function (error) {
      return error;
  });
}
export const post = async (url, data , headers) => {
  return await axios.post(url, data, {headers: headers}).then(res => {
      return res;
  }).catch(error => {
      return error;
  });
}
export const del = async (url , headers) =>{
  return await axios.delete(url,{headers: headers}).then(res => {
      return res;
  }).catch(error => {
      return error;
  })
}
export const update = async(url, data , headers) => {
  return await axios.patch(url, data, {headers: headers}).then(res => {
      return res;
  }).catch(error => {
      return error;
  })
}