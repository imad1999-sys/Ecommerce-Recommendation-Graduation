import React from "react";
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
const AccountPageNavs = () => {
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
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
            id="fav-tab"
            data-bs-toggle="tab"
            data-bs-target="#fav"
            type="button"
            role="tab"
            aria-controls="fav"
            aria-selected="false"
          >
            <HistoryIcon />
            منتجات سابقة
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
          id="fav"
          role="tabpanel"
          aria-labelledby="fav-tab"
        >
          <PrevProductsNav />
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
