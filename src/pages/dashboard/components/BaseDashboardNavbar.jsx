import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import BaseDashboardSidebar from "./BaseDashbaordSidebar";
import { SigninIcon } from "../../../icons/icons";

const BaseDashboardNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tajawal-15">
      <BaseDashboardSidebar
        storesDashboard="المتاجر"
        statisticsDashboard="الإحصائيات"
        usersDashboard="المستخدمين"
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
      </div>
    </nav>
  );
};
export default BaseDashboardNavbar;
