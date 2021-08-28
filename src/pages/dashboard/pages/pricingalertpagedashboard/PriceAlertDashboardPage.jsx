import React, { useState, useEffect } from "react";
import BasePreloader from "../../../../base/BasePreloader.jsx";
import PriceAlertDashboard from "./PriceAlertDashboard.jsx";
const PriceAlertDashboardCompleted = () => {
  return (
    <div>
        <BasePreloader page={<PriceAlertDashboard />} />
    </div>
  );
};
export default PriceAlertDashboardCompleted;
