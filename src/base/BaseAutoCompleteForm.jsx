import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import BaseButton from "./BaseButton";
import {
  autoCompleteAction,
  searchAction,
} from "../API/actions/searchactions/SearchActions";
import { headers } from "../API/tokens/tokens";
import { addLogAction } from "../API/actions/loggsactions/LoggsActions";
const BaseAutocompleteForm = (props) => {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState([]);
  const [catValue, setCatValue] = useState([]);
  const autoCompleteSearch = (key) => {
    autoCompleteAction(key, "", headers).then((response) => {
      console.log(response);
      setData(response.data.response.results);
      setSearchKey(key);
    });
    addLogAction(key, "", "autocomplete", headers);
  };
  const getValue = (name) => {
    console.log(name);
    setCatValue(name);
    console.log("CatValue " + catValue);
  };
  const search = () => {
    console.log(catValue + "     " + searchKey);
    searchAction(catValue, searchKey, headers).then((response) => {
      console.log(response);
      addLogAction(searchKey, "", "search", headers);
      window.location.href = "/category/" + catValue;
    });
  };
  return (
    <React.Fragment>
      <div className="auto-complete-form">
        <input
          type={props.type}
          id="search"
          list="datalistOptions"
          autoComplete="off"
          className="auto-form-input tajawal-15"
          placeholder=" "
          value={searchKey}
          onChange={(e) => autoCompleteSearch(e.target.value)}
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
      <div className="choices-section">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            اختر الصنف
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li value={props.mobiles}>
              <a class="dropdown-item" onClick={() => getValue(props.mobiles)}>
                {" "}
                {props.mobiles}
              </a>
            </li>
            <li value={props.accessoire}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.accessoire)}
              >
                {" "}
                {props.accessoire}
              </a>
            </li>
            <li value={props.apple}>
              <a class="dropdown-item" onClick={() => getValue(props.apple)}>
                {" "}
                {props.apple}
              </a>
            </li>
            <li value={props.computersAndLaptops}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.computersAndLaptops)}
              >
                {" "}
                {props.computersAndLaptops}
              </a>
            </li>
            <li value={props.coversAndCases}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.coversAndCases)}
              >
                {" "}
                {props.coversAndCases}
              </a>
            </li>
            <li value={props.blueToothAndHeadphones}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.blueToothAndHeadphones)}
              >
                {" "}
                {props.blueToothAndHeadphones}
              </a>
            </li>
            <li value={props.samsung}>
              <a class="dropdown-item" onClick={() => getValue(props.samsung)}>
                {" "}
                {props.samsung}
              </a>
            </li>
            <li value={props.xiaomi}>
              <a class="dropdown-item" onClick={() => getValue(props.xiaomi)}>
                {" "}
                {props.xiaomi}
              </a>
            </li>
            <li value={props.backCovers}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.backCovers)}
              >
                {" "}
                {props.backCovers}
              </a>
            </li>
            <li value={props.wirelessHeadsets}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.wirelessHeadsets)}
              >
                {" "}
                {props.wirelessHeadsets}
              </a>
            </li>
            <li value={props.chargersAndPowerBanks}>
              <a
                class="dropdown-item"
                onClick={() => getValue(props.chargersAndPowerBanks)}
              >
                {" "}
                {props.chargersAndPowerBanks}
              </a>
            </li>
            <li value={props.cables}>
              <a class="dropdown-item" onClick={() => getValue(props.cables)}>
                {" "}
                {props.cables}
              </a>
            </li>
            <li value={props.huawei}>
              <a class="dropdown-item" onClick={() => getValue(props.huawei)}>
                {" "}
                {props.huawei}
              </a>
            </li>
            <li value={props.all}>
              <a class="dropdown-item" onClick={() => getValue(props.all)}>
                {" "}
                كل الأصناف
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="go-section">
          <BaseButton text="بحث" onClick={search} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default BaseAutocompleteForm;
