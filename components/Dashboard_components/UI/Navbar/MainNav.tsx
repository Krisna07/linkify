"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import Dropdown from "../components/dropdown";
import Image from "next/image";

import { TbShare } from "react-icons/tb";

export default function Mainnav({ user }: any) {
  const navlinks = [
    { name: "Overview", link: "/dashboard" },
    { name: "Activity", link: `/dashboard/activity` },
    { name: "Usage", link: "/dashboard/usage" },
    { name: "Links", link: "/dashboard/links" },
    { name: "Monitoring", link: "/dashboard/monitering" },
    { name: "Settings", link: "/dashboard/settings" },
  ];
  const route = usePathname();
  const [accountOptions, setAccountOptions] = useState<boolean>(false);
  const thisNav = `${route.split("/").splice(-2)[0]}`;

  return (
    <div className="w-full  grid gap-4 bg-dark  border-b-[gray] border-b-[1px] relative z-[100] box-border ">
      <div className="w-full flex items-center justify-between box-border p-2  gap-4 relative  ">
        <div className=" flex items-center py-2  gap-2">
          <div className="h-6 w-6  rounded-full overflow-hidden  tablet:flex">
            <Image
              src="/favicon.ico"
              width={10}
              height={10}
              alt={"icon"}
              className="w-full h-full cover rounded-full "
            />
          </div>
          <span className="text-gray-400  tablet:flex">/</span>
          <div className="flex items-center gap-2 font-[600]">
            <div
              style={{ backgroundImage: user.image }}
              className={`h-6 w-6 rounded-full  grid place-items-center`}
            >
              <span className="text-black font-bold text-sm tablet:hidden">
                {user.username.split("")[0].toLocaleUpperCase("en-US")}
              </span>
            </div>
            <span className="hidden tablet:block"> {user.username}</span>
          </div>
          <div className="bg-accent hidden px-3 py-[2px] tablet:flex items-center rounded-full text-sm font-[600]">
            social
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-300 box-border text-black">
          <div className="flex items-center gap-2 bg-dark/50 p-[2px] px-2 text-sm shadow-bs rounded-full">
            <span className="hidden tablet:flex"> Share</span>
            <div className="w-4 h-4 bg-tahiti rounded-full text-dark text-[10px] grid place-items-center">
              <TbShare />
            </div>
          </div>

          <div className="flex items-center gap-1 p-[4px] px-2 shadow-bs rounded-full ">
            <BiBell />
            <div className="w-4 h-4 bg-tahiti rounded-full text-dark text-[10px] grid place-items-center">
              0
            </div>
          </div>
          <div className="w-full  z-[100]">
            <div
              style={{ backgroundImage: user.image }}
              className={`w-8 h-8  bg-[gray] rounded-full relative`}
              onClick={() => setAccountOptions(!accountOptions)}
            ></div>
          </div>
        </div>
        <div
          className={`${
            !accountOptions ? "-right-[100vw]" : "right-[2vw] tablet:right-4 "
          }  transition-all min-w-fit min-h-fit absolute  top-[100%]   bg-tahiti text-dark z-[999] rounded overflow-hidden`}
        >
          <Dropdown user={user} />
        </div>
      </div>
      <div className="w-full overflow-hidden sticky top-0 box-border">
        <div className="w-full flex overflow-hidden p-2 md:px-8  gap-4 text-gray-400 top-0 overflow-x-scroll scrollbar-hide">
          {navlinks.map((items) => (
            <Link
              href={items.link}
              key={items.name}
              style={{
                color:
                  items.link == route ||
                  thisNav == items.name.toLocaleLowerCase()
                    ? "primary"
                    : "",
              }}
              className={`hover:text-white hover:bg-primary/50 p-2 py-1 rounded-md relative grid items-center`}
            >
              {items.name}
              {items.link == route ||
              thisNav == items.name.toLocaleLowerCase() ? (
                <div className="w-full h-[2px] bg-silver absolute -bottom-2"></div>
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
