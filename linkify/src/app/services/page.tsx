import React from "react";
import { BsTiktok } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";

const page = () => {
  return (
    <div className="w-full min-h-[100vh] bg-white py-[72px] grid place-items-center relative ">
      <BsTiktok
        size={"50px"}
        className={`p-4 rounded-full shadow-bs absolute translate-x-40  `}
      />
      <FaFacebook
        size={"50px"}
        className="p-4 rounded-full shadow-bs absolute translate-y-40"
      />
      <FaTwitter
        size={"50px"}
        className="p-4 rounded-full shadow-bs absolute -translate-x-40"
      />
      <FaInstagram
        size={"50px"}
        className="p-4 rounded-full shadow-bs absolute -translate-y-40"
      />
      <GiLinkedRings
        size={"50px"}
        className="p-4 rounded-full shadow-bs animate-spin"
      />
    </div>
  );
};

export default page;
