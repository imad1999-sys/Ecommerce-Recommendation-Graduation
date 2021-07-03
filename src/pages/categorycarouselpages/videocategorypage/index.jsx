import { Paper } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import "../../../assets/css/styles.css";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfVideoCarousels from "./components/GridOfVideoCarousels";

export default class VideoCategoryPage extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <BaseNavbar />
                </div>
                <div className="row">
                    <div className="video-category-section">
                        <Paper elevation={10}>
                            <GridOfVideoCarousels />
                        </Paper>
                    </div>
                </div>
                <div className="row">
                    <BaseFooter />
                </div>
            </div>
        )
    }
}