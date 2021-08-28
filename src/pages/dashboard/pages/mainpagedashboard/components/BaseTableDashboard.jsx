import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";
import { DeleteIcon, StopIcon } from "../../../../../icons/icons";
import {
  deleteStoreAction,
  freezeStoreAction,
} from "../../../../../API/actions/dashboardactions/DashboardActions";
import { headers } from "../../../../../API/tokens/tokens";

const BaseTableDashboard = (props) => {
  const freezeStore = (name) => {
    freezeStoreAction(name, "", headers).then((response) => {
      if (response.status < 300) {
        alert("تم تجميد المتجر بنجاح");
      } else {
        alert("حدث خطأ أثناء عملية التجميد");
      }
    });
  };
  const deleteStore = (name) => {
    deleteStoreAction(name, headers).then((response) => {
      if (response.status < 300) {
        alert("تم حذف المتجر بنجاح");
        window.location.href = "/dashboard";
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
            <th scope="col">عدد البضائع التابعة للمتجر</th>
            <th scope="col">اسم المتجر</th>
          </tr>
        </thead>
        <tbody className="tajawal-15">
          {props.stores.map((store) => (
            <tr>
              <th scope="row">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm btn-update-dashboard"
                  onClick={() => freezeStore(store.site_name)}
                >
                  تجميد
                  <StopIcon />
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm btn-delete-dashboard"
                  onClick={() => deleteStore(store.site_name)}
                >
                  حذف
                  <DeleteIcon />
                </button>
              </th>
              <th scope="row">{store.total}</th>
              <th scope="row">{store.site_name}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
