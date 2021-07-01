import React, { Component } from "react";
import CarouselOfMainPage from "./CarouselOfMainPage.jsx";
import CarouselOfCompanies from "./CarouselOfCompanies.jsx";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "../../../assets/css/styles.css";
import BaseNavbar from "../../../base/BaseNavbar.jsx";
import BaseFooter from "../../../base/BaseFooter.jsx";
import CarouselOfCards from "./CarouselOfCards.jsx";
import DividerAndTitleSection from "./DividerAndTitleSection.jsx";
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="carousels-section">
          <div className="row">
            <div className="carousel-of-companies-section">
              <Paper elevation={10}>
                <div className="stores-home-page">
                  <p className="title baloo-20">المتاجر في البيت الإلكتروني</p>
                  <Link to="/stores" className="see-all-link baloo-20">
                    شاهد كل المتاجر
                  </Link>
                </div>
                <CarouselOfCompanies />
              </Paper>
            </div>
          </div>
          <div className="row">
            <div className="carousel-of-main-page-section">
              <Paper elevation={10}>
                <CarouselOfMainPage />
              </Paper>
            </div>
          </div>
          <DividerAndTitleSection section="الأكثر تصنيفا" />
          <div className="row">
            <div className="carousel-of-cards">
              <Paper elevation={10}>
                <CarouselOfCards />
              </Paper>
            </div>
          </div>
          <div className="row">
            <BaseFooter />
          </div>
        </div>
      </div>
    );
  }
}
