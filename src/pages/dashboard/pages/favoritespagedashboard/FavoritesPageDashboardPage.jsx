import React, { useState, useEffect } from "react";
import BasePreloader from "../../../../base/BasePreloader.jsx";
import FavoritesPageDashboard from "./FavoritesPageDashboard.jsx";
const FavoritedDashboardCompleted = () => {
  return (
    <div>
        <BasePreloader page={<FavoritesPageDashboard />} />
    </div>
  );
};
export default FavoritedDashboardCompleted;
