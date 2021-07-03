import React from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import FloatingActionButton from "../../../base/BaseFloatingActionButton.jsx";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../icons/ArrowCircleRight.jsx";
import labtop from "../../../assets/images/laptop.jpg";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
const CarouselOfCompanies = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container-for-companies">
              <div className="row gx-5">
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-for-companies">
              <div className="row gx-5">
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-for-companies">
              <div className="row gx-5">
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
                <div className="col-sm">
                  <BaseCard
                    image={labtop}
                    name="laptop"
                    price="1500000"
                    link="/details"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <FloatingActionButton icon={<ArrowCircleLeft />} />
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <FloatingActionButton icon={<ArrowCircleRight />} />
        </button>
      </div>
    </div>
  );
};
export default CarouselOfCompanies;
