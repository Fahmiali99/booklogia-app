import React, { Fragment, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NavbarTabs = lazy(() => import('../../Common/NavbarTabs'));
const Popular = lazy(() => import('./Detail/Popular'));
const News = lazy(() => import('./Detail/News'));
const Old = lazy(() => import('./Detail/Old'));


const PopularReview = () => {
  const tabMenu = [
    {
      id: 1,
      name: "News",
      link: <News />,
    },
    {
      id: 2,
      name: "Popular",
      link: <Popular />,
    },
    {
      id: 3,
      name: "Old",
      link: <Old />,
    },
  ];

  return (
    <Fragment>
      <section
        id="popular-review-section"
        className="flex justify-center container mx-auto max-w-7xl  items-center py-10 lg:py-0  lg:min-h-[calc(90vh-3rem)] "
      >
        <div className="container text-center">
          <div className="px-4 mb-lg-4">
            <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl ">Bacaan Populer</h1>
            <p className=" pt-3  font-sans">Berbagai bacaan yang sedang ramai dibaca dapat kamu akses disini.</p>
          </div>
          <NavbarTabs data={tabMenu} />
        </div>
      </section>
    </Fragment>
  );
};

export default PopularReview;
