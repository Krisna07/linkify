"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";

import Appnav from "./Appnav";
import { userProps } from "../../utils/Interfaces";

export interface NavProps {
  user: userProps;
}

interface MenuProps {
  name: string;
  link: string;
}

export default function Mainnav({ user }: NavProps) {
  const navlinks: MenuProps[] = [
    { name: "Overview", link: "/dashboard" },
    { name: "Activity", link: "/dashboard/activity" },
    { name: "Usage", link: "/dashboard/usage" },
    { name: "Boards", link: "/dashboard/boards" },
    // { name: "Monitoring", link: "/dashboard/monitoring" },
  ];

  const route = usePathname();

  const thisNav = `${route.split("/").splice(-2)[0]}`;

  interface HoverItems {
    width: number;
    position: number;
  }

  const [hoverItemDimension, setHoverItemDimension] = useState<HoverItems>({
    width: 0,
    position: 0,
  });

  const handleHover = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverItemDimension({
      width: rect.width,
      position: rect.left,
    });
  };

  const isActiveMenu = (item: MenuProps) => {
    return (
      item.link === route || thisNav.toLowerCase() === item.name.toLowerCase()
    );
  };
  const getInitialDimension = () => {
    const active = document.querySelector(".active");
    const rects = active && active?.getBoundingClientRect();
    rects &&
      setHoverItemDimension({
        width: rects.width,
        position: rects.left,
      });
  };
  getInitialDimension;

  return (
    <div className="w-full grid gap-4 bg-dark border-b-[gray] border-b-[1px] sticky top-0 z-[100] box-border">
      <Appnav user={user} />

      <div className="w-full overflow-hidden top-0 box-border  pb-1">
        <div
          className="w-full flex relative overflow-hidden tablet:px-8 gap-4 text-gray-400 top-0 overflow-x-scroll scrollbar-hide group "
          onMouseLeave={getInitialDimension}
        >
          {navlinks.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              onMouseOver={handleHover}
              onClick={handleHover}
              className={`p-2 px-2 py-1 z-20 relative grid items-center rounded-md ${
                isActiveMenu(item)
                  ? "text-silver bg-primary active font-semibold"
                  : "text-silver/75"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div
            style={{
              width: `${hoverItemDimension.width}px`,
              left: `${hoverItemDimension.position}px`,
            }}
            className=" h-full bg-primary absolute z-10 bottom-0 transition-all ease-in-out duration-300 rounded-md "
          ></div>
        </div>
      </div>
    </div>
  );
}
