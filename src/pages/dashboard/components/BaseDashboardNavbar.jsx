import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SigninIcon from "../../../icons/SigninIcon.jsx";
import BaseDashboardSidebar from "./BaseDashbaordSidebar";

const BaseDashboardNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tajawal-15">
      <BaseDashboardSidebar
        reviewsDashboard="المراجعات"
        alertsDashboard="التنبيهات"
        favoritesDashboard="المفضلات"
        productsDashboard="المنتجات"
      />
      <Link to="/home" class="navbar-brand" href="#">
        <img src={logo} alt="Electronic Home" />
      </Link>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll tajawal-20">
            <li class="nav-item">
              <Link
                type="button"
                class="nav-link"
                tabIndex="-1"
                aria-disabled="true"
                to="/account"
              >
                تسجيل الخروج
                <SigninIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default BaseDashboardNavbar;
