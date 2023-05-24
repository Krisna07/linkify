"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaFlagUsa, FaLeaf } from "react-icons/fa";
import CountryList from "./ui/countries";

const Footer: React.FC = () => {
  const [country, setCountry] = useState({
    name: "English",
    flag: <FaFlagUsa />,
  });

  return (
    <footer className="w-full  text-black py-4 grid place-items-center">
      <div className="w-3/4  flex items-center justify-between">
        <div className="grid  justify-start gap-4">
          <h2 className="text-lg font-bold">
            <a
              href="#"
              className=" hover:text-gray-500 font-semibold flex items-center"
            >
              Linkify <FaLeaf />
            </a>
          </h2>
          <div className=" inline-flex relative">
            <div className="w-fit flex items-center gap-2 p-2 px-4 shadow-bs rounded text-semi-old">
              <span>{country.name}</span>
              <span> {country.flag}</span>
            </div>

            <CountryList setCountry={setCountry} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#" className=" hover:text-gray-500 font-semibold">
            About Us
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Services
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Products
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Contact Us
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            FAQ
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Careers
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Blog
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Support
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Terms of Service
          </a>
          <a href="#" className=" hover:text-gray-500 font-semibold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
