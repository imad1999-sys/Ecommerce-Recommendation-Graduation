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
                اللون
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    أسود
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    فضي
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    أحمر
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
                ذاكرة الرام
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    6 غيغا
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    8 غيغا
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    16 غيغا
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
                المعالج
              </button>
              <ul
                class="dropdown-menu baloo-15"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    core i5 الجيل الحادي عشر
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    core i7 الجيل العاشر
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    core i5 الجيل الثامن
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