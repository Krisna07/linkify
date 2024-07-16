"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { TbColorPicker, TbSettings } from "react-icons/tb";

const Dropdown = ({ user }: any) => {
  return (
    <div className="w-full grid gap-2 text-base  cursor-pointer leading-6">
      <div className="w-full flex items-center gap-4 px-4 py-2 border-b border-red-200">
        <div className="border-1 rounded ">
          <FaUserAlt />
        </div>
        <div className="grid ">
          <span className="text-xl text-white font-semibold">
            {user?.username}
          </span>
          <span className="min-w-full block">{user?.email}</span>
        </div>
      </div>
      <div className="w-full px-4 py-2 border-b border-red-200">
        <span className="flex items-center gap-4">
          <TbSettings />
          Account
        </span>
      </div>
      <div className="grid px-4 py-2 border-b border-red-200">
        <div className="flex items-center gap-4">
          <TbColorPicker />
          <span>Theme</span>
        </div>
        <div className="grid px-12">
          <span className="text-gray-300 hover:text-gray-400">system</span>
          <span className="text-gray-300 hover:text-gray-400">dark</span>
          <span className="text-gray-300 hover:text-gray-400">light</span>
        </div>
      </div>
      <div
        className="flex items-center gap-4 px-4 py-2 text-white"
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/signin`,
          })
        }
      >
        <FaSignOutAlt /> <span>Log out</span>
      </div>
    </div>
  );
};

export default Dropdown;
