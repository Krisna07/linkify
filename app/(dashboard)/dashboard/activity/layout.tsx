import React, { Children } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";

interface PageProps {}

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full place-items-center ">
      <div className="w-full border-b grid place-items-center sticky top-[120px] z-[40] bg-black">
        <div className="px-8 pb-8  w-full text-2xl font-[600]">ACTIVITY</div>
      </div>
      <div className="grid tablet:grid-cols-[1fr_3fr] relative z-10">
        {/* <div className="tablet:w-fit  border-r tablet:grid hidden  ">
          <span className="p-4 text-2xl">Filters</span>
          <div className=" w-fit p-4 tablet:grid flex gap-4">
            <select className="w-full h-fit box-border bg-gray-600 p-2 px-4 gap-2 grid rounded-full outline-none ">
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
              <label className="flex items-center text-gray-400 gap-4">
                <input
                  type="checkbox"
                  className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                />
                Select all
              </label>
              <div className="w-full border border-gray-600 py-4 px-2 grid gap-4">
                <label className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Share
                </label>
                <label className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Deployments
                </label>
                <label className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Entertainment
                </label>
                <label className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Social media
                </label>
              </div>
            </div>
          </div>
        </div> */}
        <div className="py-8">{children}</div>
      </div>
    </div>
  );
};

export default Page;
