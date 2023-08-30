import React from "react";
import logo from "../../assets/images/logo-1.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMdMail, IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <footer className=" bg-dark text-light py-5">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 lg:col-span-1 md:col-span-1">
            <h5 className="text-uppercase mb-4 font-semibold">Company name</h5>
            <img className="d-block mb-4 mx-auto" src={logo} alt=" " />
          </div>

          <div className="md:col-span-4 lg:col-span-1">
            <h5 className="text-uppercase mb-4 font-semibold">Popular</h5>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="#" className="footer-link">
                  Becoming by Michelle Obama
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="footer-link">
                  Dear Tomorrow
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="footer-link">
                  Merdeka Sejak Hati
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="footer-link">
                  A Wrinkle in Time
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-1">
            <h5 className="text-uppercase mb-4 font-semibold">About</h5>
            <p className="text-sm">
              Buku sering disebut sebagai jendela dunia karena dengan membaca
              buku kita dapat mengetahui apa saja yang ada di dunia ini baik
              dimasa sekarang bahkan dimasa lampau, kuncinya hanyalah membaca.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-1">
            <h5 className="text-uppercase mb-4 font-semibold">Contact</h5>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="#" className="flex items-center">
                  <AiFillHome className="fas fa-home mr-3 text-white" />
                  <span>Indonesia</span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="flex items-center">
                  <IoMdMail className="fas fa-envelope mr-3 text-white" />
                  <span className="m-lg-1"> booklogia@gmail.com </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="flex items-center">
                  <IoMdCall className="fas fa-phone mr-3 text-white" />
                  <span className="m-lg-1"> +6282131715623 </span>
                </Link>
              </li>
              <li className="mb-3">
                <form
                  action="#"
                  className="subscribe relative flex items-center"
                >
                  <input
                    type="text"
                    className="rounded-lg py-3 px-4 w-full"
                    placeholder="Enter your e-mail"
                  />

                  <button
                    type="button"
                    className="absolute right-2   focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 "
                  >
                    Purple
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-3  border-secondary" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span>&copy; 2022 Copyright | </span>
            <Link className="footer-link" href="https://google.com/">
              BookLogia
            </Link>
          </div>

          <div className="flex space-x-2">
            <Link className="footer-link" href="https://www.instagram.com/">
              <i className="fab fa-instagram icon-media-footer"></i>
            </Link>

            <Link className="footer-link" href="https://www.facebook.com/">
              <i className="fab fa-facebook-f icon-media-footer"></i>
            </Link>

            <Link className="footer-link" href="https://twitter.com/">
              <i className="fab fa-twitter icon-media-footer"></i>
            </Link>

            <Link className="footer-link" href="https://google.com/">
              <i className="fab fa-google icon-media-footer"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
