import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import CategroyPage from "./index.jsx";
const CategoryPageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<CategroyPage />} />
    </div>
  );
};
export default CategoryPageCompleted;
