import React, { Component } from "react";
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
                  <p className="title tajawal-15">المتاجر في البيت الإلكتروني</p>
                  <Link to="/stores" className="see-all-link tajawal-15">
                    شاهد كل المتاجر
                  </Link>
                </div>
                <CarouselOfCompanies />
              </Paper>
            </div>
          </div>
          <DividerAndTitleSection section="الأكثر مشاهدة" />
          <div className="row">
            <div className="carousel-of-cards">
              <Paper elevation={10}>
                <CarouselOfCards />
              </Paper>
            </div>
          </div>
          <DividerAndTitleSection section="المضافة حديثا" />
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
