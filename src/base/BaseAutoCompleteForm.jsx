import React, { useState } from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const BaseAutocompleteForm = () => {
  const [data, setData] = useState([]);
  const search = async (key) => {
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    setData(result);
    console.warn(result);
  };
  return (
    <form class="d-flex form">
      <div className="form-div">
        <input
          class="form-input me-2 baloo-20"
          list="datalistOptions"
          id="exampleDataList"
          onChange={(e) => search(e.target.value)}
        />
        <label className="form-label">
          Search
        </label>
        <datalist className=" list-auto" id="datalistOptions">
          {data.map((key) => (
            <option value={key.name} />
          ))}
        </datalist>
      </div>
    </form>
  );
};
export default BaseAutocompleteForm;
