"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

import { TbColorPicker, TbSettings } from "react-icons/tb";

const Dropdown = ({ user }: any) => {
  return (
    <div className="grid gap-2 bg-accent/50  rounded-md cursor-pointer leading-6">
      <div className="min-w-fit flex items-center gap-4 px-4 py-2 border-b border-red-200">
        <div className="border-1 rounded ">
          <FaUserAlt />
        </div>
        <div className="min-w-fit grid  ">
          <span className="text-xl opacity-75 font-semibold">
            {user?.username}
          </span>
          <span className="min-w-full block overflow-x-auto">
            {user?.email}
          </span>
        </div>
      </div>
      <div className="w-full px-4 py-2 border-b border-red-200">
        <Link
          href={"/account"}
          className="flex items-center gap-4 group hover:text-bermuda"
        >
          <TbSettings className="group-hover:rotate-180 transition-all ease-in-out  group-hover:scale-110 " />
          Account
        </Link>
      </div>
      {/* <div className="grid px-4 py-2 border-b border-red-200">
        <div className="flex items-center gap-4">
          <TbColorPicker />
          <span>Theme</span>
        </div>
        <div className="grid px-12">
          <span className="text-gray-300 hover:text-silver/50">system</span>
          <span className="text-gray-300 hover:text-silver/50">dark</span>
          <span className="text-gray-300 hover:text-silver/50">light</span>
        </div>
      </div> */}
      <div
        className="flex items-center gap-4 px-4 py-2  group hover:text-bermuda"
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/signin`,
          })
        }
      >
        <CiLogout className="group-hover:scale-110" />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Dropdown;
