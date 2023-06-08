import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaDollarSign, FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div className="section w-full h-full bg-sky-800 text-rose-200 py-16 px-4  ">
      <div className="md:w-1/2 p-4 grid gap-8">
        <h2 className="text-6xl font-bold leading  ">
          Connect <br /> more of you
        </h2>
        <p className="text-xl font-semibold">
          Bring the best experiences across the internet to one place: your
          Linktree
        </p>
        <div className="w-3/4 p-4 text-black text-xl font-semibold bg-white rounded flex items-center gap-4">
          <FaSearch size={32} />
          <input className="outline-none border-none w-fit" />
        </div>
      </div>
      <div className="md:w-1/2 p-4 relative grid place-items-center">
        <div className="w-[300px] h-[500px] relative skew-x-[-5deg] flex flex-col items-center  rounded shadow-bs bg-yellow-600 p-4 place-items-center gap-2 ">
          <div className="grid place-items-center gap-2">
            <div className="w-40 h-40 rounded-full bg-rose-200 overflow-hidden">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
                alt=""
              />
            </div>
            <h2 className="text-xl font-semibold">Justin Styles</h2>
            <p>Funk R&B</p>
          </div>
          <div className="w-full p-2 font-semibold text-center bg-rose-500 rounded-full  ">
            Listen to Justin Styles
          </div>
          <div className="w-full p-2 text-center font-semibold bg-rose-500 rounded-full  ">
            New Merch
          </div>
          <div className="w-full p-2 text-center bg-rose-500 font-semibold rounded-full  ">
            Harvest Tour
          </div>
          <div className="absolute grid place-items-center w-[200px] h-[200px] bg-yellow-400 text-black left-[-150px] rounded">
            <div className="w-full text-center grid place-items-center gap-2">
              {" "}
              <div className="p-8 rounded-full bg-yellow-300">
                <FaDollarSign size={32} className="text-center" />
              </div>
              <div>$1800</div>
              <p>Total revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
