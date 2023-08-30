import React, { useState } from "react";
import logo from "../../assets/images/logo-text.png";
import profil from "../../assets/images/Forum/User.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthorized, user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDropdown = () => {
    setDrop(!drop);
  };

  return (
    <nav className=" bg-warning border-gray-200 dark:bg-gray-900">
      <div className="container  max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link to="/">
            <img alt="" src={logo} width={150} className="" />{" "}
          </Link>
          <div className="hidden pl-5 lg:flex lg:items-center lg:space-x-4">
            {menu.map((e, i) => (
              <Link key={i} to={e.href} className="nav-link">
                {e.title}
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={handleOpen}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

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
                  className="w-8 h-8 mr-2 rounded-full"
                  src={profil}
                  alt=""
                  width={50}
                />
                {user?.user.nama}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="z-10 absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className={`${drop ? " block" : " hidden"}`}>
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <h1 className="font-medium ">{user?.user.nama}</h1>
                    <h1 className="truncate text-secondary">
                      {user?.user.email}
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
            </div>
          ) : (
            <div className="h-full flex items-center space-x-2">
              <Link to="/login">
                <button className="border px-6 py-2 text-dark border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100">
                  Login
                </button>
              </Link>
              <span className="text-gray-700 hidden lg:inline-block px-1">
                or
              </span>
              <Link to="/register">
                <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* Mobile */}

        <div
          className={`md:hidden lg:hidden w-full  md:w-auto ${
            open ? " block" : " hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((e, i) => (
              <li key={i}>
                <Link
                  href={e.href}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  {e.title}
                </Link>
              </li>
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
                    {user?.user.nama}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div className="  top-10 right-0 bg-white  divide-y divide-gray-100 rounded-lg shadow w-full ">
                    <div className={`${drop ? " block" : " hidden"}`}>
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <h1 className="font-medium ">{user?.user.nama}</h1>
                        <h1 className="truncate text-secondary">
                          {user?.user.email}
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
                </div>
              ) : (
                <div className="h-full flex items-center space-x-2">
                  <Link to="/login">
                    <button className="border px-4 py-2 text-dark bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100">
                      Login
                    </button>
                  </Link>
                  <span className="text-gray-700 hidden lg:inline-block">
                    or
                  </span>
                  <Link to="/register">
                    <button className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </ul>
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
