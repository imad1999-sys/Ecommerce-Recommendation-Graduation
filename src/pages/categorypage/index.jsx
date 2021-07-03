import React from "react";
import { Component } from "react";
import BaseNavbar from "../../base/BaseNavbar";
import BaseHorizontalCard from "../../base/BaseCardHorizontal";
import BaseFooter from "../../base/BaseFooter";
export default class CategroyPage extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <BaseNavbar />
                </div>
                <div className="row">
                    <BaseHorizontalCard />
                </div>
                <div className="row">
                    <BaseFooter />
                </div>
            </div>
        )
    }
}