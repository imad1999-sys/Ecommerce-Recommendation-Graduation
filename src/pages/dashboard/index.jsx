import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import MainPageDashboard from "./pages/mainpagedashboard/MainPageDashboard.jsx";
const PriceAlertDashboardCompleted = () => {
  return (
    <div>
        <BasePreloader page={<MainPageDashboard />} />
    </div>
  );
};
export default PriceAlertDashboardCompleted;
