import React from "react";
import { FaFacebook, FaFlagUsa, FaLeaf } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  text-black py-4 grid place-items-center">
      <div className="w-3/4  flex items-center justify-between">
        {/* First Column */}
        <div className="grid  justify-start gap-4">
          <h2 className="text-lg font-bold">
            <a
              href="#"
              className=" hover:text-gray-500 font-semibold flex items-center"
            >
              Linkify <FaLeaf />
            </a>
          </h2>
          <div className="relative inline-flex">
            <select className="appearance-none bg-gray-700 text-gray-500 font-semibold py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-600">
              <option selected>
                English <FaFacebook color="gray-500 font-semibold" />
              </option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>

        {/* Second Column */}
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

        {/* Third Column */}
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
