"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Button from "../../Global_components/Button";

const Navbar = () => {
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
    <div
      className="  text-white w-full px-8 py-2 flex items-center justify-between shadow-bs  z-[100] "
      id="nav"
    >
      <span className=" font-bold text-xl">Linkify</span>
      <div
        className="flex gap-4 relative"
        onMouseLeave={() => setSubmenu(undefined)}
      >
        {menus.map((menu) => {
          return (
            <Link
              href={`${menu.path}`}
              key={menu.name}
              className={`transition-all duration-300 font-[600] ease-in-out ${
                active === menu.path ? "text-silver/75" : ""
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
            className={`absolute rounded-full top-[100%] px-0 py-0 transition-all duration-300 ease-in-out`}
          >
            <BsTriangleFill
              size={12}
              className="absolute top-[-8px] text-dark "
            />
            <div className="bg-dark text-white -left-4 relative rounded flex  place-items-left gap-2 text-black px-4 py-2">
              {subMenu.map((item: any) => (
                <a
                  href={item.path}
                  key={item.name}
                  className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out hover:text-primary "
                  onClick={() => setSubmenu(undefined)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link
        href={"/auth/signup"}
        className=" gap-4 hidden tablet:flex"
        role="group"
      >
        <Button
          children="Join now "
          variant={"default"}
          size={"default"}
          icon={true}
        />
      </Link>
      <div className="tablet:hidden p-2 rounded-full bg-black/75 ">
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;
