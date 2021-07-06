import React from "react";
import BaseTitle from "../../../base/BaseTitle";
import BaseInput from "../../../base/BaseInput";
import BaseButton from "../../../base/BaseButton";
import AddCart from "../../../icons/AddCart";
import { Component } from "react";
export default class AddStoresPageDashboard extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="row">
          <BaseTitle title="إضافة متجر" />
        </div>
        <div className="row">
          <BaseInput type="text" label="اسم المتجر" />
        </div>
        <div className="row">
          <BaseInput type="text" label="صورة المتجر" />
        </div>
        <div className="row">
          <BaseButton icon={<AddCart />} text="اضافة متجر" link="/dashboard" />
        </div>
      </div>
    );
  }
}
