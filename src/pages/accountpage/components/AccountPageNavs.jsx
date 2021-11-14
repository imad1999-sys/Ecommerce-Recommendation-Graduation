import React from "react";
import AlertNav from "./AlertNav";
import FavoritesNav from "./FavoritesNav";
import ProfileNav from "./ProfileNav";
import ReviewsNav from "./ReviewsNav";
import { BellIcon, StarIcon, AccountIcon, PenIcon } from "../../../icons/icons";
import "../../../assets/css/fonts.css";
import "../../../assets/css/styles.css";
const AccountPageNavs = () => {
  return (
    <div>
      <ul className="nav nav-tabs tajawal-25" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
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
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ProfileNav />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ReviewsNav />
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <FavoritesNav />
        </div>
        <div
          className="tab-pane fade"
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
