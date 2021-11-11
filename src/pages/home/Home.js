import React from "react";
import ShoppingCart from "../cart/ShoppingCart";
import OurCollection from "../ourCollection/OurCollection";
import Parts from "../parts/Parts";
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
      <Parts></Parts>
    </div>
  );
};

export default Home;
