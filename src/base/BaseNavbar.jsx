import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  AccessoireIcon,
  PhoneIcon,
  AppleIcon,
  LaptopIcon,
  BriefCaseIcon,
  BlueToothIcon,
  WifiIcon,
  ChargerIcon,
  CableIcon,
  AccountIcon,
  HomeIcon,
} from "../icons/icons";
import BaseAutocompleteForm from "../base/BaseAutoCompleteForm.jsx";
import BaseSidebar from "./BaseSidebar.jsx";
const BaseNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tajawal-15">
      <div class="container-fluid">
        <BaseSidebar
          mobiles="جوالات"
          mobileIcon={<PhoneIcon />}
          accessoire="إكسسوارات"
          accessoireIcon={<AccessoireIcon />}
          apple="أبل"
          appleIcon={<AppleIcon />}
          computersAndLaptops="Computers & Laptops"
          computersAndLaptopsIcon={<LaptopIcon />}
          coversAndCases="Covers & Cases"
          coversAndCasesIcon={<BriefCaseIcon />}
          blueToothAndHeadphones="بلوتوث وسماعات"
          blueToothAndHeadphonesIcon={<BlueToothIcon />}
          samsung="سامسونج"
          samsungIcon={<PhoneIcon />}
          xiaomi="Xiaomi"
          xiaomiIcon={<PhoneIcon />}
          backCovers="Back Covers"
          backCoversIcon={<PhoneIcon />}
          wirelessHeadsets="Wireless Headsets"
          wirelessHeadsetsIcon={<WifiIcon />}
          chargersAndPowerBanks="Chargers & PowerBanks"
          chargersAndPowerBanksIcon={<ChargerIcon />}
          cables="Cables"
          cablesIcon={<CableIcon />}
          huawei="هواوي"
          huaweiIcon={<PhoneIcon />}
        />
        <Link to="/home" class="navbar-brand" href="#">
          <img src={logo} alt="Electronic Home" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll .tajawal-20">
            <li class="nav-item">
              <Link
                to="/home"
                type="button"
                class="nav-link"
                aria-current="page"
              >
                الصفحة الرئيسية <HomeIcon />
              </Link>
            </li>
            <li class="nav-item">
              <Link
                type="button"
                class="nav-link"
                to="/account"
              >
                اعدادات الحساب
                <AccountIcon />
              </Link>
            </li>
          </ul>
          <BaseAutocompleteForm
            type="text"
            label="ابحث ..."
            mobiles="جوالات"
            accessoire="إكسسوارات"
            apple="أبل"
            computersAndLaptops="Computers & Laptops"
            coversAndCases="Covers & Cases"
            blueToothAndHeadphones="بلوتوث وسماعات"
            samsung="سامسونج"
            xiaomi="Xiaomi"
            backCovers="Back Covers"
            wirelessHeadsets="Wireless Headsets"
            chargersAndPowerBanks="Chargers & PowerBanks"
            cables="Cables"
            huawei="هواوي"
            all="*"
          />
        </div>
      </div>
    </nav>
  );
};
export default BaseNavbar;
