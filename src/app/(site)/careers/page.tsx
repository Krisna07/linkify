import React from "react";
import Joblists from "./Joblists";
import Button from "@/app/g_components/Button";
import { FaShareAlt } from "react-icons/fa";
import Listing from "./Listing";

interface pageProps {}

export default function page({}: pageProps) {
  const jobs = Joblists;
  //   console.log(jobs);
  return (
    <div className="w-full py-20 grid place-items-center">
      <div className="laptop:w-[1000px] grid gap-4">
        <div className="text-2xl font-[600]  p-2">
          Browse our open positions
        </div>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Listing
              job={job}
              key={job.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
