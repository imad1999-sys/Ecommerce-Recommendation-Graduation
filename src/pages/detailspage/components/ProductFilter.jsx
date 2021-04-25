import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
const productFilter = () =>{
    return (
      <div className="filter-section p-6">
        <div className="row">
          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle baloo-15"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Color
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    black
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    silver
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    red
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle baloo-15"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RAM
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    6 GB
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    8 GB
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    16 GB
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle baloo-15"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CPU
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    core i5 11th gen
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    core i7 10th gen
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    core i5 8th gen
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default productFilter;