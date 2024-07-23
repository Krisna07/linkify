import React from "react";
import Joblists from "./Joblists";

import Listing from "./Listing";

interface pageProps {}

export default function Careers({}: pageProps) {
  const jobs = Joblists;

  return (
    <div className="w-full py-20 grid place-items-center bg-silver">
      <div className="laptop:w-[1000px] w-full grid gap-4">
        <div className="text-2xl font-[600]">Browse our open positions</div>
        <div className="tablet:flex grid grid-cols-2 gap-4 ">
          <h2>Filters</h2>
          <div>
            <input
              placeholder="Search"
              className="outline-none border-[1px] rounded-full px-4"
            />
          </div>
          <div className="border px-4 rounded-lg font-[600] text-sm cursor-pointer relative">
            Location
            <div className="absolute  w-[200px] flex-wrap gap-8 p-4 bg-gradient-to-tr from-gray-200 to-blue-500 -bottom-28 rounded-lg hidden">
              <span>Australia</span>
              <span>India</span>
              <span>America</span>
              <span>England</span>
            </div>
          </div>
          <div className="border px-4 rounded-lg font-[600] text-sm cursor-default">
            Apply
          </div>
        </div>
        <div className="w-full grid gap-4">
          {jobs.map((job) => (
            <Listing job={job} key={job.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
