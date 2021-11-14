import React from "react";
import "../../../assets/css/styles.css";

const ListOfUserInfo = (props) => {
  const logout = () => {
    localStorage.clear();
    console.log(localStorage);
    window.location.href="/login";
  }
  return (
    <div className="list-section">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          الاسم
          <span className="badge bg-light list-span rounded-pill">
            {props.username}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          البريد الالكتروني
          <span className="badge bg-light list-span rounded-pill">
            {props.email}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          رقم الهاتف
          <span className="badge bg-light list-span rounded-pill">
            {props.phoneNumber}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          البلد
          <span className="badge bg-light list-span rounded-pill">
            {props.country}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center tajawal-15">
          العنوان
          <span className="badge bg-light list-span rounded-pill">
            {props.address}
          </span>
        </li>
      </ul>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary tajawal-15" type="button" onClick={logout}>
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};
export default ListOfUserInfo;
