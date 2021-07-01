import React, { useState, useEffect } from "react";
import BaseSpinner from "../../base/BaseSpinner.jsx";
import DetailsPage from "./components/DetailsPage.jsx";
const DetailsPageCompleted = () => {
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
        <DetailsPage />
      )}
    </div>
  );
};
export default DetailsPageCompleted;
