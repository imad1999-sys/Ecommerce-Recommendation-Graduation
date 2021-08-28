import React from "react";
import AvatarImage from "./AvatarImage.jsx";
import axiomTelecom from "../../../assets/images/axiom-telecom.png";
import gadgetBy from "../../../assets/images/gadgetby.jfif";
import godukkan from "../../../assets/images/godukkan.jfif";
import grandStores from "../../../assets/images/grand stores.png";
import noon from "../../../assets/images/noon.png";
import FloatingActionButton from "../../../base/BaseFloatingActionButton.jsx";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { ArrowCircleLeft, ArrowCircleRight } from "../../../icons/icons.jsx";
import { Link } from "react-router-dom";
const CarouselOfCompanies = () => {
  const firstStore = "noon";
  const secondStore = "اكسيوم تيليكوم";
  const thirdStore = "جادجت باي";
  const fourthStore = "godukkan";
  const fifthStore = "المحلات الكبرى";
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
                  <AvatarImage image={noon} alt="noon" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/store/" + firstStore}
                      className="link-name tajawal-15"
                    >
                      {firstStore}
                    </Link>
                  </p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={axiomTelecom} alt="axiomTelecom" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/store/" + secondStore}
                      className="link-name tajawal-15"
                    >
                      {secondStore}
                    </Link>
                  </p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={gadgetBy} alt="gadgetBy" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/store/" + thirdStore}
                      className="link-name tajawal-15"
                    >
                      {thirdStore}
                    </Link>
                  </p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={godukkan} alt="godukkan" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/store/" + fourthStore}
                      className="link-name tajawal-15"
                    >
                      {fourthStore}
                    </Link>
                  </p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={grandStores} alt="Grand Stores" />
                  <p className="name baloo-20 tajawal-15">
                    {" "}
                    <Link
                      to={"/store/" + fifthStore}
                      className="link-name tajawal-15"
                    >
                      {fifthStore}
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
export default CarouselOfCompanies;
