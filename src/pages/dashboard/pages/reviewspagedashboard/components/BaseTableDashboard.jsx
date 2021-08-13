import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";

const BaseTableDashboard = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">عدد المنتجات التي قام باضافتها الى المراجعة</th>
            <th scope="col">اسم المستخدم</th>
            <th scope="col">الرقم</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {" "}
              <button
                type="button"
                class="btn btn-outline-primary btn-sm btn-update-dashboard"
              >
                تعديل
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm btn-delete-dashboard"
              >
                حذف
              </button>
            </th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <button
                type="button"
                class="btn btn-outline-primary btn-sm btn-update-dashboard"
              >
                تعديل
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm btn-delete-dashboard"
              >
                حذف
              </button>
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
