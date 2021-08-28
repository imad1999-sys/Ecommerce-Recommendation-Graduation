import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";
import { DeleteIcon } from "../../../../../icons/icons";
import { headers } from "../../../../../API/tokens/tokens";
import { deleteUserByIdAction } from "../../../../../API/actions/dashboardactions/DashboardActions";

const BaseTableDashboard = (props) => {
  const deleteUser = (id) => {
    deleteUserByIdAction(id, headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert("تم حذف المستخدم بنجاح");
        window.location.href = "/users-dashboard";
      } else {
        alert("حدث خطأ أثناء عملية الحذف");
      }
    });
  };
  return (
    <div>
      <table class="table">
        <thead className="tajawal-25">
          <tr>
            <th scope="col">Action</th>
            <th scope="col">العنوان</th>
            <th scope="col">البلد</th>
            <th scope="col">البريد الالكتروني</th>
            <th scope="col">رقم الهاتف</th>
            <th scope="col">اسم المستخدم</th>
            <th scope="col">الرقم</th>
          </tr>
        </thead>
        <tbody className="tajawal-15">
          {props.users.map((user) => (
            <tr>
              <th scope="row">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm btn-delete-dashboard"
                  onClick={() => deleteUser(user.id)}
                >
                  حذف
                  <DeleteIcon />
                </button>
              </th>
              <th scope="row">{user.address}</th>
              <th scope="row">{user.country}</th>
              <th scope="row">{user.email}</th>
              <th scope="row">{user.phoneNumber}</th>
              <th scope="row">{user.username}</th>
              <th scope="row">{user.id}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
