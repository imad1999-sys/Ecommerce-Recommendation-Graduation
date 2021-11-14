import React, { Component, useEffect, useState } from "react";
import CarouselOfCompanies from "./CarouselOfCompanies.jsx";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "../../../assets/css/styles.css";
import BaseNavbar from "../../../base/BaseNavbar.jsx";
import BaseFooter from "../../../base/BaseFooter.jsx";
import CarouselOfCards from "./CarouselOfCards.jsx";
import DividerAndTitleSection from "./DividerAndTitleSection.jsx";
import {
  fetchAllProductsAction,
  mostViewedAction,
  recentlyAddedAction,
} from "../../../API/actions/productactions/ProductActions.jsx";
import { headers } from "../../../API/tokens/tokens.jsx";
import CarouselOfRecentlyAdded from "./CarouselOfRecentlyAdded.jsx";
import CarouselOfMostPopulared from "./CarouselOfMostPopular.jsx";
import { recentlyAddedService } from "../../../API/services/other/ProductService.jsx";
const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [recentlyProducts, setRecentlyProducts] = useState([]);
  useEffect(() => {
    getMostViewed();
    getRecentlyAdded();
  }, []);
  const getMostViewed = () => {
    fetchAllProductsAction("", headers).then((response) => {
      console.log(response);
      setProducts(response.data.response.products.content);
    });
  };
  const getRecentlyAdded = () => {
    fetchAllProductsAction("", headers).then((response) => {
      console.log(response);
      setProducts(response.data.response.products.content);
    });
  };
  return (
    <div>
      <div className="row">
        <BaseNavbar />
      </div>
      <div className="carousels-section">
        <DividerAndTitleSection section="المتاجر" />
        <div className="row">
          <div className="carousel-of-companies-section">
            <Paper elevation={10}>
              <CarouselOfCompanies />
            </Paper>
          </div>
        </div>
        <DividerAndTitleSection section="الأكثر مشاهدة" />
        <div className="row">
          <div className="carousel-of-card">
            <CarouselOfCards products={products} />
          </div>
        </div>
        <DividerAndTitleSection section="المضافة حديثاً" />
        <div className="row">
          <div className="carousel-of-recently-added">
            <CarouselOfCards products={products} />
          </div>
        </div>
        <DividerAndTitleSection section="الأصناف الأكثر مشاهدة" />
        <div className="row">
          <div className="carousel-of-companies-section">
            <Paper elevation={10}>
              <CarouselOfMostPopulared />
            </Paper>
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
