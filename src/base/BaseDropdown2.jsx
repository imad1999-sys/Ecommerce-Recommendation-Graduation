import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import {
  searchByFilter,
  searchByLangAndSortService,
} from "../API/services/other/SearchService";
import { headers } from "../API/tokens/tokens";

const BaseDropDown2 = (props) => {
  let catName = props.name;
  const getValue = (name) => {
    console.log(name);
    console.log("filterValue " + name + catName);
    searchByFilter(catName, name, "", headers).then((res) => {
      console.log(res);
    });
    window.location.href="/category/" + catName + "/" + name;
  };
  return (
    <div className="dropdown-section">
      <div
        class="dropdown"
        style={{ paddingBlock: "10px", paddingLeft: "25px" }}
      >
        <a
          class="btn btn-secondary dropdown-toggle tajawal-15"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.title}
        </a>

        <ul class="dropdown-menu tajawal-15" aria-labelledby="dropdownMenuLink">
          <li value={props.firstValue}>
            <a class="dropdown-item" onClick={() => getValue(props.firstValue)}>
              {props.firstChoice}
            </a>
          </li>
          <li value={props.secondValue}>
            <a
              class="dropdown-item"
              onClick={() => getValue(props.secondValue)}
            >
              {props.secondChoice}
            </a>
          </li>
          <li value={props.thirdValue}>
            <a class="dropdown-item" onClick={() => getValue(props.thirdValue)}>
              {props.thirdChoice}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BaseDropDown2;
