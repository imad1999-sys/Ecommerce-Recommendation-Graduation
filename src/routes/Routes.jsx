import SplashScreen from "../pages/splashscreen/index.jsx";
import StoresPageCompleted from "../pages/storespage/index.jsx";
import SignupPage from "../pages/signuppage/index.jsx";
import SigninPage from "../pages/loginpage/index.jsx";
import MainPageCompleted from "../pages/mainpage/index.jsx";
import DashboardPageCompleted from "../pages/dashboardpage/index.jsx";
import { Route , BrowserRouter as Router } from "react-router-dom"
import DetailsPageCompleted from "../pages/detailspage/index.jsx";
import AccountPageCompleted from "../pages/accountpage/index.jsx";
import UpdateAccountInfoCompleted from "../pages/accountpage/components/UpdateAccountInfoCompleted.jsx";
const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen}/>
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPageCompleted} />
        <Route exact path="/stores" component={StoresPageCompleted} />
        <Route exact path="/details" component={DetailsPageCompleted} />
        <Route exact path="/dashboard" component={DashboardPageCompleted} />
        <Route exact path="/account" component={AccountPageCompleted} />
        <Route exact path="/update-account" component={UpdateAccountInfoCompleted} />
      </Router>
    </div>
  );
};
export default Routes;
