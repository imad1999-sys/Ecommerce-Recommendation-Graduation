import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowCircleLeft, ArrowCircleRight } from "../icons/icons";
const BaseSlider = (props) => {
  const PreviousBtn = (props) => {
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
    <Slider
      prevArrow={<PreviousBtn />}
      nextArrow={<NextBtn />}
      slidesToShow={5}
      slidesToScroll={1}
      dots={false}
    >
      {props.content}
    </Slider>
  );
};
export default BaseSlider;
