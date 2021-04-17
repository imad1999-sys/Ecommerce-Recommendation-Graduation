import React, { Component } from "react";
import SearchBar from "./components/SearchBar.jsx";
import PageTitle from "./components/PageTitle.jsx";
import GridOfStores from "./components/GridOfStores.jsx";
import Paper from "@material-ui/core/Paper";
export default class StoresPage extends Component {
  render() {
    return (
      <div className="stores-container">
        <Paper elevation={5}>
          <div className="row">
            <PageTitle />
          </div>
          <div className="row">
            <SearchBar label="Search ... " icon={<i class="fas fa-search" />} />
          </div>
          <div className="row">
            <GridOfStores />
          </div>
        </Paper>
      </div>
    );
  }
}
