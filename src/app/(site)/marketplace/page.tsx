"use client";
import React, { useState } from "react";
import { BiDoughnutChart, BiLoader, BiSearch } from "react-icons/bi";

import {
  FaDollarSign,
  FaRedditAlien,
  FaRedditSquare,
  FaSearch,
  FaTiktok,
} from "react-icons/fa";

import { RiNetflixFill } from "react-icons/ri";
import Button from "../../g_components/Button";
import Link from "next/link";
import Apps from "./appsdata";
import { IconType } from "react-icons/lib";
import Applist from "./components/Applist";
import Marquee from "react-fast-marquee";
interface appslist {
  name: string;
  des: string;
  logo: any;
  accent: string;
  type: string;
}

const page = () => {
  const [showapp, setShowapp] = useState(false);
  const apps = Apps;
  const creatorTools = Apps.filter((items) => items.type == "productive");
  const entertainmentTools = Apps.filter(
    (items) => items.type == "entertainment",
  );
  const socialMedia = Apps.filter((items) => items.type == "social media");
  const financeapps = Apps.filter(
    (items) => items.type == "shopping" || items.type == "finance",
  );

  return (
    <div className="w-full grid place-items-center gap-8 box-border overflow-hidden py-8">
      <div className="w-full  bg-sky-800 grid place-items-center ">
        <div className="laptop:w-[1024px] w-full text-rose-200 py-16 px-4 grid laptop:grid-cols-2  gap-4 items-center justify-center box-border">
          <div className="laptop:w-1/2 w-full p-4 grid gap-8 box-boder">
            <h2 className="text-6xl font-bold  ">
              Connect <br /> more of you
            </h2>
            <p className="text-xl font-semibold">
              Bring the best experiences across the internet to one place: your
              Linktree
            </p>
            <div className="w-fit p-4 text-black text-xl font-semibold bg-white rounded flex items-center gap-4 box-border">
              <FaSearch size={32} />
              <input className="outline-none border-none w-fit" />
            </div>
          </div>
          <div className="laptop:w-1/2 p-4 relative tablet:grid place-items-center hidden">
            <div className="w-[300px] h-[500px] relative skew-x-[-5deg] skew-y-[5deg] flex flex-col items-center  rounded shadow-bs bg-yellow-600 p-4 place-items-center gap-2 ">
              <div className="grid  place-items-center gap-2">
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
                    <FaDollarSign
                      size={32}
                      className="text-center"
                    />
                  </div>
                  <div>$1800</div>
                  <p>Total revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:w-[1000px] w-full grid place-items-center tablet:grid-cols-2 gap-4">
        <div className=" grid p-4 bg-gray-100 rounded-xl shadow-bs gap-2 bg-gradient-to-tr from-gray-100 to-purple-100 animate-bg">
          <h2 className="text-2xl w-[20ch] font-semibold">
            Link sharing have never been so easy
          </h2>
          <p className="">
            We help you connect seamlessly with your audience we are covering
            almost all the apps thats available.
          </p>
          <Button
            children="Browse Apps"
            variant={"default"}
            size={"sm"}
          />
        </div>
        <div className=" relative grid  bg-gray-100 rounded-xl shadow-bs gap-2 bg-gradient-to-tr from-gray-100 to-purple-100 animate-bg overflow-hidden ">
          <div className="w-[800px] absolute  top-10 -right-10 rotate-12 z-10">
            <Marquee className="w-full bg-gray-400 ">
              <div className="w-[800px] p-2 text-indigo-100  grid grid-cols-4   ">
                <span>Create</span>
                <span>Explore</span>
                <span>Think</span>
                <span>Free</span>
              </div>
            </Marquee>
          </div>
          <div className="w-[800px] absolute  bottom-10  right-0 -rotate-[30deg] z-10">
            <Marquee className="w-full bg-gray-400 ">
              <div className="w-[800px] p-2 text-indigo-100  grid grid-cols-4   ">
                <span>Create</span>
                <span>Explore</span>
                <span>Think</span>
                <span>Free</span>
              </div>
            </Marquee>
          </div>
          <div className="p-4 grid gap-4 relative z-20 ">
            <h2 className="text-2xl w-[14ch] font-semibold">Be creative</h2>
            <p className="">
              Create the links easy to choose and easy to share. User have
              freedom to place the link or sort them.
            </p>
            <Button
              children="Browse Apps"
              variant={"default"}
              size={"sm"}
            />
          </div>
        </div>
      </div>

      <div className="laptop:w-[1024px] grid gap-8 box-border">
        <div className="w-full box-border py-4 grid laptop:grid-cols-2  gap-8">
          <div className=" w-full grid gap-4">
            <div className="w-full p-4  bg-orange-600 rounded-[50px] grid place-items-center relative">
              <div className="p-4 rounded-full bg-rose-400 relative z-20">
                <FaRedditAlien
                  size={200}
                  color={"white"}
                />
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
                <FaRedditSquare
                  size={52}
                  color={"red"}
                />
              </div>
              <div className="">
                <h2 className="text-xl font-bold">Reddit</h2>
                <p className="font-semibold text-sm">
                  Showcase your Reddit profile
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid gap-4 box-border">
            <div className="w-full p-4  bg-slate-900 rounded-[50px] grid place-items-center relative overflow-hidden">
              <div className="p-4 rounded-full ">
                <div className="bg-gray-300 rounded-[20px] grid  gap-2 place-items-center p-2 relative z-[3]">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
                      alt=""
                    />
                  </div>
                  <div className="h-8 w-40 bg-slate-800 rounded-full  "></div>
                  <div className="h-8 w-40 bg-slate-800 rounded-full"></div>
                  <div className="h-8 w-40 bg-slate-800 rounded-full"></div>
                </div>
              </div>
              <div className="p-8 absolute bg-rose-300/90 rounded left-[25%] top-[10%] z-[2] ">
                <FaTiktok
                  size="52"
                  className=""
                />
              </div>
              <BiLoader
                className="absolute bottom-10 left-10 "
                size={100}
                color={"yellow"}
              />
              <BiDoughnutChart
                className="absolute bottom-8 right-24 text-yellow-100"
                size={100}
              />
              <div className="w-[800px] h-[800px] bg-white rounded-full absolute top-[-750px] right-[-300px]"></div>
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
                <p className="font-semibold text-sm">
                  Share your Tiktok on your Linkify
                </p>
              </div>
            </div>
          </div>
        </div>

        <Applist applications={creatorTools} />
        <div className="w-full bg-slate-200 grid place-items-center">
          <div className="laptop:w-[800px] w-full p-4 grid laptop:grid-cols-2 items-center gap-8">
            <div className="w-full grid gap-2 leading-[120%] ">
              <h2 className="text-4xl font-bold">Join our team</h2>
              <p className="text-lg font-semibold">We are expanding</p>
              <Link href={"./careers"}>
                {" "}
                <Button
                  icon={true}
                  children={"Register"}
                  size={"sm"}
                  variant={"default"}
                  className="w-fit"
                />
              </Link>
            </div>
            <div className="laptop:w-[600px] w-full">
              <div className="w-full h-[400px] bg-gradient-to-r animate-text from-red-200 to-indigo-200 relative to-sky-300 rounded-[20px]">
                <div className="w-[60px] h-[60px]  bg-white rounded-full grid place-items-center absolute top-20 left-20 animate-pulse">
                  <div className="w-[58px] h-[58px] bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-[60px] h-[60px]  bg-white rounded-full grid place-items-center absolute top-40 left-80 animate-pulse">
                  <div className="w-[58px] h-[58px] bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-[60px] h-[60px]  bg-white rounded-full grid place-items-center absolute top-10 left-60 animate-pulse ">
                  <div className="w-[58px] h-[58px] bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-[60px] h-[60px]  bg-white rounded-full grid place-items-center absolute top-60 left-40 animate-pulse">
                  <div className="w-[58px] h-[58px] bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Applist applications={entertainmentTools} />
        <Applist applications={socialMedia} />
        <Applist applications={financeapps} />
      </div>
    </div>
  );
};

export default page;
