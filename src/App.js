import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./pages/Top_menu/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contuct from "./pages/contuct/Contuct";
import TopBanner from "./pages/Top_Banner/TopBanner";
function App() {
  return (
    <div>
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
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/contact">
            <Contuct></Contuct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
