"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, MouseEvent as ReactMouseEvent } from "react";

import Appnav from "./Appnav";
import { userProps } from "../../utils/Interfaces";

export interface NavProps {
  user: userProps;
}

interface MenuProps {
  name: string;
  link: string;
}

interface HoverItems {
  width: number;
  position: number;
}

export default function Mainnav({ user }: NavProps) {
  const navlinks: MenuProps[] = [
    { name: "Overview", link: "/dashboard" },
    { name: "Activity", link: "/dashboard/activity" },
    { name: "Usage", link: "/dashboard/usage" },
    { name: "Boards", link: "/dashboard/boards" },
  ];

  const route = usePathname();
  const currentNav = route.split("/").slice(-2, -1)[0] || "";

  const [hoverItemDimension, setHoverItemDimension] = useState<HoverItems>({
    width: 0,
    position: 0,
  });
  const [isHovering, setHover] = useState<boolean>(false);

  const handleHover = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    setHover(true);
    setHoverItemDimension({ width, position: left });
  };

  const resetHover = () => {
    const active = document.querySelector(".active") as HTMLElement;
    if (active) {
      const { width, left } = active.getBoundingClientRect();
      setHoverItemDimension({ width, position: left });
    }
    setHover(false);
  };

  const isActiveMenu = (item: MenuProps) => {
    return (
      item.link === route ||
      currentNav.toLowerCase() === item.name.toLowerCase()
    );
  };

  const styles = {
    hoverIndicator: {
      width: `${hoverItemDimension.width}px`,
      left: `${hoverItemDimension.position}px`,
    },
  };

  return (
    <div className="w-full grid gap-4 bg-dark border-b border-gray-500 sticky top-0 z-100 box-border">
      <Appnav user={user} />
      <div className="w-full overflow-hidden pb-1">
        <div
          className="w-full flex relative overflow-hidden tablet:px-8 gap-4 text-gray-400 overflow-x-scroll scrollbar-hide group"
          onMouseLeave={resetHover}
        >
          {navlinks.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              onMouseOver={handleHover}
              onClick={handleHover}
              className={`p-2 px-2 py-1 transition-all border-inset relative grid items-center z-20 ${
                isActiveMenu(item)
                  ? "text-silver border-b active font-semibold"
                  : "text-silver/75"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div
            style={styles.hoverIndicator}
            className={`${
              !isHovering ? "hidden" : ""
            } h-full bg-primary/75 absolute z-10 bottom-0 transition-all duration-300 ease-in-out rounded`}
          />
        </div>
      </div>
    </div>
  );
}
