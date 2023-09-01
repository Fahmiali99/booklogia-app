import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo-text.png";
import profil from "../../assets/images/Forum/User.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Fade as Hamburger } from "hamburger-react";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthorized, user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDropdown = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={dropdownRef}
      className=" bg-warning border-gray-200 dark:bg-gray-900"
    >
      <div className="container  max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Desktop */}
        <div className="flex items-center">
          <a href="/">
            <img alt="" src={logo} width={150} className="" />{" "}
          </a>
          <div className="hidden pl-5 lg:flex lg:items-center lg:space-x-4">
            {menu.map((e, i) => (
              <div key={i}>
                <a href={e.href} className="text-base">
                  {e.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleOpen}
          type="button"
          className="inline-flex  items-center  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <Hamburger toggled={open} toggle={setOpen} size={23} />
        </button>
        {/* Desktop */}
        <div className="hidden md:block lg:flex items-center">
          {isAuthorized ? (
            <div className="relative">
              <button
                onClick={handleDropdown}
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0  "
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-9 h-9 mr-2 rounded-full bg-light p-1"
                  src={profil}
                  alt=""
                />
                <h1 className="text-dark text-base">{user.nama}</h1>

                <svg
                  className="w-2.5 h-2.5 ml-2.5 text-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="z-10 absolute top-11 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className={`${drop ? " block" : " hidden"}`}>
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <h1 className="font-medium ">{user.nama}</h1>
                    <h1 className="truncate text-secondary">{user.email}</h1>
                  </div>
                  <div className="py-2 text-sm text-gray-700 ">
                    <button
                      onClick={() => dispatch(logout())}
                      className="block px-4 w-full text-start py-2 hover:bg-gray-100 "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center space-x-2">
              <a href="/login">
                <button className="border px-6 py-2 text-dark border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100">
                  Login
                </button>
              </a>
              <span className="text-gray-700 hidden lg:inline-block px-1">
                or
              </span>
              <a href="/register">
                <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none">
                  Register
                </button>
              </a>
            </div>
          )}
        </div>

        {/* Mobile */}
        <div
          className={`md:hidden lg:hidden md:w-auto w-full ${
            open ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          {open && (
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menu.map((e, i) => (
                <div key={i}>
                  <a
                    href={e.href}
                    className="block py-2 pl-3 pr-4 text-dark  md:p-0 "
                    aria-current="page"
                  >
                    {e.title}
                  </a>
                </div>
              ))}
              <div className="flex items-center py-2 ">
                {isAuthorized ? (
                  <div className="w-full">
                    <button
                      onClick={handleDropdown}
                      className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600  md:mr-0  "
                      type="button"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 mr-2 rounded-full focus:outline"
                        src={profil}
                        alt=""
                        width={50}
                      />
                      <h1 className="text-base text-dark">{user.nama}</h1>
                      <svg
                        className="w-2.5 h-2.5 ml-2.5 text-dark"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      className={`mt-3 border border-gray-200 rounded-lg ${
                        drop ? " block" : " hidden"
                      }`}
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <h1 className="font-medium ">{user.nama}</h1>
                        <h1 className="truncate text-secondary">
                          {user.email}
                        </h1>
                      </div>
                      <div className="py-2 text-sm text-gray-700 ">
                        <button
                          onClick={() => dispatch(logout())}
                          className="block px-4 w-full text-start py-2 hover:bg-gray-100 "
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center space-x-2">
                    <a href="/login">
                      <button className="border px-4 py-2 text-dark bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100">
                        Login
                      </button>
                    </a>
                    <span className="text-gray-700 hidden lg:inline-block">
                      or
                    </span>
                    <a href="/register">
                      <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none">
                        Register
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

export const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tips",
    href: "/tips",
  },
  {
    title: "Forum",
    href: "/forum",
  },
];
