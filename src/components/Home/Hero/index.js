import React from "react";
import heroImage from "../../../assets/images/hero.png";
import handsShowImage from "../../../assets/images/hands-show.png";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="container mx-auto flex items-center max-w-7xl px-4 min-h-[calc(90vh-3rem)] pt-10 lg:pt-0"
    >
      <div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 order-2 lg:order-1">
            <div className="text-center lg:text-left pt-3 lg:pt-0">
              <h1
                data-aos="fade-up"
                className="text-dark font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl  "
              >
                Anda Butuh Buku? <br /> Booklogia Solusinya
              </h1>

              <p className=" md:text-md lg:text-lg py-5 md:w-9/12 lg:w-10/12 mb-4 mx-auto lg:mx-0 font-sans">
                Platform sharing buku yang menjadi tempat berkumpulnya para
                penggemar buku yang mencari bacaan baru untuk koleksinya maupun
                pembaca santai yang ingin mencari bacaan diwaktu senggang
                mereka.
              </p>

              <a
                href="/thread"
                className="focus:outline-none py-2.5 text-white bg-success hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Get Started
              </a>

              <a
                href="/tips"
                className="focus:outline-none text-white bg-danger hover:bg-red-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Reading
              </a>
            </div>

            <div className="flex justify-center lg:justify-start items-center pt-4 mt-3 lg:mt-5">
              <img src={handsShowImage} className=" w-24 lg:w-32 " alt="" />
              <div className="ml-4">
                <h3 className="text-xl lg:text-2xl">
                  Find Your <br /> Story.
                </h3>
                <hr className="border-2 border-dark opacity-100 mt-4" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-5/12 order-1 lg:order-2 w-full flex justify-center pb-5 lg-pb-0">
            <img src={heroImage} className="w-full sm:w-3/4 lg:w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
