import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import { sortAction } from "../API/actions/searchactions/SearchActions";
import { headers } from "../API/tokens/tokens";
import {
  searchByLanguage,
  searchBySort,
  searchByFilter,
} from "../API/services/other/SearchService";
import { filtersList, languages, sortList } from "./BaseChoices";

const BaseDropDown = (props) => {
  let catName = props.name;
  const [isActive, setIsActive] = useState(false);
  const [selectedLang, setSelectedLang] = useState("اختر اللغة");
  const [selectedFilter, setSelectedFilter] = useState("اختر نوع الفلترة");
  const [selectedSort, setSelectedSort] = useState("اختر نوع الترتيب");
  const func = (op) => {
    setSelectedLang(op.name);
    setIsActive(false);
    console.log(op.value);
  };
  const getValue = (name) => {
    console.log(name);
    console.log("filterValue " + name + catName);
    searchBySort(catName, name, "", headers).then((res) => {
      console.log(res);
    });
    window.location.href = "/category/" + catName + "/" + name;
  };
  const searchByLang = (langValue) => {
    setSelectedLang(langValue.name);
    console.log(langValue.value);
    searchByLanguage(catName, langValue.value, "", headers).then((res) => {
      console.log(res);
    });
    window.location.href = "/category/" + catName + "/" + langValue.value;
  };
  const filter = (filterValue) => {
    setSelectedFilter(filterValue.name);
    console.log(filterValue.value);
    searchByFilter(catName, filterValue.value, "", headers).then((res) => {
      console.log(res);
    });
    window.location.href = "/category/" + catName + "/" + filterValue.value;
  };
  const sort = (sortValue) => {
    setSelectedSort(sortValue.name);
    console.log(sortValue.value);
    searchBySort(catName, sortValue.value, "", headers).then((res) => {
      console.log(res);
    });
    window.location.href = "/category/" + catName + "/" + sortValue.value;
  };
  return (
    <div>
      {props.isLang ? (
        <div className="dropdown tajawal-15">
          <div className="dropdown-btn">
            {selectedLang}
            <i
              class="fas fa-chevron-circle-down dropdown-icon"
              onClick={(e) => setIsActive(!isActive)}
            />
          </div>

          {isActive && (
            <div className="dropdown-content">
              {languages.map((lang) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => searchByLang(lang)}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      {props.isFilter ? (
        <div className="dropdown tajawal-15">
          <div className="dropdown-btn">
            {selectedFilter}
            <i
              class="fas fa-chevron-circle-down dropdown-icon"
              onClick={(e) => setIsActive(!isActive)}
            />
          </div>

          {isActive && (
            <div className="dropdown-content">
              {filtersList.map((filterchoice) => (
                <div className="dropdown-item" onClick={(e) => filter(filterchoice)}>
                  {filterchoice.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      {props.isSort ? (
        <div className="dropdown tajawal-15">
          <div className="dropdown-btn">
            {selectedSort}
            <i
              class="fas fa-chevron-circle-down dropdown-icon"
              onClick={(e) => setIsActive(!isActive)}
            />
          </div>

          {isActive && (
            <div className="dropdown-content">
              {sortList.map((sortchoice) => (
                <div className="dropdown-item" onClick={(e) => sort(sortchoice)}>
                  {sortchoice.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default BaseDropDown;
