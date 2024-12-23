import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Authprops {
  children: React.ReactNode;
}

const Authlayout = ({ children }: Authprops) => {
  return (
    <div className="w-full tablet:w-[800px] relative oveflow-hidden pb-0 p-4 grid place-items-center bg-white tablet:rounded box-border ">
      {children}
      <Link href={"/"}>
        <div className="w-8 h-8  absolute bottom-2 right-6 rotate-[45deg]  grid place-items-center hover:rotate-0 transition-all z-[100]">
          <FaArrowLeft />
        </div>
      </Link>
    </div>
  );
};

export default Authlayout;
