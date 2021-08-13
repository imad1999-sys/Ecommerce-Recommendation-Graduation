import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import BaseDashboardNavbar from "../../components/BaseDashboardNavbar";
import BaseCardDashboard from "../../components/BaseCardDashboard";
import BaseTableDashboard from "./components/BaseTableDashboard";
import BaseFooter from "../../../../base/BaseFooter";
const PriceAlertDashboard = () => {
  return (
    <div>
      <div className="row">
        <BaseDashboardNavbar />
      </div>
      <div className="row">
        <div className="grid-of-cards-dashboard">
          <BaseCardDashboard title="المراجعات" subTitle="20" />
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
};
export default PriceAlertDashboard;
