import React, { Component, useEffect, useState } from "react";
import BaseDashboardNavbar from "../../components/BaseDashboardNavbar";
import BaseTableDashboard from "./components/BaseTableDashboard";
import "../../../../assets/css/styles.css";
import BaseFooter from "../../../../base/BaseFooter";
import { getAllStoresAction } from "../../../../API/actions/dashboardactions/DashboardActions";
import { headers } from "../../../../API/tokens/tokens";
import BaseCardDashboard from "../../components/BaseCardDashboard";
const MainPageDashboard = () => {
  const [stores, setStores] = useState([]);
  const [count , setCount] = useState("");
  const getStores = () => {
    getAllStoresAction("", headers).then((response) => {
      console.log(response.data.response);
      setStores(response.data.response);
      setCount(response.data.response.length);
    });
  };
  useEffect(() => {
    getStores();
  }, []);
  return (
    <div>
      <div className="row">
        <BaseDashboardNavbar />
      </div>
      <div className="row">
        <BaseCardDashboard countTitle="عدد المتاجر" count={count} />
      </div>
      <div className="row">
        <div className="table-section">
          <BaseTableDashboard stores={stores} />
        </div>
      </div>
      <div className="row">
        <BaseFooter />
      </div>
    </div>
  );
};
export default MainPageDashboard;
