import React from "react";
import ShoppingCart from "../cart/ShoppingCart";
import Products from "../products/Products";
import BestAwards from "./../Awards/BestAwards";

const Home = () => {
  return (
    <div>
      <BestAwards></BestAwards>
      <Products></Products>
      <ShoppingCart></ShoppingCart>
    </div>
  );
};

export default Home;
