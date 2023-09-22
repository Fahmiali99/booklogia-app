import React, { Fragment } from "react";
import { useState } from "react";

function NavbarTabs({ data }) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-wrap px-4">
      <div className="w-full justify-center ">
        <div className="flex space-x-7 justify-center pt-8 ">
          <div className="bg-[#ffebad] flex p-2 lg:p-4 rounded-lg ">
            {data?.map((menu, idx) => (
              <Fragment key={idx}>
                <div className="last:mr-0 flex-auto text-center px-2">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(menu.id);
                    }}
                    href="#link1"
                  >
                    <div
                      className={`text-md hover:text-primary-500 rounded-lg   ${
                        openTab === menu.id
                          ? " bg-[#fb9108] px-4 lg:px-7 py-2 lg:py-2.5 text-white"
                          : "bg-[#f4a641] px-4 lg:px-7 py-2 lg:py-2.5 text-white"
                      }`}
                    >
                      {menu.name}
                    </div>
                  </a>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="pt-4 sm:py-5">
          {data.map((content, idx) => (
            <div
              key={idx}
              className={openTab === content.id ? "block" : "hidden"}
            >
              {content.link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarTabs;
