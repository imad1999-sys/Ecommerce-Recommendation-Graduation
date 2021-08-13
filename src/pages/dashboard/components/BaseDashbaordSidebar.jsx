import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { Link } from "react-router-dom";

const BaseDashboardSidebar = (props) => {
  return (
    <div>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        صفحات لوحة التحكم
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            الصفحات
          </h5>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group category-group">
            <li class="list-group-item options-section">
              <Link to="/reviews-dashboard" className="title">
                {props.reviewsDashboard}
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/alerts-dashboard" className="title">
                {props.alertsDashboard}
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/favorites-dashboard" className="title">
                {props.favoritesDashboard}
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/products-dashboard" className="title">
                {props.productsDashboard}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BaseDashboardSidebar;
