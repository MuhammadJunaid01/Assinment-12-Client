import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./pages/Top_menu/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contuct from "./pages/contuct/Contuct";
import BuyNow from "./pages/BuyNow/BuyNow";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/login/Login";
import Regester from "./pages/regester/Regester";
import MyOrder from "./pages/cart/MyOrder/MyOrder";
import AuthProvider from "./hooks/authprovider/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";
import CoustomerReview from "./pages/reviews/CoustomerReview";
import DashBoard from "./pages/dashboard/DashBoard";
import MakeAnAdmin from "./pages/dashboard/makeAnAdmin/MakeAnAdmin";
import ManageAllOrders from "./pages/manage orders/ManageAllOrders";
import AddAProduct from "./pages/add aproduct/AddAProduct";
import ViewDetails from "./pages/viewDetails/ViewDetails";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation />

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
            <Route exact path="/purchse/:id">
              <ViewDetails></ViewDetails>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/Reviews">
              <CoustomerReview></CoustomerReview>
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
            <PrivateRoute exact path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contuct></Contuct>
            </Route>
            <Route exact path="/makeAdmin">
              <MakeAnAdmin></MakeAnAdmin>
            </Route>
            <Route exact path="/addProduct">
              <AddAProduct></AddAProduct>
            </Route>
            <Route exact path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
