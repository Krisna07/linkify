"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Joblists from "../Joblists";
import Button from "@/app/g_components/Button";

import { GiShare } from "react-icons/gi";

interface pageProps {}

const page = ({}: pageProps) => {
  const router = usePathname().split("/")[2];
  const jobTitle = router.split("_")[0] + " " + router.split("_")[1];
  const allJobs = Joblists;
  const thisjob: any = Joblists.find((job) => job.title == jobTitle);

  return (
    <div className="py-20 grid place-items-center">
      <div className="laptop:w-[1000px] grid gap-4">
        <div className="flex items-center justify-between">
          <div className="grid gap-2">
            <span className=" text-2xl font-bold">{thisjob.title}</span>
            <span className="font-semibold text-sm">2023/01/22</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-300 rounded-full"></div>
              <div className=" text-sm flex flex-col leading-[120%]">
                <span>Dominic Fike</span>
                <span className=" font-semibold text-xs">HR Manager</span>
              </div>
            </div>
          </div>
          <Button
            children="Share"
            rightIcon={<GiShare />}
            variant={"ghost"}
            size={"sm"}
          />
        </div>
        <div className="">
          <div className=""></div>
        </div>
        <form className="w-full grid gap-4">
          <label
            htmlFor="name"
            className="flex gap-4">
            <input
              type="text"
              placeholder="Firstname"
              className="border-b outline-none shadow"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="border-b outline-none shadow "
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              placeholder="Email"
              className="border-b outline-none shadow "
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default page;
