import Link from "next/link";
import React from "react";
import { BsTriangle } from "react-icons/bs";

export default function Navbar({}) {
  const menus: string[] = [
    "Home",
    "Services",
    "Templates",
    "Pricings",
    "About",
  ];

  return (
    <div className="laptop:w-[1024px] w-full flex items-center justify-between  px-4">
      <div className="w-10 h-10  rounded-full bg-gradient-to-tr from-indigo-400 to-red-400 to-blue-400 grid place-items-center  grid place-items-center ">
        <BsTriangle
          className="rotate-45 "
          fill="yellow"
        />
      </div>
      <div className="flex gap-4 p-4 ">
        {menus.map((menu) => (
          <Link
            key={menu}
            className="hover:text-gray-800"
            href={`/${menu == "Home" ? "" : menu.toLocaleLowerCase}`}>
            {menu}
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
}
