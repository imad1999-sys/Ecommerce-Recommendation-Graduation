import React from "react";
import "../../../../assets/css/styles.css";
import "../../../../assets/css/fonts.css";
import CameraEquipment from "../../../../assets/images/cameracategoryimages/cameraequipment.jpg";
import DigitalCamera from "../../../../assets/images/cameracategoryimages/digitalcamera.jpg";
import VideoCamera from "../../../../assets/images/cameracategoryimages/videocamera.jpg";
import FloatingActionButton from "../../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../../icons/ArrowCircleRight.jsx";
import DetailsLink from "./DetailsLink.jsx";
const GridOfCameraCarousels = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={CameraEquipment} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              اكسسوارات الكاميرات
            </h5>
            <DetailsLink link="/category"/>
          </div>
        </div>
        <div class="carousel-item">
          <img src={DigitalCamera} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              كاميرات رقمية
            </h5>
            <DetailsLink link="/category"/>
          </div>
        </div>
        <div class="carousel-item">
          <img src={VideoCamera} class="d-block w-100 image" alt="..." />
          <div className="container">
            <h5 className="carousel-title baloo-chettan-30">
              كاميرات فيديو
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

export default GridOfCameraCarousels;
