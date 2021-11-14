import React, { useState } from "react";
import AvatarImage from "./components/AvatarImage.jsx";
import Paper from "@material-ui/core/Paper";
import PageTitle from "./components/PageTitle.jsx";
import SubTitle from "./components/Subtitle.jsx";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import { SignupIcon } from "../../icons/icons.jsx";
import { headers } from "../../API/tokens/tokens.jsx";
import { registerService } from "../../API/services/other/AuthenticationServices.jsx";
const SignupPage = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const signup = () => {
    let dataJson = { username, email, password, country, phoneNumber, address };
    let itemJson = JSON.stringify(dataJson);
    registerService(itemJson, headers).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="auth-container">
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
          <div className="signup-button">
            <BaseButton icon={<SignupIcon />} text="تسجيل" onClick={signup} />
          </div>
        </div>
      </Paper>
    </div>
  );
};
export default SignupPage;
