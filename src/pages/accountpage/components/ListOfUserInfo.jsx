import React from "react";
import "../../../assets/css/styles.css";

const ListOfUserInfo = (props) => {
  return (
    <div className="list-section">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          الاسم
          <span class="badge bg-primary rounded-pill">{props.username}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          البريد الالكتروني
          <span class="badge bg-primary rounded-pill">{props.email}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          رقم الهاتف
          <span class="badge bg-primary rounded-pill">{props.phoneNumber}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          البلد
          <span class="badge bg-primary rounded-pill">{props.country}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          العنوان
          <span class="badge bg-primary rounded-pill">{props.address}</span>
        </li>
      </ul>
    </div>
  );
};
export default ListOfUserInfo;
