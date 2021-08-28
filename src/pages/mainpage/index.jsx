import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import MainPage from "./components/MainPage.jsx";
const MainPageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<MainPage />} />
    </div>
  );
};
export default MainPageCompleted;
