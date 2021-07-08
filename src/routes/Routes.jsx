import SplashScreen from "../pages/splashscreen/index.jsx";
import StoresPageCompleted from "../pages/storespage/index.jsx";
import SignupPage from "../pages/signuppage/index.jsx";
import SigninPage from "../pages/loginpage/index.jsx";
import MainPageCompleted from "../pages/mainpage/index.jsx";
import DashboardPageCompleted from "../pages/dashboardpage/index.jsx";
import { Route , BrowserRouter as Router } from "react-router-dom"
import DetailsPageCompleted from "../pages/detailspage/index.jsx";
import CategoryPage from "../pages/categorypage/index.jsx";
import AudioCategoryPage from "../pages/categorycarouselpages/audiocategorypage/index.jsx";
import CameraCategoryPage from "../pages/categorycarouselpages/cameracategorypage/index.jsx";
import LaptopCategoryPage from "../pages/categorycarouselpages/laptopcategorypage/index.jsx";
import MobileCategoryPage from "../pages/categorycarouselpages/mobilecategorypage/index.jsx";
import TVCategoryPage from "../pages/categorycarouselpages/tvcategorypage/index.jsx";
import VideoCategoryPage from "../pages/categorycarouselpages/videocategorypage/index.jsx";
import AccountPageCompleted from "../pages/accountpage/index.jsx";
import UpdateAccountPage from "../pages/updateaccountpage/index.jsx";
import AddStoresPageDashboardCompleted from "../pages/addstorespagedashboard/index.jsx";
const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen}/>
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPageCompleted} />
        <Route exact path="/stores" component={StoresPageCompleted} />
        <Route exact path="/details/:id" component={DetailsPageCompleted} />
        <Route exact path="/dashboard" component={DashboardPageCompleted} />
        <Route exact path="/category/:name" component={CategoryPage} />
        <Route exact path="/audio" component={AudioCategoryPage} />
        <Route exact path="/camera" component={CameraCategoryPage} />
        <Route exact path="/laptop" component={LaptopCategoryPage} />
        <Route exact path="/mobile" component={MobileCategoryPage} />
        <Route exact path="/tv" component={TVCategoryPage} />
        <Route exact path="/video" component={VideoCategoryPage} />
        <Route exact path="/account" component={AccountPageCompleted} />
        <Route exact path="/update-account" component={UpdateAccountPage} />
        <Route exact path="/add-store" component={AddStoresPageDashboardCompleted} />
      </Router>
    </div>
  );
};
export default Routes;
