import React, { Fragment } from "react";
import Slider from "react-slick";
import news from "../../../../utils/news";

function News() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div className="pt-5">
        <div className="hidden sm:hidden md:block lg:block xl:block ">
          <Slider {...settings}>
            {news.map((e, i) => (
              <Fragment key={i}>
                <div className="px-4">
                  <div className="bg-light ">
                    <img
                      src={"/assets/images/review/" + e.image}
                      alt={e.title}
                      className="w-full"
                    />
                    <h1 className="text-start md:text-md lg:text-lg pt-5 h-24 px-3">{e.title}</h1>
                  </div>
                </div>
              </Fragment>
            ))}
          </Slider>
        </div>
        <div className="block sm:block md:hidden lg:hidden xl:hidden px-2">
          <Slider {...setting} className="lg:hidden block">
            {news.map((e, i) => (
              <Fragment key={i} >
                <div className="px-4">
                  <div className="bg-light ">
                    <img
                      src={"/assets/images/review/" + e.image}
                      alt={e.title}
                      className="w-full"
                    />
                    <h1 className="text-start md:text-md lg:text-lg pt-5 h-24 px-3">{e.title}</h1>
                  </div>
                </div>
              </Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
}

export default News;
