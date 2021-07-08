import React, { useEffect, useState } from "react";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import Amazon from "../../../assets/images/amazon.png";
import {
  deleteFavoriteByIdApiUrl,
  getFavoritesForUserApiUrl,
  logApiUrl,
} from "../../../API/urls/ApiUrls";
import { useHistory } from "react-router-dom";
const FavoritesNav = () => {
  let result = localStorage.getItem("user-info");
  let resultJson = JSON.parse(result);
  console.log(resultJson.response.token);
  const [data, setData] = useState([]);
  const { history } = useHistory();
  async function getData() {
    let token = "Bearer " + resultJson.response.token;
    let result = await fetch(getFavoritesForUserApiUrl, {
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    setData(result.response.favorites);
    console.log(result.response.favorites);
  }
  useEffect(async () => {
    getData();
  }, []);
  async function deleteFavorite(id) {
    setLogForDeleteFavorite(id);
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    let result = await fetch(deleteFavoriteByIdApiUrl + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: t,
      },
    });
    getData();
  }
  async function setLogForDeleteFavorite(id) {
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const query = "";
    const action = "delete_from_favorite";
    const productId = id;
    let item = { query, action, productId };
    console.log(item);
    let result = await fetch(logApiUrl, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: t,
      },
    });
    result = await result.json();
    console.log(result);
  }
  return (
    <div className="favorites-container">
      <div className="row">
        {data.map((item) => (
          <div className="col p-4">
            <BaseCard
              image={item.product.image}
              title={item.product.title}
              price={item.product.price}
              salePrice={item.product.salePrice}
              views={item.product.views}
              isFav={true}
              linkText="حذف"
              onClick={() => deleteFavorite(item.favoriteId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FavoritesNav;
