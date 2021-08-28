import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import ProductDetails from "./components/DetailsPage.jsx";
const DetailsPageCompleted = () => {
  return (
    <div>
        <BasePreloader page={<ProductDetails />} />
    </div>
  );
};
export default DetailsPageCompleted;
