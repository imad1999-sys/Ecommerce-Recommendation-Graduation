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
import BaseSlider from "../../../base/BaseSlider.jsx";
const CarouselOfCards = (props) => {
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  console.log(props.currentPage);
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
        className="bootstrap-multi"
        style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      >
        <div style={{ width: "115%"}}>
          <BaseSlider content = {props.products.map((product , index) => (
              <BaseCard
                key={index}
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
            ))} />
        </div>
      </div>
    </Container>
  );
};
export default CarouselOfCards;
