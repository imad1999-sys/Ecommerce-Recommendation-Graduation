import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import note8pro from "../../../assets/images/note8pro.jpg";
import note20ultra from "../../../assets/images/note20ultra.jpg";
import samsunga50 from "../../../assets/images/samsunga50.jpg";
import FloatingActionButton from "./FloatingActionButton.jsx";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../icons/ArrowCircleRight.jsx";
import PriceTag from "../../../icons/PriceTagIcon.jsx";
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
            <h5 className="carousel-title baloo-chettan-25">
              Redmi note 8 pro
            </h5>
            <p className="carousel-text baloo-20">
              Revolutionary Leica Quad X10 Hybrid Zoom
            </p>
            <a
              className="btn btn-success carousel-link baloo-15"
              href="#"
            >
              Compare Pricing <PriceTag />
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={note20ultra} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-25">
              Samsung Note 20 Ultra
            </h5>
            <p className="carousel-text baloo-20">
              More powerful , more faster and larger storage
            </p>
            <a
              className="btn btn-success carousel-link baloo-15"
              href="#"
            >
              Compare Pricing <PriceTag />
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={samsunga50} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-25">Samsung A50</h5>
            <p className="carousel-text baloo-20">
              Perfect design and supports finger print
            </p>
            <a
              className="btn btn-success carousel-link baloo-15"
              href="#"
            >
              Compare Pricing <PriceTag />
            </a>
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
