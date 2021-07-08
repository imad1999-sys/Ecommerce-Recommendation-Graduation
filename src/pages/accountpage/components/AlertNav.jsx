import React, { useState, useEffect } from "react";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import Amazon from "../../../assets/images/amazon.png";
import { useHistory } from "react-router-dom";
import { deletePriceAlertById, getPriceAlertForUser } from "../../../API/urls/ApiUrls";
const AlertNav = () => {
  let result = localStorage.getItem("user-info");
  let resultJson = JSON.parse(result);
  console.log(resultJson.response.token);
  const [data, setData] = useState([]);
  const { history } = useHistory();
  async function getData() {
    let token = "Bearer " + resultJson.response.token;
    let result = await fetch(getPriceAlertForUser, {
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    setData(result.response.PriceAlerts);
    console.log(result.response.PriceAlerts);
  }
  async function deleteFavorite(id) {
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    let result = await fetch(deletePriceAlertById + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: t,
      },
    });
    getData();
  }

  useEffect(async () => {
    getData();
  }, []);

  return (
    <div className="alarm-container">
      <div className="row">
        {data.map((item) => (
          <div className="col p-4">
            <BaseCard
              image={item.image}
              title={item.title}
              price={item.price}
              salePrice={item.salePrice}
              views={item.views}
              isFav={true}
              linkText="حذف"
              onClick={() => deleteFavorite(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlertNav;
