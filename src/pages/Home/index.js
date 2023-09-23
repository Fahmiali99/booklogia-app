import React, { Fragment, lazy } from "react";
const Hero = lazy(() => import('../../components/Home/Hero'));
const About = lazy(() => import('../../components/Home/About'));
const PopularReview = lazy(() => import('../../components/Home/PopularReview'));
const Rating = lazy(() => import('../../components/Home/Rating'));

function Home() {
  return (
    <Fragment>
      <Hero />  
      <About />
      <PopularReview />
      <Rating />
    </Fragment>
  );
}

export default Home;
