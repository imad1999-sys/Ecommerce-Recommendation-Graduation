import React, { useState, useEffect } from "react";
import { getUserInfo } from "../../../API/urls/ApiUrls";
import AccountIcon from "../../../icons/AccountIcon";
import BellIcon from "../../../icons/BellIcon";
import HistoryIcon from "../../../icons/HistoryIcon";
import PenIcon from "../../../icons/PenIcon";
import StarIcon from "../../../icons/StarIcon";
import AlertNav from "./AlertNav";
import FavoritesNav from "./FavoritesNav";
import PrevProductsNav from "./PrevProductsNav";
import ProfileNav from "./ProfileNav";
import ReviewsNav from "./ReviewsNav";
import "../../../assets/css/fonts.css";
const AccountPageNavs = () => {
  return (
    <div>
      <ul class="nav nav-tabs tajawal-25" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            // onClick={getUserData}
          >
            <AccountIcon />
            الملف الشخصي
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <PenIcon />
            تقييماتي
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <StarIcon />
            قائمتي المفضلة
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="alert-tab"
            data-bs-toggle="tab"
            data-bs-target="#alert"
            type="button"
            role="tab"
            aria-controls="alert"
            aria-selected="false"
          >
            <BellIcon />
            تنبيهات الاسعار
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ProfileNav />
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ReviewsNav />
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <FavoritesNav />
        </div>
        <div
          class="tab-pane fade"
          id="alert"
          role="tabpanel"
          aria-labelledby="alert-tab"
        >
          <AlertNav />
        </div>
      </div>
    </div>
  );
};
export default AccountPageNavs;
