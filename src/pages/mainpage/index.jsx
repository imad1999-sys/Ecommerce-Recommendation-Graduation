import React, { Component } from "react";
import CarouselOfMainPage from "./components/CarouselOfMainPage.jsx";
import CarouselOfCompanies from "./components/CarouselOfCompanies.jsx";
import Paper from "@material-ui/core/Paper";
import "../../assets/css/styles.css";
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="carousels-section">
          <div className="row">
            <div class="col-sm-5">
              <Paper elevation={10}>
                <div className="stores-home-page">
                  <p className="title baloo-20">Stores in electronic home</p>
                  <a href="#" className="see-all-link baloo-20">
                    See All
                  </a>
                </div>
                <CarouselOfCompanies />
              </Paper>
            </div>
            <div class="col-sm-7">
              <Paper elevation={10}>
                <CarouselOfMainPage />
              </Paper>
            </div>
          </div>
          <div className="row g-0"></div>
        </div>
      </div>
    );
  }
}
