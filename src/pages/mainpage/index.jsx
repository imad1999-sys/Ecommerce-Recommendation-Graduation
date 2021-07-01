import React, { useState, useEffect } from "react";
import BaseSpinner from "../../base/BaseSpinner.jsx";
import MainPage from "./components/MainPage.jsx";
const MainPageCompleted = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <BaseSpinner
          color={"#2980b9"}
          loading={loading}
          size={100}
        />
      ) : (
        <MainPage />
      )}
    </div>
  );
};
export default MainPageCompleted;
