import React, { Component } from "react";
import AvatarImage from "./components/AvatarImage.jsx";
import SignupIcon from "../../icons/SignupIcon.jsx";
import Paper from "@material-ui/core/Paper";
import PageTitle from "./components/PageTitle.jsx";
import SubTitle from "./components/Subtitle.jsx";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
export default class SignupPage extends Component {
  render() {
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
            <BaseInput label="الإسم :" type="text" />
          </div>
          <div className="row">
            <BaseInput label="البريد الإلكتروني : " type="email" />
          </div>
          <div className="row">
            <BaseInput label="كلمة السر : " type="password" />
          </div>
          <div className="row">
            <BaseInput label="تأكيد كلمة السر :" type="password" />
          </div>
          <div className="row">
            <BaseButton icon={<SignupIcon />} text="تسجيل" link="/home" />
          </div>
        </Paper>
      </div>
    );
  }
}
