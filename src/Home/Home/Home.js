import React from "react";
import Footer from "../../Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Features from "../Featured/Features";
import Reviews from "../Reviews/Reviews";
import About from "./About/About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />

      <Features />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
