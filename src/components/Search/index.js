import React, { useState } from "react";
import Desainzero from "../../assets/images/Forum/Desainzero.png";
import User from "../../assets/images/Forum/User.png";
import dataThreads from "../../utils/threads.json";
import { useSelector } from "react-redux";

const Search = ({show, setShow}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search, setSearch] = useState("");
  const { isAuthorized } = useSelector((state) => state.auth);

  return (
    <>
      <div className={`w-full lg:w-3/5 ${isAuthorized ? "pr-4" : "pr-0"}`}>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleShow(event);
            }}
          >
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search.."
                name="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#61a1da] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="">
            {show && (
              // Modal
              <div className="w-full flex justify-center items-center">
                <div className=" fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="flex justify-center items-center h-full   ">
                    <div className="relative w-full max-w-5xl max-h-full ">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                          </h3>
                          <button
                            onClick={handleClose}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="defaultModal"
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        <div className="">
                          {dataThreads
                            .filter((val) => {
                              if (search === "") {
                                return val;
                              } else if (
                                val.judul
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                              ) {
                                return true;
                              }
                              return false;
                            })
                            .map((val) => {
                              return (
                                <div
                                  className="w-full h-full block lg:flex  px-6 py-10 "
                                  key={val.id}
                                >
                                  <img
                                    className=" rounded-2xl w-2/4"
                                    src={Desainzero}
                                    
                                    alt=""
                                  />

                                  <div className=" pl-6">
                                    <div className="text-start">
                                      <h1 className=" text-2xl">{val.judul}</h1>
                                      <p className="mt-3 mb-4">
                                        <span className="font-medium"></span>{" "}
                                        {val.story}
                                      </p>
                                      <div className="flex items-center">
                                        <img
                                          src={User}
                                          className="bg-secondary rounded"
                                          alt=""
                                          width="7%"
                                        />
                                        <div className="ml-2">
                                          <h6>
                                            By: {val.penulis}
                                            <br />
                                            <span className="text-sub-blog">
                                              {val.tanggal}
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
