import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import { categories } from "./BaseChoices";
import BaseButton from "./BaseButton";
import { headers } from "../API/tokens/tokens";
import { searchAction } from "../API/actions/searchactions/SearchActions";
import { searchFirst } from "../API/urls/ApiUrls";
import axios from "axios";
import { baseUrl } from "../API/base/BaseUrl";
const BaseFirstDropDown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("الكل");
  const [value, setValue] = useState("*");
  const func = (op) => {
    setSelected(op.name);
    setIsActive(false);
    console.log(op.value);
    setValue(op.value);
  };
  const searchWithoutCategory = async () =>{
    let url = baseUrl + "/api/search/?limit=200&q=" + props.searchValue;
    await axios.get(url, {headers: headers}).then(res => {
        return res;
    })
  }
  const search = () => {
    if (value === "*") {
      searchWithoutCategory().then((response) => {
        console.log("without");
        window.location.href = "/search/" + props.searchValue + "/" + value;
      });
    } else {
      searchAction(value, props.searchValue, headers).then((response) => {
        console.log("with");
        window.location.href = "/search/" + props.searchValue + "/" + value;
      });
    }
  };
  return (
    <div>
      <div className="dropdown tajawal-15">
        <div className="dropdown-btn">
          {selected}
          <i
            class="fas fa-chevron-circle-down dropdown-icon"
            onClick={(e) => setIsActive(!isActive)}
          />
        </div>

        {isActive && (
          <div className="dropdown-content">
            {categories.map((category) => (
              <div
                key={category.value}
                className="dropdown-item"
                onClick={(e) => func(category)}
              >
                {category.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="btn-search-section">
        <div className="button-section">
          <button
            onClick={search}
            className="btn btn-outline-light btn-link tajawal-15"
          >
            بحث
          </button>
        </div>
      </div>
    </div>
  );
};
export default BaseFirstDropDown;
