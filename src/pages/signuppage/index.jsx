import React, { Component, useState, useEffect } from "react";
import AvatarImage from "./components/AvatarImage.jsx";
import SignupIcon from "../../icons/SignupIcon.jsx";
import Paper from "@material-ui/core/Paper";
import PageTitle from "./components/PageTitle.jsx";
import SubTitle from "./components/Subtitle.jsx";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import { registerApiUrl } from "../../API/urls/ApiUrls.jsx";
const SignupPage = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [address , setAddress] = useState("");
  const [country , setCountry] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const [errorEmail, setErrorEmail] = useState({});

  const formValidation = () => {
    const errorName = {};
    const errorPassword = {};
    const errorEmail = {};

    let isValid = true;

    if (!username) {
      errorName.nameEmpty = "The name is empty";
      isValid = false;
    }
    if (username && username.trim().length <= 3) {
      errorName.nameShort = "The name is too short";
      isValid = false;
    }

    if (!password) {
      errorPassword.passwordEmpty = "The password is empty";
      isValid = false;
    }
    if (password && password.trim().length <= 3) {
      errorPassword.passwordShort = "invalid password";
      isValid = false;
    }

    if (!email) {
      errorEmail.emailEmpty = "The email is empty";
      isValid = false;
    }
    if (email && !email.includes("@")) {
      errorEmail.emailValidation = "invalid email";
      isValid = false;
    }
    setErrorName(errorName);
    setErrorEmail(errorEmail);
    setErrorPassword(errorPassword);

    return isValid;
  };

  async function signup() {
    let item = { username, email, password , country , phoneNumber , address };
    console.warn(item);
    let result = await fetch(registerApiUrl, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const validate = formValidation();
    if (validate) {
      result = await result.json();
      console.warn(result);
    }
  }
  return (
    <div className="container">
      <Paper elevation={8}>
        <div className="row">
          <AvatarImage icon={<SignupIcon />} />
        </div>
        <div className="row">
          <PageTitle title="إنشاء حساب" />
        </div>
        <div className="row">
          <SubTitle subtitle="من أجل إنشاء حساب , قم بتعبئة الحقول" />
        </div>
        <div className="row">
          <BaseInput
            label="الإسم "
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="البريد الإلكتروني  "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="كلمة السر  "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="رقم الهاتف "
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="البلد"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseInput
            label="العنوان "
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="row">
          <BaseButton icon={<SignupIcon />} text="تسجيل" onClick={signup} />
        </div>
      </Paper>
    </div>
  );
};
export default SignupPage;
