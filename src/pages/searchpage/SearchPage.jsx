import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import SearchPage from "./index.jsx";
const SearchPageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<SearchPage />} />
    </div>
  );
};
export default SearchPageCompleted;
