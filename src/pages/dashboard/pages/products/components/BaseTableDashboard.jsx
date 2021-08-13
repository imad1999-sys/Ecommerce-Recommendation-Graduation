import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";

const BaseTableDashboard = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr className="tajawal-25">
            <th scope="col">Action</th>
            <th scope="col">اسم المتجر التابع لها</th>
            <th scope="col">سعر المنتج</th>
            <th scope="col">اسم المنتج</th>
            <th scope="col">الرقم</th>
          </tr>
        </thead>
        <tbody className="tajawal-15">
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
            <td>@mdo</td>
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
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
