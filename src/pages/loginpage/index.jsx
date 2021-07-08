import React, { Component, useState, useEffect } from "react";
import AvatarImage from "./components/AvatarImage";
import SigninIcon from "../../icons/SigninIcon.jsx";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import PageTitle from "./components/PageTitle.jsx";
import RegisterLink from "./components/RegisterLink";
import { useHistory } from "react-router-dom";
import "../../assets/css/styles.css";
import BaseError from "../../base/BaseError";
import { loginApiUrl } from "../../API/urls/ApiUrls";
const LoginPage = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/home");
    }
  }, []);
  const formValidation = () => {
    const errorName = {};
    const errorPassword = {};

    let isValid = true;

    if (!username) {
      errorName.nameEmpty = "الاسم فارغ";
      isValid = false;
    }
    if (username && username.trim().length <= 2) {
      errorName.nameShort = "الاسم قصير جدا";
      isValid = false;
    }

    if (!password) {
      errorPassword.passwordEmpty = "كلمة المرور فارغ";
      isValid = false;
    }

    if (password && password.trim().length <= 4) {
      errorPassword.passwordShort = "كلمة المرور غير معروفة";
      isValid = false;
    }
    setErrorName(errorName);
    setErrorPassword(errorPassword);

    return isValid;
  };
  async function login() {
    console.warn(username, password);
    let item = { username, password };
    console.log(JSON.stringify(item));
    let result = await fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn(result);
    let token = result.token;
    console.warn(token);
    const validate = formValidation();
    if (validate) {
      localStorage.setItem("user-info", JSON.stringify(result));
      localStorage.setItem("token", token);
      history.push("/home");
    }
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
          <BaseError obj={errorName} />
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
          <BaseError obj={errorPassword} />
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
          <RegisterLink link="/signup" />
        </div>
      </Paper>
    </div>
  );
};
export default LoginPage;
