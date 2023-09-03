import React from "react";

function Searching({ handleSubmit, filter, handleFilter, title, about }) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
        className="container mx-auto flex items-center py-10 lg:py-20 justify-center  md:py-20 px-4  lg:px-0"
      >
        <div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-dark">
                {title}
              </h1>
              <div className="flex justify-center">
                <p className="pt-4 pb-8 text-secondary font-sans text-base w-full lg:w-3/4">
                  {about}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-full lg:w-2/4 ">
              <input
                value={filter}
                onChange={handleFilter}
                type="text"
                id="simple-search"
                className="bg-light border border-yellow-300 text-dark text-sm rounded-full focus:ring-warning focus:border-yellow-200 block w-full pl-10 p-2.5 "
                placeholder="Search blog name..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 px-5 lg:px-10 ml-2 text-sm font-medium text-dark rounded-full border bg-warning hover:bg-yellow-400 transition duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-yellow-300"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Searching;
