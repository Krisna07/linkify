import React from "react";
import { BiDoughnutChart, BiLoader, BiSearch } from "react-icons/bi";
import { BsTiktok } from "react-icons/bs";
import {
  FaDollarSign,
  FaRedditAlien,
  FaRedditSquare,
  FaSearch,
  FaTiktok,
} from "react-icons/fa";
import { FcDoughnutChart } from "react-icons/fc";

const page = () => {
  return (
    <div className="w-full grid place-items-center ">
      <div className="w-full md:h-[80vh] bg-sky-800 text-rose-200 py-16 px-4 md:flex grid gap-4 items-center justify-center">
        <div className="md:w-1/2 p-4 grid gap-8">
          <h2 className="text-6xl font-bold  ">
            Connect <br /> more of you
          </h2>
          <p className="text-xl font-semibold">
            Bring the best experiences across the internet to one place: your
            Linktree
          </p>
          <div className="w-fit p-4 text-black text-xl font-semibold bg-white rounded flex items-center gap-4">
            <FaSearch size={32} />
            <input className="outline-none border-none w-fit" />
          </div>
        </div>
        <div className="md:w-1/2 p-4 relative grid place-items-center">
          <div className="w-[300px] h-[500px] relative skew-x-[-5deg] skew-y-[5deg] flex flex-col items-center  rounded shadow-bs bg-yellow-600 p-4 place-items-center gap-2 ">
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
      <div className="w-[80%]">
        <div className="w-full box-border py-4 flex gap-8">
          <div className="w-1/2 grid gap-4">
            <div className="w-full p-4  bg-orange-600 rounded-[50px] grid place-items-center relative">
              <div className="p-4 rounded-full bg-rose-400">
                <FaRedditAlien size={200} color={"white"} />
              </div>
              <BiLoader
                className="absolute top-10 right-10 "
                size={100}
                color={"yellow"}
              />
              <BiLoader
                className="absolute bottom-10 left-10 "
                size={100}
                color={"yellow"}
              />
              <BiDoughnutChart
                className="absolute bottom-8 right-24 text-yellow-100"
                size={100}
              />
              <div className="w-20 h-20 bg-yellow-300 rounded-full absolute left-[30%] bottom-[10%]"></div>
              <div className="w-10 h-10 bg-yellow-100 rounded-full absolute left-[20%] top-[10%]"></div>
            </div>
            <div className="flex gap-4">
              <div>
                <FaRedditSquare size={52} color={"red"} />
              </div>
              <div className="">
                <h2 className="text-xl font-bold">Reddit</h2>
                <p className="font-semibold">Showcase your Reddit profile</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 grid gap-4">
            <div className="w-full p-4  bg-slate-900 rounded-[50px] grid place-items-center relative overflow-hidden">
              <div className="p-4 rounded-full bg-rose-400 ">
                <FaRedditAlien size={200} color={"white"} />
              </div>
              <BiLoader
                className="absolute top-10 right-10 "
                size={100}
                color={"yellow"}
              />
              <BiLoader
                className="absolute bottom-10 left-10 "
                size={100}
                color={"yellow"}
              />
              <BiDoughnutChart
                className="absolute bottom-8 right-24 text-yellow-100"
                size={100}
              />
              <div className="w-20 h-20 bg-yellow-300 rounded-full absolute left-[30%] bottom-[10%]"></div>
              <div className="w-10 h-10 bg-yellow-100 rounded-full absolute left-[20%] top-[10%]"></div>
            </div>
            <div className="flex gap-4">
              <div>
                <FaTiktok
                  size={48}
                  color={"white"}
                  className={"bg-black p-2 rounded-[10px]"}
                />
              </div>
              <div className="">
                <h2 className="text-xl font-bold">Tiktok</h2>
                <p className="font-semibold">
                  Share your Tiktok on your Linkify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
