import React, { Component } from "react";
import AvatarImage from "./AvatarImage.jsx";
import EditIcon from "../../../icons/EditIcon.jsx";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../../base/BaseInput.jsx";
import BaseButton from "../../../base/BaseButton.jsx";
import PageTitle from "./PageTitle.jsx";
import "../../../assets/css/styles.css";
export default class UpdateAccountPage extends Component {
  render() {
    return (
      <div className="container">
        <Paper elevation={8}>
          <div className="row">
            <AvatarImage icon={<EditIcon />} />
          </div>
          <div className="row">
            <PageTitle title="تعديل معلومات الحساب" />
          </div>
          <div className="row">
            <BaseInput label="اسم المستخدم  " type="text" />
          </div>
          <div className="row">
            <BaseInput label="كلمة المرور " type="password" />
          </div>
          <div className="row">
            <BaseButton icon={<EditIcon />} text="تعديل الحساب" link="/home" />
          </div>
        </Paper>
      </div>
    );
  }
}
