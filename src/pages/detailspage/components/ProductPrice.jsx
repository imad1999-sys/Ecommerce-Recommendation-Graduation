import React, { useEffect } from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import HeartIcon from "../../../icons/HeartIcon.jsx";
import {
  addFavoriteApiUrl,
  addPriceAlert,
  logApiUrl,
} from "../../../API/urls/ApiUrls";
import BellIcon from "../../../icons/BellIcon";
const ProductPrice = (props) => {
  async function SetPriceAlert() {
    setLogForPricingAlert();
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const email = props.email;
    const price = props.salePrice;
    const productId = props.id;
    let item = { email, price, productId };
    console.log(item);
    let result = await fetch(addPriceAlert, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: t,
      },
    });
    result = await result.json();
    console.log(item);
    alert("تم إضافة التنبيه بنجاح");
  }
  async function setFavorites() {
    setLogForAddToFavorite();
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const productId = props.id;
    let item = { productId };
    console.log(item);
    let result = await fetch(addFavoriteApiUrl, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: t,
      },
    });
    result = await result.json();
    console.log(item);
    alert("تم الاضافى الى المفضلة بنجاح");
  }
  async function setLogForAddToFavorite() {
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const query = "";
    const action = "add_to_favorite";
    const productId = props.id;
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
  async function setLogForPricingAlert() {
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const query = "";
    const action = "price_alert";
    const productId = props.id;
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
    <div className="price-container">
      <p className="tajawal-25">السعر & تنبيهات الاسعار & المفضلة</p>
      <div className="row">
        <p className="tajawal-15 sale-price">
          السعر : {props.price} {props.currency}
        </p>
      </div>
      <div className="row">
        <p className="tajawal-15">
          سعر المبيع : {props.salePrice} {props.currency}
        </p>
      </div>
      <div className="row">
        {/* <div className="col-6">
          <ButtonModal email={props.email} id={props.id}/>
        </div> */}
        <div className="col-6">
          <button
            class="btn btn-outline-danger tajawal-25"
            onClick={SetPriceAlert}
          >
            <BellIcon />
            تنبيه الاسعار
          </button>
        </div>
        <div className="col-6">
          <button
            class="btn btn-outline-primary tajawal-25"
            onClick={setFavorites}
          >
            <HeartIcon />
            إضافة الى المفضلة
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPrice;
