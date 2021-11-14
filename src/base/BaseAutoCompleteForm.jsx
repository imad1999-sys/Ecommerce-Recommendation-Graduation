import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import BaseButton from "./BaseButton";
import {
  autoCompleteAction,
  searchAction,
} from "../API/actions/searchactions/SearchActions";
import { headers } from "../API/tokens/tokens";
import BaseFirstDropDown from "./BaseFirstDropDown";
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
  };
  const getValue = (name) => {
    setCatValue(name);
    console.log("CatValue " + catValue);
  };
  const print = (id) => {
    window.location.href = "/details/" + id;
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
            <option value={item.title.slice(0,40)} />
          ))}
        </datalist>
        ; ;
        <label className="auto-form-label tajawal-15" for="search">
          {props.label}
        </label>
      </div>
      <div>
        <BaseFirstDropDown searchValue={searchKey} />
      </div>
    </React.Fragment>
  );
};
export default BaseAutocompleteForm;
