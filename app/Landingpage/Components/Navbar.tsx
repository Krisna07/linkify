"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaLeaf, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white  fixed grid place-items-center min-w-full top-0 shadow-lg z-10  `}
    >
      <div className="w-full h-full">
        <div className="h-full flex items-center justify-between  p-4">
          <div className="flex items-center">
            <Link href="/">
              <span className=" text-lg font-bold flex items-center gap-2">
                Linkify <FaLeaf className="text-green-500" />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link href="/">
                  <span className=" hover:text-gray-500">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className=" hover:text-gray-500">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className=" hover:text-gray-500">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              <Link href="/user_auth/signin">
                <span className=" ">Sign in</span>
              </Link>
            </button>
          </div>
          <div className="md:hidden">
            <button
              className="text-black hover:text-gray-500 focus:outline-none"
              onClick={toggleNavbar}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full md:hidden h-100% p-4">
          <ul className="flex flex-col items-center space-y-3">
            <li className="w-full hover:bg-red-300 flex items-center py-2">
              <Link href="/">
                <span className="text-gray-500 hover:text-white">Home</span>
              </Link>
            </li>
            <li className="w-full hover:bg-red-300 flex items-center py-2">
              <Link href="/about">
                <span className="text-gray-500 hover:text-white">About</span>
              </Link>
            </li>
            <li className="w-full hover:bg-red-300 flex items-center py-2">
              <Link href="/contact">
                <span className="text-gray-500 hover:text-white">Contact</span>
              </Link>
            </li>
            <li>
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
