import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";

const BaseTableDashboard = () => {
  return (
    <div>
      <table class="table">
        <thead className="tajawal-25">
          <tr>
            <th scope="col">Action</th>
            <th scope="col">تاريخ الانضمام للنظام</th>
            <th scope="col">عدد البضائع التابعة للمتجر</th>
            <th scope="col">اسم المتجر</th>
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
            <td>Thornton</td>
            <td>@fat</td>
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
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
