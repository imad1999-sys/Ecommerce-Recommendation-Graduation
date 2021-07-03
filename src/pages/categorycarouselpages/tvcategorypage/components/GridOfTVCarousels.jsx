import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import TVAccessoires from "../../../../assets/images/tvcategoryimages/accessoires.jpg";
import TVProjectors from "../../../../assets/images/tvcategoryimages/projectors.jpg";
import TVScreens from "../../../../assets/images/tvcategoryimages/tvscreens.jpg";
import FloatingActionButton from "../../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../../icons/ArrowCircleRight.jsx";
import DetailsLink from "./DetailsLink.jsx";
const GridOfTVCarousels = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={TVAccessoires} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">لوازم تلفاز</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={TVProjectors} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">شاشات عرض</h5>
            <DetailsLink link="/category" />
          </div>
        </div>
        <div class="carousel-item">
          <img src={TVScreens} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">شاشات تلفزيون</h5>
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

export default GridOfTVCarousels;
