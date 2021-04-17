import SplashScreen from "./pages/splashscreen";
import StoresPage from "./pages/storespage/index.jsx";
import SignupPage from "./pages/signuppage/index.jsx";
import SigninPage from "./pages/loginpage/index.jsx";
import MainPage from "./pages/mainpage/index.jsx";
import { Route , BrowserRouter as Router } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen}/>
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/stores" component={StoresPage} />
      </Router>
    </div>
  );
};
export default App;
