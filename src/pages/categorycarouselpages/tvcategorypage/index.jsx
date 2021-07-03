import { Paper } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfTVCarousels from "./components/GridOfTVCarousels";

export default class TVCategoryPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <div className="tv-carousels-section">
            <Paper elevation={10}>
              <GridOfTVCarousels />
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
