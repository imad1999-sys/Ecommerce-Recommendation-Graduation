import React, { Component } from "react";
import BaseDashboardNavbar from "../../components/BaseDashboardNavbar";
import GridOfCardsDashboard from "../../components/GridOfCardsDashboard";
import BaseTableDashboard from "./components/BaseTableDashboard";
import "../../../../assets/css/styles.css";
import BaseFooter from "../../../../base/BaseFooter";
export default class MainPageDashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseDashboardNavbar />
        </div>
        <div className="row">
          <div className="grid-of-card-dashboard">
            <GridOfCardsDashboard />
          </div>
        </div>
        <div className="row">
          <div className="table-section">
            <BaseTableDashboard />
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    );
  }
}
