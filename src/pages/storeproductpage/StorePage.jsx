import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import StoresProductPage from "./index.jsx";
const StorePageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<StoresProductPage />} />
    </div>
  );
};
export default StorePageCompleted;
