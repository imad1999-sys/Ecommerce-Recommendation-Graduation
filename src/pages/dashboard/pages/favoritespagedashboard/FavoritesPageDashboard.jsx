import React, { useEffect, useState } from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import BaseDashboardNavbar from "../../components/BaseDashboardNavbar";
import BaseTableDashboard from "./components/BaseTableDashboard";
import BaseFooter from "../../../../base/BaseFooter";
import { getUsersAction } from "../../../../API/actions/dashboardactions/DashboardActions";
import { headers } from "../../../../API/tokens/tokens";
import BaseCardDashboard from "../../components/BaseCardDashboard";
const FavoritesPageDashboard = () => {
  const[users , setUsers] = useState([]);
  const[count , setCount] = useState("");
  useEffect(() => {
    getUsersAction("", headers).then((response) => {
      console.log(response);
      setUsers(response.data.response);
      setCount(response.data.response.length);
    });
  }, []);
  return (
    <div>
      <div className="row">
        <BaseDashboardNavbar />
      </div>
      <div className="row">
        <BaseCardDashboard countTitle="عدد المستخدمين" count={count} />
      </div>
      <div className="row">
        <div className="table-section">
          <BaseTableDashboard users={users}/>
        </div>
      </div>
      <div className="row">
        <BaseFooter />
      </div>
    </div>
  );
};
export default FavoritesPageDashboard;
