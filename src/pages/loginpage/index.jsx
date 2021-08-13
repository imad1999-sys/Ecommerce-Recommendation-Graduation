import React, { useState, useEffect } from "react";
import AvatarImage from "./components/AvatarImage";
import SigninIcon from "../../icons/SigninIcon.jsx";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import PageTitle from "./components/PageTitle.jsx";
import RegisterLink from "./components/RegisterLink";
import { useHistory } from "react-router-dom";
import "../../assets/css/styles.css";
import { loginAction } from "../../API/actions/authenticationactions/AuthActions";
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
    let route = "/home";
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    loginAction(itemJson , headers , route);
  };
  const goToSignupPage = () => {
    window.location.href = "/signup";
  }
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
          <BaseButton
            icon={<SigninIcon />}
            text="تسجيل الدخول"
            link="/home"
            onClick={login}
          />
        </div>
        <div className="row">
          <RegisterLink onClick={goToSignupPage} />
        </div>
      </Paper>
    </div>
  );
};
export default LoginPage;
