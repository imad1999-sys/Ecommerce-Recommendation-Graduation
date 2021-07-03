import { Paper } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfLaptopCarousels from "./components/GridOfLaptopCarousels";

export default class LaptopCategoryPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <div className="laptop-carousels-section">
            <Paper elevation={10}>
              <GridOfLaptopCarousels />
            </Paper>
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    );
  }
}
