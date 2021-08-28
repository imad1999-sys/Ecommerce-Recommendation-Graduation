import React from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import grandStores from "../../../assets/images/grand stores.png";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import {
  EyeIcon,
  PriceTagIcon,
  InfoIcon,
  ArrowCircleRight,
  ArrowCircleLeft,
} from "../../../icons/icons.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";
const CarouselOfRecentlyAdded = ({ products }) => {
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowCircleLeft />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowCircleRight />
      </div>
    );
  };
  return (
    <Container>
      <div
        className="BootstrapMulti"
        style={{ display: "flex", justifyContent: "center", marginTop: 2800 }}
      >
        <div style={{ width: "300%" }}>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToShow={5}
            slidesToScroll={1}
            dots={false}
          >
            {products.map((product) => (
              <BaseCard
                image={product.image}
                title={product.title}
                currency={product.currency}
                salePrice={product.salePrice}
                views={product.views}
                viewTag={<EyeIcon />}
                onClick={() => goToDetailsPage(product.id)}
                btnText="عرض التفاصيل"
                isFav={false}
                isAlert={false}
                icon={<InfoIcon />}
              />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};
export default CarouselOfRecentlyAdded;
