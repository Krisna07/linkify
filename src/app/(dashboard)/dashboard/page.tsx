import Button from "@/app/g_components/Button";
import React from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaSearch } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <div className="w-full grid gap-8 ">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-[80%] flex items-center gap-4 px-4 py-2 bg-gray-800 rounded-lg">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 px-2 outline-none"
          />
        </div>
        <div className="flex gap-2 p-1 bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
          <div className="p-2 bg-gray-900 rounded-md">
            <BiGrid />
          </div>
          <div className="p-2 bg-gray-900 rounded-md">
            <FaBars />
          </div>
        </div>
        <Button
          children="Add new"
          variant={"primary"}
          size={"default"}
          className="w-fit py-2  px-4"
          rightIcon={<FaChevronDown />}
        />
      </div>
    </div>
  );
}
