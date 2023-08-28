"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { BiBell, BiShare } from "react-icons/bi";

interface mainnavProps {}

export default function Mainnav({}: mainnavProps) {
  const navlinks = [
    { name: "Overview", link: "/dashboard" },
    { name: "Activity", link: `/dashboard/activity` },
    { name: "Usage", link: "/dashboard/usage" },
    { name: "Links", link: "/dashboard/links" },
    { name: "Monitoring", link: "/dashboard/monitering" },
    { name: "Settings", link: "/dashboard/settings" },
  ];
  const route = usePathname();
  const thisNav = `/${route.split("/").splice(-2)[0]}`;
  const router = useParams();
  console.log(router);
  return (
    <div className="w-full sticky grid gap-4 bg-gray-800 border-b border-b-gray-600 border-b-[1px] relative box-border overflow-hidden">
      <div className="w-full flex items-center justify-between  p-2 px-8 gap-4">
        <div className="flex items-center py-2  rounded-full gap-4">
          <div className="h-6 w-6 bg-white rounded-full hidden tablet:flex"></div>
          <span className="text-gray-600 hidden tablet:flex">/</span>
          <div className="flex items-center gap-2 font-[600]">
            <div className="h-6 w-6 bg-white rounded-full hidden tablet:flex"></div>{" "}
            user
          </div>
          <div className="bg-gray-600 px-2 py-[2px] rounded-full text-sm font-[600]">
            Type
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4 text-gray-300">
          <div className=" shadow-bs px-2 py-[2px] rounded-md font-[600] flex gap-2 items-center hover:bg-gray-400/25 hover:text-white">
            Share <BiShare />
          </div>

          <div className="tablet:flex grid hidden gap-4 absolute bg-gray-600 tablet:bg-gray-800 top-[100%] right-4 tablet:right-0 tablet:top-0 tablet:relative px-4 py-2 tablet:p-0 rounded-lg ">
            <span>Account</span>
            <span>Help</span>
            <span>Docs</span>
          </div>

          <div className="flex gap-1 p-[4px] px-2 shadow-bs rounded-full">
            <BiBell />
            <div className="w-4 h-4 bg-blue-600 rounded-full text-white text-[10px] grid place-items-center">
              1
            </div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-300 to-blue-500 to-pink-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className=" w-full flex p-2 px-8 gap-4 text-gray-400 top-0 overflow-x-scroll scrollbar-hide">
          {navlinks.map((items) => (
            <Link
              href={items.link}
              key={items.name}
              style={{
                color: items.link == route ? "white" : "",
              }}
              className="hover:text-white hover:bg-gray-600 p-2 py-1 rounded-md relative grid items-center">
              {items.name}
              {items.link == route ? (
                <div className="w-full h-[2px] bg-white absolute -bottom-2"></div>
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
