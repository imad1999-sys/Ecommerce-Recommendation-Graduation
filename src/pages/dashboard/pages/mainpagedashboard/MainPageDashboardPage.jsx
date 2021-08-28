import React, { useState, useEffect } from "react";
import BasePreloader from "../../../../base/BasePreloader.jsx";
import MainPageDashboard from "./MainPageDashboard.jsx";
const MainPageDashboardCompleted = () => {
  return (
    <div>
        <BasePreloader page={<MainPageDashboard />} />
    </div>
  );
};
export default MainPageDashboardCompleted;
