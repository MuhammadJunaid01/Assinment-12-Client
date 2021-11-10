import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./pages/Top_menu/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contuct from "./pages/contuct/Contuct";
import TopBanner from "./pages/Top_Banner/TopBanner";
import BuyNow from "./pages/BuyNow/BuyNow";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/login/Login";
import Regester from "./pages/regester/Regester";
import MyOrder from "./pages/cart/MyOrder/MyOrder";
import AuthProvider from "./hooks/authprovider/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation />
          <TopBanner />

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/buynow/:id">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/regester">
              <Regester></Regester>
            </Route>
            <Route exact path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route exact path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route exact path="/contact">
              <Contuct></Contuct>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
