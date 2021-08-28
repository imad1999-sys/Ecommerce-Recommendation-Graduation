import React from "react";
import "../../../../../assets/css/styles.css";
import "../../../../../assets/css/fonts.css";

const BaseTableDashboard = (props) => {
  return (
    <div>
      <table class="table">
        <thead className="tajawal-25">
          <tr>
            <th scope="col">CTR</th>
            <th scope="col">عدد المراجعات</th>
            <th scope="col">عدد التحويلات</th>
            <th scope="col">عدد المشاهدات</th>
            <th scope="col">اسم المتجر</th>
          </tr>
        </thead>
        <tbody className="tajawal-15">
            {props.statistics.map((user) => (
              <tr>
                <th scope="row">{user.ctr}</th>
                <th scope="row">{user.reviews}</th>
                <th scope="row">{user.visits}</th>
                <th scope="row">{user.views}</th>
                <th scope="row">{user.storeName}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default BaseTableDashboard;
