import React, { useEffect, useState } from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import BaseDashboardNavbar from "../../components/BaseDashboardNavbar";
import BaseTableDashboard from "./components/BaseTableDashboard";
import BaseFooter from "../../../../base/BaseFooter";
import BaseCardDashboard from "../../components/BaseCardDashboard";
import { headers } from "../../../../API/tokens/tokens";
import { getStatisticsService } from "../../../../API/services/other/DashboardServices";

const PriceAlertDashboard = () => {
  const [statistics, setStatistics] = useState([]);
  const [count , setCount] = useState("");
  const getStatistics = () => {
    getStatisticsService("", headers).then((response) => {
      console.log(response);
      setStatistics(response.data.response);
      setCount(response.data.response.length);
    });
  };
  useEffect(() => {
    getStatistics();
  }, []);
  return (
    <div>
      <div className="row">
        <BaseDashboardNavbar />
      </div>
      <div className="row">
        <BaseCardDashboard countTitle="عدد الاحصائيات" count={count} />
      </div>
      <div className="row">
        <div className="table-section">
          <BaseTableDashboard statistics={statistics}/>
        </div>
      </div>
      <div className="row">
          <BaseFooter />
      </div>
    </div>
  );
};
export default PriceAlertDashboard;
