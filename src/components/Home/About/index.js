import React from "react";
import aboutImage from "../../../assets/images/about.png";
import aboutPhotosImage from "../../../assets/images/about-photos.png";

const About = () => {
  return (
    <section
      id="about-section"
      className="flex w-full items-center pt-10 lg:pt-0"
    >
      <div className="flex justify-center container mx-auto max-w-7xl px-4  items-center ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" order-1 lg:order-2 pt-10 lg:pt-0 pb-5 lg-pb-0 w-full flex justify-center">
            <img src={aboutImage} className="w-full sm:w-3/4 lg:w-full" alt="" />
          </div>
          
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 pl-0 lg:pl-20 pb-10 lg:pb-0">
            <div className=" lg:ps-5 ">
              <div className="text-center lg:text-start pt-3 lg:pt-0">
                <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl">
                  Mengenal tentang Booklogia <br /> lebih dalam yuk!
                </h1>

                <p className=" md:text-md lg:text-lg py-5 md:w-9/12 lg:w-10/12 mb-4 mx-auto lg:mx-0 font-sans">
                  Kamu ingin mencari bacaan menarik? bingung ini memilih cerita
                  seperti apa? lagi malas membaca tapi ingin tau seperti apa
                  ceritanya? Booklogi bisa membantumu.
                </p>

                <div className="lg:w-5/12 order-1 lg:order-2 w-full flex justify-center">
                  <img src={aboutPhotosImage} className="pb-7 md:pb-7 lg:pb-0" alt="" />
                </div>

                <a
                  href="/register"
                  className=" focus:outline-none py-2.5 text-white bg-success hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
