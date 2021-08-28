import React from "react";
import "../assets/css/fonts.css";
import "../assets/css/styles.css";
import { Link, useParams } from "react-router-dom";
import { ListIcon } from "../icons/icons";
const BaseSidebar = (props) => {
  const {
    mobiles,
    accessoire,
    apple,
    computersAndLaptops,
    coversAndCases,
    blueToothAndHeadphones,
    samsung,
    xiaomi,
    backCovers,
    wirelessHeadsets,
    chargersAndPowerBanks,
    cables,
    huawei,
  } = useParams();
  console.log(
    mobiles + accessoire + apple,
    computersAndLaptops +
      coversAndCases +
      blueToothAndHeadphones +
      samsung +
      xiaomi +
      backCovers +
      wirelessHeadsets + 
      chargersAndPowerBanks + 
      cables + 
      huawei
  );
  const goToCategoriesPage = (value) => {
    window.location.href = "/category/" + value
  }
  return (
    <div>
      <button
        class="btn btn-primary tajawal-25"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <ListIcon />
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title tajawal-25" id="offcanvasExampleLabel">
            الصفحات
          </h5>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group category-group tajawal-15">
            <li class="list-group-item options-section" >
              <a className="title" onClick={() => goToCategoriesPage(props.mobiles)}>
                {props.mobileIcon}
                {props.mobiles}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a className="title" onClick={() => goToCategoriesPage(props.accessoire)}>
                {props.accessoireIcon}
                {props.accessoire}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a className="title" onClick={() => goToCategoriesPage(props.apple)}>
                {props.appleIcon}
                {props.apple}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.computersAndLaptops)}
                className="title"
              >
                {props.computersAndLaptopsIcon}
                {props.computersAndLaptops}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a onClick={() => goToCategoriesPage(props.coversAndCases)} className="title">
                {props.coversAndCasesIcon}
                {props.coversAndCases}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.blueToothAndHeadphones)}
                className="title"
              >
                {props.blueToothAndHeadphonesIcon}
                {props.blueToothAndHeadphones}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a onClick={() => goToCategoriesPage(props.samsung)} className="title">
                {props.samsungIcon}
                {props.samsung}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a onClick={() => goToCategoriesPage(props.xiaomi)} className="title">
                {props.xiaomiIcon}
                {props.xiaomi}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a onClick={() => goToCategoriesPage(props.backCovers)} className="title">
                {props.backCoversIcon}
                {props.backCovers}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.wirelessHeadsets)}
                className="title"
              >
                {props.wirelessHeadsetsIcon}
                {props.wirelessHeadsets}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.chargersAndPowerBanks)}
                className="title"
              >
                {props.chargersAndPowerBanksIcon}
                {props.chargersAndPowerBanks}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.cables)}
                className="title"
              >
                {props.cablesIcon}
                {props.cables}
              </a>
            </li>
            <li class="list-group-item options-section">
              <a
                onClick={() => goToCategoriesPage(props.huawei)}
                className="title"
              >
                {props.huaweiIcon}
                {props.huawei}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BaseSidebar;
