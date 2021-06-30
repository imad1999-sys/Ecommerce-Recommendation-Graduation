import SplashScreen from "./pages/splashscreen";
import StoresPage from "./pages/storespage/index.jsx";
import SignupPage from "./pages/signuppage/index.jsx";
import SigninPage from "./pages/loginpage/index.jsx";
import MainPage from "./pages/mainpage/index.jsx";
import Dashboard from "./pages/dashboardpage/index.jsx";
import { Route , BrowserRouter as Router } from "react-router-dom"
import ProductDetails from "./pages/detailspage/index.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen}/>
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/stores" component={StoresPage} />
        <Route exact path="/details" component={ProductDetails} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
};
export default App;
