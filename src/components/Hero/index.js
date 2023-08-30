import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.png";
import handsShowImage from "../../assets/images/hands-show.png";

const Hero = () => {
  return (
    <section id="hero-section" className="py-5 py-lg-5">
      <div className="mt-lg-5">
        <div className="align-items-center">
          <div className="order-lg-2">
            <img
              src={heroImage}
              className="img-fluid d-none d-lg-block"
              alt=""
            />
            <img
              src={heroImage}
              className="img-fluid w-75 d-block d-lg-none mx-auto mb-4 mb-md-5"
              alt=""
            />
          </div>
          <div className="order-lg-1">
            <div className="text-center text-lg-start">
              <h1 className="mb-4 fw-bold">
                Anda Butuh Buku? <br /> Booklogia Solusinya
              </h1>

              <p className="w-75 lh-lg mb-4 mx-auto mx-lg-0">
                Platform ulasan buku yang menjadi tempat berkumpulnya para
                penggemar buku yang mencari bacaan baru untuk koleksinya maupun
                pembaca santai yang ingin mencari bacaan diwaktu senggang
                mereka.
              </p>

              <Link
                to="/thread"
                className="btn btn-success text-white px-4 py-2 me-2"
              >
                Get Started
              </Link>
              <Link to="/tips" className="btn btn-danger text-white px-4 py-2">
                Reading
              </Link>
            </div>

            <div className="justify-content-center justify-content-lg-start align-items-center pt-4 mt-3 mt-lg-5">
              <div>
                <img src={handsShowImage} className="img-fluid" alt="" />
              </div>
              <div xs="auto">
                <h3>
                  Find Your <br /> Story.
                </h3>
                <hr className="border border-2 border-dark opacity-100 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
