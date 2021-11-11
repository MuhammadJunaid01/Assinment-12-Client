import React from "react";
import ShoppingCart from "../cart/ShoppingCart";
import OurCollection from "../ourCollection/OurCollection";
import Products from "../products/Products";
import Review from "../reviews/Review";
import TopBanner from "../Top_Banner/TopBanner";
import BestAwards from "./../Awards/BestAwards";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <BestAwards></BestAwards>
      <Products></Products>
      <ShoppingCart></ShoppingCart>
      <Review></Review>
      <OurCollection></OurCollection>
    </div>
  );
};

export default Home;
