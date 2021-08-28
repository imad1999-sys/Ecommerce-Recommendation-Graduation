import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import SortPage from "./index.jsx";
const SortPageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<SortPage />} />
    </div>
  );
};
export default SortPageCompleted;
