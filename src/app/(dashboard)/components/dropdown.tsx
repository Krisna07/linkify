"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { TbColorPicker, TbSettings } from "react-icons/tb";
import { userTypes } from "../layout";

const Dropdown = ({ user }: userTypes) => {
  return (
    <div className="grid gap-2 text-base divide-y divide-gray-400/75 leading-6">
      <div className="flex items-center gap-4 p-4 py-2 border-box">
        <div className="border-1 rounded ">
          <FaUserAlt />
        </div>
        <div className="grid ">
          <span className="text-xl text-white font-semibold">
            {user?.username}
          </span>
          <span>{user?.email}</span>
        </div>
      </div>
      <div className="w-fit px-4 py-2">
        <span className="flex items-center gap-4">
          <TbSettings />
          account settings
        </span>
      </div>
      <div className="grid px-4 py-2">
        <div className="flex items-center gap-4">
          <TbColorPicker />
          <span>Theme</span>
        </div>
        <div className="grid px-12">
          <span className="text-gray-800 hover:text-gray-700">system</span>
          <span className="text-gray-800 hover:text-gray-700">dark</span>
          <span className="text-gray-800 hover:text-gray-700">light</span>
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
