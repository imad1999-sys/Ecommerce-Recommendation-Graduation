import {
  getUserInfoService,
  loginService,
  registerService,
} from "../../services/other/AuthenticationServices";
export const loginAction = (data, headers, route) => {
  return loginService(data, headers)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.response.token);
      if (response.status < 300) {
        alert("تم تسجيل الدخول بنجاح");
        window.location.href = route;
      } else {
        alert("حدث خطأ أثناء تسجيل الدخول");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const registerAction = (data, headers, route) => {
  return registerService(data, headers)
    .then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert("تم إنشاء الحساب بنجاح");
        // window.location.href = route;
      } else {
        alert("حدث خطأ أثناء عملية إنشاء الحساب");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getUserInfoAction = (data , headers) => {
  return getUserInfoService(data , headers);
};
