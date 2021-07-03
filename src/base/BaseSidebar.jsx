import React from "react";
import "../assets/css/fonts.css";
import "../assets/css/styles.css";
import CategoryIcon from "../icons/CategoryIcon.jsx";
import LaptopIcon from "../icons/LaptopIcon.jsx";
import MobileIcon from "../icons/MobileIcon.jsx";
import CameraIcon from "../icons/CameraIcon.jsx";
import TVIcon from "../icons/TVIcon.jsx";
import VideoGameIcon from "../icons/VideoGameIcon.jsx";
import AudioIcon from "../icons/AudioIcon.jsx";
import { Link } from "react-router-dom";
const BaseSidebar = () => {
  return (
    <div>
      <a
        class="nav-link"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        أصناف المتجر <CategoryIcon />
      </a>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <CategoryIcon /> الاصناف
          </h5>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group category-group">
            <li class="list-group-item options-section">
              <Link to="/mobile" className="title">
                <MobileIcon />
                موبايلات و تابلت و ساعات ذكية
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/laptop" className="title">
                <LaptopIcon />
                لابتوب
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/camera" className="title">
                <CameraIcon />
                كاميرات
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/tv" className="title">
                <TVIcon />
                تلفزيون و فيديو
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/video" className="title">
                <VideoGameIcon />
                ألعاب و أجهزة فيديو
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/audio" className="title">
                <AudioIcon />
                الصوتيات
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BaseSidebar;
