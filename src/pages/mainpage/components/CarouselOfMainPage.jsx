import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import note8pro from "../../../assets/images/note8pro.jpg";
import note20ultra from "../../../assets/images/note20ultra.jpg";
import samsunga50 from "../../../assets/images/samsunga50.jpg";
import FloatingActionButton from "../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../icons/ArrowCircleRight.jsx";
import ComparingPricingLink from "./ComparingPricingLink.jsx";
const CarouselOfMainPage = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={note8pro} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              Redmi note 8 pro
            </h5>
            <p className="carousel-text baloo-20">
              x10 كامبرا لايكا رباعة ثورية تقريب هجين
            </p>
            <ComparingPricingLink />
          </div>
        </div>
        <div class="carousel-item">
          <img src={note20ultra} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              Samsung Note 20 Ultra
            </h5>
            <p className="carousel-text baloo-20">
              قوة أكبر , سرعة أكبر و سعة تخزين أكبر
            </p>
            <ComparingPricingLink />
          </div>
        </div>
        <div class="carousel-item">
          <img src={samsunga50} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">Samsung A50</h5>
            <p className="carousel-text baloo-20">تصميم جيد و يدعم بصمة اليد</p>
            <ComparingPricingLink />
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

export default CarouselOfMainPage;
