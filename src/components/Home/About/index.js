import React, { Fragment } from "react";
import aboutImage from "../../../assets/images/about.png";
import aboutPhotosImage from "../../../assets/images/about-photos.png";

const About = () => {
  return (
    <Fragment>
      <section
        id="about-section"
        className="flex w-full items-center  pb-10 lg:pb-10"
      >
        <div className="flex justify-center container mx-auto max-w-7xl px-4  items-center ">
          <div className="flex flex-col md:flex-row  lg:flex-row items-center">
            <div className=" order-1 lg:order-2 pt-10 lg:pt-0 pb-5 lg-pb-0 w-full flex justify-center">
              <img src={aboutImage} className="w-9/12 sm:w-9/12 md:w-full lg:w-full" alt="" />
            </div>
            
            <div className="w-full flex justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end  order-2 lg:order-2 pl-0 lg:pl-20 ">
              <div className=" lg:ps-5 ">
                <div className="text-center md:text-left lg:text-start pt-3 lg:pt-0">
                  <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl">
                    Mengenal tentang Booklogia <br /> lebih dalam yuk!
                  </h1>

                  <div className="flex justify-center sm:justify-center md:justify-start">
                    <div className="w-11/12 sm:w-8/12 md:w-10/12 lg:w-10/12">
                      <p className=" md:text-md lg:text-lg py-5  mb-4 mx-auto lg:mx-0 font-sans">
                          Platform sharing buku yang menjadi tempat berkumpulnya para
                          Kamu ingin mencari bacaan menarik? bingung ini memilih cerita
                          seperti apa? lagi malas membaca tapi ingin tau seperti apa
                          ceritanya? Booklogi bisa membantumu.
                      </p>
                    </div>
                  </div>

                  <div className="pb-10 lg:w-5/12 order-1 md:order-2 lg:order-2 w-full flex justify-center sm:justify-center md:justify-start">
                    <img src={aboutPhotosImage} className="" alt="" />
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
    </Fragment>
  );
};

export default About;
