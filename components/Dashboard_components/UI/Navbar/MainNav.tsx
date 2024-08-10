"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState, MouseEvent } from "react";

import Appnav from "./Appnav";
import { userProps } from "../../utils/Interfaces";
import NavMenu from "./NavMenu";

export interface NavProps {
  user: userProps;
}
interface menuProps {
  name: string;
  link: string;
}
export default function Mainnav({ user }: NavProps) {
  const navlinks: menuProps[] = [
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
  interface hoverItems {
    width: number;
    position: number;
  }
  const [hoverItemDimension, sethoverItemDimension] = useState<hoverItems>({
    width: 0,
    position: 0,
  });

  const handleHover = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect: any = e && e.currentTarget.getBoundingClientRect();
    const position = rect.x;
    const width = rect.width;
    sethoverItemDimension({ width: width, position: position });
    console.log(hoverItemDimension);
  };

  const checktheactiveMenu = () => {
    const activeMenu = navlinks.filter((item: menuProps) => {
      return item.link == route || thisNav == item.name.toLocaleLowerCase();
    });
    console.log(activeMenu);
    return activeMenu;
  };
  checktheactiveMenu();
  //generate an array of dom element and find the hoverItemdimension for the active element and set it as initial
  // console.log(user);
  return (
    <div className="w-full  grid gap-4 bg-dark  border-b-[gray] border-b-[1px] relative z-[100] box-border ">
      <Appnav user={user} />

      <div className="w-full overflow-hidden  top-0 box-border relative">
        <div
          className="w-full flex overflow-hidden  tablet:px-8  gap-4 text-gray-400 top-0 overflow-x-scroll scrollbar-hide"
          onMouseLeave={() => sethoverItemDimension({ width: 0, position: 0 })}
        >
          {navlinks.map((item: menuProps) => (
            <Link
              href={item.link}
              key={item.name}
              onMouseOver={handleHover}
              className={`p-2 px-2 py-2 z-20 relative grid items-center rounded-md ${
                item.link == route || thisNav == item.name.toLocaleLowerCase()
                  ? "text-silver bg-primary"
                  : "text-silver/75"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div
            style={{
              width: `${hoverItemDimension.width + "px"}`,
              left: `${hoverItemDimension.position + "px"}`,
            }}
            className={`h-full bg-primary absolute z-10 bottom-0  transition-all ease-in-out duration-300 rounded-md `}
          ></div>
        </div>
      </div>
    </div>
  );
}
