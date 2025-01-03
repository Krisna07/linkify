"use client";

import { Console } from "console";
import { get } from "http";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import Button from "../../Global_components/Button";

const MainNav = () => {
  const menus = [
    {
      name: "Home",
      path: "/",
      submenu: [
        { name: "Features", path: "#features" },
        { name: "Discover", path: "#discover" },
        { name: "Pricing", path: "#pricing" },
      ],
    },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "History", path: "#history" },
        { name: "Team", path: "#team" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const getPath = usePathname();
  // console.log(getPath);
  const [active, setActive] = useState<string>(getPath);
  const [subMenu, setSubmenu] = useState<any>();
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);

  const [left, setLeft] = useState<number>();

  const getSubmenus = (path: string) => {
    const subs = menus.find((menu) => {
      return menu.path === path;
    });
    return subs?.submenu;
  };

  const getObjectWidth = (e: any) => {
    const obj: any = e.target;
    const parent: any = obj.parentElement.getBoundingClientRect().x;
    const object = e.target.pathname;

    setLeft(
      obj.getBoundingClientRect().x -
        parent +
        +obj.getBoundingClientRect().width / 2
    );
    setSubmenu(getSubmenus(object));
  };

  return (
    <div className="tablet:w-[80%] w-full px-8 py-2 bg-gray-800/75 flex items-center justify-between rounded-full text-white sticky top-0 z-10 shadow-md">
      <span className="text-white font-bold text-xl">Linkify</span>
      <div
        className="flex gap-4 relative"
        onMouseLeave={() => setSubmenu(undefined)}
      >
        {menus.map((menu) => {
          return (
            <Link
              href={`${menu.path}`}
              key={menu.name}
              className={`transition-all duration-300 ease-in-out ${
                active === menu.path ? "text-white/50" : "text-white"
              }`}
              onClick={() => setActive(menu.path)}
              onMouseOver={(e: any) => {
                setActive(menu.path);
                getObjectWidth(e);
                setShowSubmenu(true);
              }}
              onMouseLeave={() => {
                setActive(getPath);
              }}
            >
              {menu.name}
            </Link>
          );
        })}

        {subMenu != undefined && (
          <div
            style={{
              left: `${left && left - 4}px`,
            }}
            className={`absolute rounded-full top-[130%] px-0 py-0 transition-all duration-300 ease-in-out`}
          >
            <BsTriangleFill
              size={12}
              className="absolute top-[-8px] text-white"
            />
            <div className="bg-white -left-4 relative rounded grid place-items-left text-black px-4 py-2">
              {subMenu.map((item: any) => (
                <a
                  href={item.path}
                  key={item.name}
                  className="cursor-pointer hover:text-gray-500 text-sm transition-all duration-300 ease-in-out "
                  onClick={() => setSubmenu(undefined)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className=" gap-4 hidden tablet:flex" role="group">
        <Button children="Login" variant={"default"} size={"default"} />
        <Button children="Sign Up" variant={"default"} size={"default"} />
      </div>
      <div className="tablet:hidden p-2 rounded-full bg-black/75 ">
        <FaUser />
        {/* <div className=" absolute top-[100%] grid gap-2 w-fit">
          <Button children="Login" variant={"default"} size={"default"} />
          <Button
            children="Sign Up"
            variant={"default"}
            size={"default"}
            className="w-fit"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MainNav;
