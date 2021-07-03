import { Paper } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfAudioCarousels from "./components/GridOfAudioCarousels";

export default class AudioCategoryPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <div className="audio-carousels-section">
            <Paper elevation={10}>
              <GridOfAudioCarousels />
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
