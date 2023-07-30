"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaLeaf, FaTimes } from "react-icons/fa";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "Marketplace",
      link: "/marketplace",
    },
    {
      name: "Pricings",
      link: "/pricings",
    },
    {
      name: "Templates",
      link: "/templates",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const path = usePathname();
  console.log(path);
  useEffect(() => {});
  return (
    <nav
      className={`bg-white fixed grid place-items-center min-w-full top-0 shadow-lg z-10  `}>
      <div className="w-full h-full">
        <div className="h-full flex items-center justify-between  p-4">
          <div className="flex items-center">
            <Link
              href="/"
              onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}>
              <span className=" text-lg font-bold flex items-center gap-2">
                Linkify <FaLeaf className="text-green-500" />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {NavItems.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={`${menu.link}`}
                    className="font-semibold hover:text-gray-500 active:text-gray-500 relative">
                    {menu.name}
                    {path == menu.link ? (
                      <div className="w-full h-px bg-red-400 absolute"></div>
                    ) : (
                      ""
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Link href="/user_auth/signin">
              <Button
                children={"Sign in"}
                variant={"default"}
                icon={false}
              />
              {/* <span className=" ">Sign in</span> */}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-black hover:text-gray-500 focus:outline-none"
              onClick={toggleNavbar}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* w-full hover:bg-red-300 flex items-center py-2 */}
      {isOpen && (
        <div className="w-full md:hidden h-100% p-4">
          <ul className="flex flex-col items-center space-y-3">
            {NavItems.map((menu) => (
              <li
                className="w-full hover:bg-red-300 flex items-center py-2"
                key={menu.name}
                onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}>
                <Link
                  href={`${menu.link}`}
                  className="font-semibold hover:text-gray-500 active:text-gray-500">
                  {menu.name}
                </Link>
              </li>
            ))}
            <li onClick={() => (isOpen ? setIsOpen(!isOpen) : "")}>
              <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
