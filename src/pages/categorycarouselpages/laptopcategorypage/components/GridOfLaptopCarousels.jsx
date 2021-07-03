import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import Computer from "../../../../assets/images/laptopcategoryimages/computer.jpg";
import Keyboard from "../../../../assets/images/laptopcategoryimages/keyboard.jpg";
import Laptop from "../../../../assets/images/laptopcategoryimages/laptop.jpg";
import Printer from "../../../../assets/images/laptopcategoryimages/printer.jpg";
import Routers from "../../../../assets/images/laptopcategoryimages/routers.jpg";
import Screen from "../../../../assets/images/laptopcategoryimages/screen.jpg";
import FloatingActionButton from "../../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../../icons/ArrowCircleRight.jsx";
import DetailsLink from "./DetailsLink.jsx";
const GridOfLaptopCarousels = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Computer} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">كمبيوتر كامل</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Keyboard} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">اكسسوارات</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Laptop} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">لابتوب</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Printer} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">طابعة</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Routers} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">راوترات</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={Screen} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">شاشات كمبيوتر</h5>
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

export default GridOfLaptopCarousels;
