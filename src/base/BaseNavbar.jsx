import React from "react";
import "../assets/css/styles.css";
import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import HomeIcon from "../icons/HomeIcon.jsx";
import AccountIcon from "../icons/AccountIcon.jsx";
import BaseAutocompleteForm from "../base/BaseAutoCompleteForm.jsx";
const BaseNavbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light baloo-15">
        <div class="container-fluid">
          <Link to="/home" class="navbar-brand" href="#">
            <img src={logo} alt="Electronic Home" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <Link to="/home" type="button" class="nav-link" aria-current="page">
                  <HomeIcon /> Home
                </Link>
              </li>
              <li class="nav-item">
                <a
                  type="button"
                  class="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <AccountIcon />
                  Account
                </a>
              </li>
            </ul>
            <BaseAutocompleteForm type="text" label="search"/>
          </div>
        </div>
      </nav>
    );
}
export default BaseNavbar;