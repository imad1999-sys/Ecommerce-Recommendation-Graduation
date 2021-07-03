import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import MobileAccessoires from "../../../../assets/images/mobilecategoryimages/accessoires.jpg";
import MobilePhones from "../../../../assets/images/mobilecategoryimages/mobilephones.jpg";
import Tablets from "../../../../assets/images/mobilecategoryimages/tablets.jpg";
import Wears from "../../../../assets/images/mobilecategoryimages/wears.jpg";
import FloatingActionButton from "../../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../../icons/ArrowCircleRight.jsx";
import DetailsLink from "./DetailsLink.jsx";
const GridOfMobileCarousels = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={MobileAccessoires} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">اكسسوارت الموبايل</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={MobilePhones} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">أجهزة الموبايل</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Tablets} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">الحواسيب اللوحية</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Wears} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">ساعات ذكية</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <FloatingActionButton icon={<ArrowCircleLeft />} />
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <FloatingActionButton icon={<ArrowCircleRight />} />
      </button>
    </div>
  );
};

export default GridOfMobileCarousels;
