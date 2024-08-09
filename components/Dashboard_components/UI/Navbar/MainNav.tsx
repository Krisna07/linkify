"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import Appnav from "./Appnav";
import { userProps } from "../../utils/Interfaces";

export interface NavProps {
  user: userProps;
}

export default function Mainnav({ user }: NavProps) {
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
  const dropdownRef = useRef(null);
  useEffect(() =>
    document.addEventListener("click", (e: any) => {
      const ClickedItem: any = e.target;
      const openItem: any = dropdownRef.current;
      if (openItem && openItem.contains(ClickedItem)) {
        return;
      } else {
        setAccountOptions(false);
      }
    })
  );
  // console.log(user);
  return (
    <div className="w-full  grid gap-4 bg-dark  border-b-[gray] border-b-[1px] relative z-[100] box-border ">
      <Appnav user={user} />
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
