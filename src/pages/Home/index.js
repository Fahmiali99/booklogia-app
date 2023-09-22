import React, { lazy } from "react";
const Hero = lazy(() => import('../../components/Home/Hero'));
const About = lazy(() => import('../../components/Home/About'));
const PopularReview = lazy(() => import('../../components/Home/PopularReview'));
const Rating = lazy(() => import('../../components/Home/Rating'));

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
