import { Paper } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfCameraCarousels from "./components/GridOfCameraCarousels";

export default class CameraCategoryPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <div className="camera-carousels-section">
            <Paper elevation={10}>
              <GridOfCameraCarousels />
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
