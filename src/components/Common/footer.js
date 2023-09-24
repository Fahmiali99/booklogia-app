import React, { Fragment } from "react";

import { footer, sosmed } from "../../utils/footer";

function Footer() {
  return (
    <Fragment>
      <footer className=" bg-dark text-light py-5">
        <div className="container mx-auto max-w-7xl px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
            <div className="col-span-1 lg:col-span-1 md:col-span-1">
              <h5 className="text-uppercase mb-4 font-semibold">{footer.title}</h5>
              <img className="d-block mb-4 mx-auto" src={footer.images} alt={footer.images} />
            </div>

            <div className="md:col-span-4 lg:col-span-1">
              <h5 className="text-uppercase mb-4 font-semibold">{footer.popular.title}</h5>
              <ul className="list-none">
                {footer.popular.children.map((e, i) => (
                  <Fragment key={i}>
                    <li className="mb-3">
                      <a href="/" className="footer-a">
                        {e.name}
                      </a>
                  </li>
                  </Fragment>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-1">
              <h5 className="text-uppercase mb-4 font-semibold">{footer.about.title}</h5>
              <p className="text-sm">{footer.about.children}</p>
            </div>

            <div className="md:col-span-4 lg:col-span-1">
              <h5 className="text-uppercase mb-4 font-semibold">{footer.contact.title}</h5>
              <ul className="list-none">
                <li className="mb-3">
                  {footer.contact.children.map((e, i) => (
                    <Fragment key={i}>
                      <a href="/" className="flex items-center">
                        <e.Icons className="fas fa-home mr-3 text-white" />
                        <span>{e.name}</span>
                      </a>
                    </Fragment>
                  ))}
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
                      Send
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-3  border-secondary" />

          <div className="flex flex-col md:flex-row items-center justify-between py-5">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span>&copy; 2022 Copyright | </span>
              <a className="footer-a" href="https://google.com/">
                BookLogia
              </a>
            </div>

            <div className="flex space-x-2">
              {sosmed.map((e, i) => (
                <Fragment key={i}>
                  <a className="px-2 " href={e.link}>
                    <e.Icons className=" text-white hover:text-gray-400 text-xl"/>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
