import { Paper } from "@material-ui/core";
import React , {Component} from "react";
import BaseFooter from "../../../base/BaseFooter";
import BaseNavbar from "../../../base/BaseNavbar";
import GridOfMobileCarousels from "./components/GridOfMobileCarousels";

export default class MobileCategoryPage extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <BaseNavbar />
                </div>
                <div className="row">
                    <div className="mobile-carousels-section">
                        <Paper elevation={10}>
                            <GridOfMobileCarousels />
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