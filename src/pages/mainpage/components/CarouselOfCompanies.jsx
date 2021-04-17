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
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col">
                  <AvatarImage alt="Amazon" image={amazon} />
                  <p className="name">Amazon</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Ebay" image={ebay} />
                  <p className="name">Ebay</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Virgin Megastore" image={virgin} />
                  <p className="name">Virgin Megastore</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Huawei" image={huawei} />
                  <p className="name">Huawei</p>
                </div>
                <div className="col">
                  <AvatarImage alt="IKEA" image={ikea} />
                  <p className="name">IKEA</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Xcite" image={xcite} />
                  <p className="name">Xcite</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col">
                  <AvatarImage alt="Amazon" image={amazon} />
                  <p className="name">Amazon</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Ebay" image={ebay} />
                  <p className="name">Ebay</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Virgin Megastore" image={virgin} />
                  <p className="name">Virgin Megastore</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Huawei" image={huawei} />
                  <p className="name">Huawei</p>
                </div>
                <div className="col">
                  <AvatarImage alt="IKEA" image={ikea} />
                  <p className="name">IKEA</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Xcite" image={xcite} />
                  <p className="name">Xcite</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={white} class="d-block w-100" alt="..." />
            <div className="container-for-companies">
              <div className="row">
                <div className="col">
                  <AvatarImage alt="Amazon" image={amazon} />
                  <p className="name">Amazon</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Ebay" image={ebay} />
                  <p className="name">Ebay</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Virgin Megastore" image={virgin} />
                  <p className="name">Virgin Megastore</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Huawei" image={huawei} />
                  <p className="name">Huawei</p>
                </div>
                <div className="col">
                  <AvatarImage alt="IKEA" image={ikea} />
                  <p className="name">IKEA</p>
                </div>
                <div className="col">
                  <AvatarImage alt="Xcite" image={xcite} />
                  <p className="name">Xcite</p>
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
