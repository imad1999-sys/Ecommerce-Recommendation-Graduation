import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import { logApiUrl, searchAutoComplete } from "../API/urls/ApiUrls";
import BaseButton from "./BaseButton";
const BaseAutocompleteForm = (props) => {
  const [data, setData] = useState([]);
  const [valueOfSearch, setValueOfSearch] = useState("");
  async function autoComplete(key) {
    let result = localStorage.getItem("user-info");
    let resultJson = JSON.parse(result);
    let token = "Bearer " + resultJson.response.token;
    let data = await fetch(searchAutoComplete + key, {
      headers: {
        Authorization: token,
      },
    });
    data = await data.json();
    setData(data.response.results);
    setValueOfSearch(key);
    console.log(data.response.results);
    logForAutoComplete(key);
  }
  async function search() {
    console.log(valueOfSearch);
  }
  async function logForAutoComplete(key) {
    let token = localStorage.getItem("user-info");
    let tokenJson = JSON.parse(token);
    let t = "Bearer " + tokenJson.response.token;
    console.log(tokenJson.response.token);
    const query = key;
    const action = "autocomplete";
    const productId = "";
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
    <>
      <div className="auto-complete-form">
        <input
          type={props.type}
          id="search"
          list="datalistOptions"
          autoComplete="off"
          className="auto-form-input tajawal-15"
          placeholder=" "
          value={valueOfSearch}
          onChange={(e) => autoComplete(e.target.value)}
        />
        <datalist id="datalistOptions">
          {data.map((item) => (
            <option value={item.title} />
          ))}
        </datalist>
        ; ;
        <label className="auto-form-label tajawal-15" for="search">
          {props.label}
        </label>
      </div>
      <div className="row mt-2">
        <BaseButton text="بحث" onClick={search} />
      </div>
    </>
  );
};
export default BaseAutocompleteForm;
