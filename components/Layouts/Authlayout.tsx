import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Authprops {
  children: React.ReactNode;
}

const Authlayout = ({ children }: Authprops) => {
  return (
    <div className="w-full tablet:w-[800px] relative oveflow-hidden pb-0 p-4 grid place-items-center bg-white tablet:rounded box-border">
      {children}
      <Link href={"/"}>
        <div className="w-8 h-8 bg-gray-300 absolute top-4 right-4 rounded-full grid place-items-center rotate-[45deg] hover:rotate-0 transition-all">
          <FaArrowLeft />
        </div>
      </Link>
    </div>
  );
};

export default Authlayout;
