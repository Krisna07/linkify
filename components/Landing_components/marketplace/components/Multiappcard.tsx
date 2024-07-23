import React from "react";
import { FaFacebook, FaFacebookF, FaFacebookSquare } from "react-icons/fa";

interface MultiappcardProps {}

const Multiappcard = ({}: MultiappcardProps) => {
  return (
    <div className="">
      <div className="tablet:w-[300px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[40px] font-[800]">Facebook</h2>
          <FaFacebookSquare size={100} color="blue" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rem.
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Multiappcard;
