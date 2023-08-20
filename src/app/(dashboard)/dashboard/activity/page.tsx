import React from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div className="w-full ">
      <div className="w-full border-b grid place-items-center sticky top-[140px]">
        <div className="px-8 pb-8  w-full text-2xl font-[600] ">Activity</div>
      </div>
      <div className="grid tablet:grid-cols-2 ">
        <div className="tablet:w-1/6 tablet:h-[100vh] border-r tablet:fixed ">
          <div className="p-4 grid gap-4">
            <span className="p-4 text-2xl">Filters</span>
            <select
              name=""
              id=""
              className="w-full box-border bg-gray-600 p-2 px-4 gap-2 grid rounded-full outline-none ">
              <option value="">Last 3 days</option>
              <option value="">Last 7 days</option>
              <option value="">Last month</option>
              <option value="">Last year</option>
            </select>
          </div>
          <div className="p-4 grid gap-4 ">
            <div className="flex gap-2 items-center leading-[120%] text-gray-400 text-xl">
              <FaChevronRight /> Type
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2 text-xl items-center bg-gray-800 p-2 px-4 rounded-lg text-gray-400">
                <FaSearch />
                <input
                  type="text"
                  placeholder="search types...."
                  className=" w-full bg-gray-800 outline-none border-none"
                />
              </div>
              <div className="flex items-center text-gray-400 gap-4">
                <input
                  type="checkbox"
                  className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                />
                Select all
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
