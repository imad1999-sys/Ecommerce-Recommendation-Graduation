import React from "react";
import AvatarImage from "./AvatarImage.jsx";
import headphones from "../../../assets/images/headphones.jfif";
import laptop from "../../../assets/images/laptop.jpg";
import note8pro from "../../../assets/images/note8pro.jpg";
import FloatingActionButton from "../../../base/BaseFloatingActionButton.jsx";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { ArrowCircleLeft, ArrowCircleRight } from "../../../icons/icons.jsx";
import { Link } from "react-router-dom";
const CarouselOfMostPopulared = () => {
  const firstCategory = "جوالات";
  const secondCategory = "إكسسوارات";
  const thirdCategory = "Computers & Laptops";
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
                <div className="col-4">
                  <AvatarImage image={laptop} alt="gadgetBy" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/category/" + thirdCategory}
                      className="link-name tajawal-15"
                    >
                      {thirdCategory}
                    </Link>
                  </p>
                </div>
                <div className="col-4">
                  <AvatarImage image={headphones} alt="axiomTelecom" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/category/" + secondCategory}
                      className="link-name tajawal-15"
                    >
                      {secondCategory}
                    </Link>
                  </p>
                </div>
                <div className="col-4">
                  <AvatarImage image={note8pro} alt="noon" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/category/" + firstCategory}
                      className="link-name tajawal-15"
                    >
                      {firstCategory}
                    </Link>
                  </p>
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
export default CarouselOfMostPopulared;
