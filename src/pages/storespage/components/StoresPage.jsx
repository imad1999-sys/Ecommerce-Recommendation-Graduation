import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import PageTitle from "../components/PageTitle.jsx";
import GridOfStores from "../components/GridOfStores.jsx";
import Paper from "@material-ui/core/Paper";
import BaseNavbar from "../../../base/BaseNavbar";
import BaseFooter from "../../../base/BaseFooter";
export default class StoresPage extends Component {
  render() {
    return (
      <>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="stores-container">
          <Paper elevation={5}>
            <div className="row">
              <PageTitle />
            </div>
            <div className="row">
              <SearchBar
                label="... ابحث "
                icon={<i class="fas fa-search" />}
              />
            </div>
            <div className="row">
              <GridOfStores />
            </div>
            <div className="row">
              <BaseFooter />
            </div>
          </Paper>
        </div>
      </>
    );
  }
}
