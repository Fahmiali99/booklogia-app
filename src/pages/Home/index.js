import React from "react";
import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import PopularReview from "../../components/Home/PopularReview";
import Rating from "../../components/Home/Rating";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <PopularReview />
      <Rating />
    </>
  );
}

export default Home;
