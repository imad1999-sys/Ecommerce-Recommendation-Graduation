import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import AudioAccessoires from "../../../../assets/images/audiocategoryimages/audioaccessoires.jpg";
import AudioPlayer from "../../../../assets/images/audiocategoryimages/audioplayer.jpg";
import FloatingActionButton from "../../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../../icons/ArrowCircleRight.jsx";
import DetailsLink from "./DetailsLink.jsx";
const GridOfAudioCarousels = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={AudioAccessoires} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              اكسسوارات الصوتيات
            </h5>
            <DetailsLink link="/category"/>
          </div>
        </div>
        <div class="carousel-item">
          <img src={AudioPlayer} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              مشغلات الصوت
            </h5>
            <DetailsLink link="/category"/>
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

export default GridOfAudioCarousels;
