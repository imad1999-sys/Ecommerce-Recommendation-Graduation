import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import FavoritesPageDashboard from "../pages/dashboard/pages/favoritespagedashboard/FavoritesPageDashboardPage.jsx";
import SortPageCompleted from "../pages/sortpage/SortPage.jsx";
import StoresProductPage from "../pages/storeproductpage/StorePage.jsx";
import SplashScreen from "../pages/splashscreen/index.jsx";
import SigninPage from "../pages/loginpage/index.jsx";
import SignupPage from "../pages/signuppage/index.jsx";
import MainPageCompleted from "../pages/mainpage/index.jsx";
import DetailsPageCompleted from "../pages/detailspage/index.jsx";
import DashboardPageCompleted from "../pages/dashboard/index.jsx";
import CategoryPage from "../pages/categorypage/CategoryPage.jsx";
import AccountPageCompleted from "../pages/accountpage/index.jsx";
import PricingAlertDashboard from "../pages/dashboard/pages/pricingalertpagedashboard/PriceAlertDashboardPage.jsx";
import SearchPageCompleted from "../pages/searchpage/SearchPage.jsx";
const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPageCompleted} />
        <Route exact path="/details/:id" component={DetailsPageCompleted} />
        <Route exact path="/dashboard" component={DashboardPageCompleted} />
        <Route exact path="/category/:name" component={CategoryPage} />
        <Route exact path="/account" component={AccountPageCompleted} />
        <Route
          exact
          path="/statistics-dashboard"
          component={PricingAlertDashboard}
        />
        <Route exact path="/users-dashboard" component={FavoritesPageDashboard} />
        <Route exact path="/store/:name" component={StoresProductPage} />
        <Route exact path="/category/:name/:filter" component={SortPageCompleted} />
        <Route exact path="/search/:query/:category" component={SearchPageCompleted} />
      </Router>
    </div>
  );
};
export default Routes;
