import React, { useState, useEffect } from "react";
import BaseSpinner from "../../base/BaseSpinner.jsx";
import UpdateAccountInfo from "./components/UpdateAccountInfoPage.jsx";
const UpdateAccountInfoCompleted = () => {
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
        <BaseSpinner color={"#2980b9"} loading={loading} size={100} />
      ) : (
        <UpdateAccountInfo />
      )}
    </div>
  );
};
export default UpdateAccountInfoCompleted;
