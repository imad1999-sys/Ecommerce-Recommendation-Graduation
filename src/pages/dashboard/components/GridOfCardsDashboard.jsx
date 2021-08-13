import React from "react";
import "../../../assets/css/styles.css";
import BaseCardDashboard from "./BaseCardDashboard";

const GridOfCardsDashboard = () => {
  return (
    <div className="row">
      <div className="col">
        <BaseCardDashboard title="المراجعات" subTitle="20" />
      </div>
      <div className="col">
        <BaseCardDashboard title="تنبيهات الأسعار" subTitle="100" />
      </div>
      <div className="col">
        <BaseCardDashboard title="المفضلات" subTitle="13" />
      </div>
      <div className="col">
        <BaseCardDashboard title="المنتجات" subTitle="145" />
      </div>
    </div>
  );
};
export default GridOfCardsDashboard;
