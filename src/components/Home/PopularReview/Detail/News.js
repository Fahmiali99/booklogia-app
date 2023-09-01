import React from "react";
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
    slidesToScroll: 3,
  };

  return (
    <div className="pt-5">
      <div className="hidden lg:block md:block">
        <Slider {...settings}>
          {news.map((e, i) => (
            <div key={i} className="px-4">
              <div className="bg-gray-100">
                <img
                  src={"/assets/images/review/" + e.image}
                  alt=""
                  className="w-full"
                />
                <h1 className="text-start text-lg pt-5 h-24 px-3">{e.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="block lg:hidden md:hidden">
        <Slider {...setting} className="lg:hidden block">
          {news.map((e, i) => (
            <div key={i} className="px-4">
              <div className="bg-gray-100">
                <img
                  src={"/assets/images/review/" + e.image}
                  alt=""
                  className="w-full"
                />
                <h1 className="text-start text-lg pt-5 h-24 px-3">{e.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default News;
