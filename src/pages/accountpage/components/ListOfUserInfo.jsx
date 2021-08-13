import React from "react";
import "../../../assets/css/styles.css";

const ListOfUserInfo = (props) => {
  return (
    <div className="list-section">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          الاسم
          <span class="badge bg-light list-span rounded-pill">{props.username}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          البريد الالكتروني
          <span class="badge bg-light list-span rounded-pill">{props.email}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          رقم الهاتف
          <span class="badge bg-light list-span rounded-pill">{props.phoneNumber}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          البلد
          <span class="badge bg-light list-span rounded-pill">{props.country}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          العنوان
          <span class="badge bg-light list-span rounded-pill">{props.address}</span>
        </li>
      </ul>
    </div>
  );
};
export default ListOfUserInfo;
