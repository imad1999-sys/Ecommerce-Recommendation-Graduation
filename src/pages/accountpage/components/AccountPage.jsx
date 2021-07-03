import React, { Component } from "react";
import BaseNavbar from "../../../base/BaseNavbar.jsx";
import BaseFooter from "../../../base/BaseFooter.jsx";
import AccountPageNavs from "./AccountPageNavs.jsx";
export default class AccountPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <div className="account-page-container">
            <AccountPageNavs />
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    );
  }
}
