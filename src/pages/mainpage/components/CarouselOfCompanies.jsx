import React from "react";
import white from "../../../assets/images/white.jpg";
import AvatarImage from "./AvatarImage.jsx";
import amazon from "../../../assets/images/amazon.png";
import ebay from "../../../assets/images/ebay.png";
import huawei from "../../../assets/images/huawei.png";
import ikea from "../../../assets/images/ikea.png";
import virgin from "../../../assets/images/virgin.png";
import xcite from "../../../assets/images/xcite.png";
import FloatingActionButton from "./FloatingActionButton.jsx";
import ArrowCircleLeft from "../../../icons/ArrowCircleLeft.jsx";
import ArrowCircleRight from "../../../icons/ArrowCircleRight.jsx";
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
                  <AvatarImage image={amazon} alt="Amazon" />
                  <p className="name baloo-20">Amazon</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={virgin} alt="Virgin Megastore" />
                  <p className="name baloo-20">Virgin Megastore</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={virgin} alt="Virgin Megastore" />
                  <p className="name baloo-20">Virgin Megastore</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={virgin} alt="Virgin Megastore" />
                  <p className="name baloo-20">Virgin Megastore</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-for-companies">
              <div className="row gx-5">
                <div className="col-sm">
                  <AvatarImage image={ikea} alt="ikea" />
                  <p className="name baloo-20">IKEA</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={xcite} alt="Xcite" />
                  <p className="name baloo-20">Xcite</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-for-companies">
              <div className="row gx-5">
                <div className="col-sm">
                  <AvatarImage image={ikea} alt="ikea" />
                  <p className="name baloo-20">IKEA</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={xcite} alt="Xcite" />
                  <p className="name baloo-20">Xcite</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
                </div>
                <div className="col-sm">
                  <AvatarImage image={ebay} alt="Ebay" />
                  <p className="name baloo-20">Ebay</p>
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
