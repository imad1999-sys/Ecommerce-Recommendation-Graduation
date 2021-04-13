import React, { Component } from "react";
import AvatarImage from "./components/AvatarImage";
import SigninIcon from "../../icons/SigninIcon.jsx";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../base/BaseInput.jsx";
import BaseButton from "../../base/BaseButton.jsx";
import PageTitle from "./components/PageTitle.jsx";
import RegisterLink from "./components/RegisterLink";
import "../../assets/css/styles.css";
export default class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <Paper elevation={8}>
          <div className="row">
            <AvatarImage icon={<SigninIcon />} />
          </div>
          <div className="row">
            <PageTitle title="Sign in" />
          </div>
          <div className="row">
            <BaseInput label="Username: " type="text" />
          </div>
          <div className="row">
            <BaseInput label="Password: " type="password" />
          </div>
          <div className="row">
            <BaseButton icon={<SigninIcon />} text="Sign in" link="/home" />
          </div>
          <div className="row">
            <RegisterLink link="/signup" />
          </div>
        </Paper>
      </div>
    );
  }
}
