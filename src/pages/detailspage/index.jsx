import React, { Component } from "react";
import ProductImage from "./components/ProductImage.jsx";
import MostRatedProducts from "./components/MostRatedProducts.jsx";
import Laptop from "../../assets/images/laptop.jpg";
import BaseNavbar from "../../base/BaseNavbar.jsx";
import BaseFooter from "../../base/BaseFooter.jsx";
import ProductNameAndRate from "./components/ProductNameAndRate.jsx";
import "../../assets/css/styles.css";
import ProductPrice from "./components/ProductPrice.jsx";
import ProductFilter from "./components/ProductFilter.jsx";
import Paper from "@material-ui/core/Paper";
import ProductDescription from "./components/ProductDescription.jsx";
import ProductVideos from "./components/ProductVideos.jsx";
import ProductPricingAnalytics from "./components/ProductPricingAnalytics.jsx";
import ProductTabs from "./components/ProductTabs.jsx";
import ProductOffers from "./components/ProductOffers.jsx";
export default class ProductDetails extends Component {
  render() {
    return (
      <>
        <div className="row">
          <BaseNavbar />
        </div>
        <Paper elevation={10}>
          <div class="row g-0 bg-light position-relative">
            <div class="col-md-6 p-4 ps-md-0 second-details-section">
              <div className="row">
                <ProductNameAndRate title="ASUS Laptop" />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductPrice price="1500000" />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductFilter />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductDescription />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductVideos />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductPricingAnalytics />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductTabs />
              </div>
            </div>
            <div class="col-md-6 mb-md-0 p-md-4 first-details-section">
              <div className="row">
                <ProductImage image={Laptop} />
                <hr className="me-4" />
                <MostRatedProducts />
              </div>
              <hr className="me-4" />
              <div className="row">
                <ProductOffers />
              </div>
            </div>
          </div>
        </Paper>
        <div className="row">
          <BaseFooter />
        </div>
      </>
    );
  }
}
