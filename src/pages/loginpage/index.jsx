import React, { useState, useEffect } from "react";
import AvatarImage from "./components/AvatarImage";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import PageTitle from "./components/PageTitle.jsx";
import RegisterLink from "./components/RegisterLink";
import { useHistory } from "react-router-dom";
import "../../assets/css/styles.css";
import { SigninIcon } from "../../icons/icons";
import { loginService } from "../../API/services/other/AuthenticationServices";
import { headersForLogin } from "../../API/tokens/tokens";
const LoginPage = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, []);
  const login = () => {
    let dataJson = { username, password };
    let itemJson = JSON.stringify(dataJson);
    loginService(itemJson, headersForLogin).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.response.token);
      if (response.status < 300) {
        alert("تم تسجيل الدخول بنجاح");
        window.location.href = "/home";
      } else {
        alert("حدث خطأ أثناء تسجيل الدخول");
      }
    });
  };
  const goToSignupPage = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="container">
      <Paper elevation={8}>
        <div className="row">
          <AvatarImage icon={<SigninIcon />} />
        </div>
        <div className="row">
          <PageTitle title="تسجيل الدخول" />
        </div>
        <div className="row">
          <BaseInput
            label="اسم المستخدم  "
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="كلمة المرور "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="login-button">
            <BaseButton
              icon={<SigninIcon />}
              text="تسجيل الدخول"
              link="/home"
              onClick={login}
            />
          </div>
        </div>
        <div className="row">
          <RegisterLink onClick={goToSignupPage} />
        </div>
      </Paper>
    </div>
  );
};
export default LoginPage;
