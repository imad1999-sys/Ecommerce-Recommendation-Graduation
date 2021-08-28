import React, { useState, useEffect } from "react";
import BaseSpinner from "./BaseSpinner.jsx";
const BasePreloader = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        props.page
      )}
    </div>
  );
};
export default BasePreloader;
