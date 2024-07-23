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
import Button from "../../Global_components/Button";
import Link from "next/link";
import Apps from "./appsdata";
import { IconType } from "react-icons/lib";
import Applist from "./components/Applist";
import Marquee from "react-fast-marquee";
import Multiappcard from "./components/Multiappcard";
interface appslist {
  name: string;
  des: string;
  logo: any;
  accent: string;
  type: string;
}

const Marketplace = () => {
  const [showapp, setShowapp] = useState(false);
  const apps = Apps;
  const creatorTools = Apps.filter((items) => items.type == "productive");
  const entertainmentTools = Apps.filter(
    (items) => items.type == "entertainment"
  );
  const socialMedia = Apps.filter((items) => items.type == "social media");
  const financeapps = Apps.filter(
    (items) => items.type == "shopping" || items.type == "finance"
  );

  return (
    <div className="w-full grid place-items-center gap-8 box-border overflow-hidden py-8 text-silver">
      <div className="w-full py-16 grid place-items-center ">
        <div className="laptop:w-[1024px] w-full text-rose-200 py-16 px-4 grid gap-4  place-items-center justify-center box-border">
          <h2 className="text-6xl font-bold  text-center ">
            Connect more <span className="text-silver">of </span>
            you
          </h2>

          <p className="text-4xl font-semibold text-center   justify-center ">
            You got a idea idea to share. <br />
            <span className="text-silver italic underline"> Linkify </span>{" "}
            &nbsp;it
          </p>
          <div className="w-full p-2 text-dark text-xl font-semibold  flex items-center justify-center gap-4 box-border">
            <input className="outline-none border-none w-fit bg-white rounded p-2" />
            <div className="p-3 bg-white rounded-full">
              {" "}
              <FaSearch size={20} className="bg-white text-primary" />
            </div>
          </div>

          {/* <div className="laptop:w-1/2 p-4 relative tablet:grid place-items-center hidden">
            <div className="w-[300px] h-[500px] relative skew-x-[-5deg] skew-y-[5deg] grid place-items-center  rounded shadow-bs bg-[yellow] p-4 place-items-center gap-2 ">
              <div className="grid  place-items-center gap-8">
                <div className="w-40 h-40 rounded-full bg-[rose] overflow-hidden ">
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1LzUwNC1meC0xMy1qb2IxNzU4XzEucG5n.png"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-primary">
                    Justin Styles
                  </h2>
                  <p className="font-[600]">Funk R&B</p>
                </div>
              </div>
              <div>
                <div className="w-full p-2 font-semibold text-center bg-rose-500 rounded-full  ">
                  Listen to <span className="text-accent">Justin Styles</span>
                </div>
                <div className="w-full p-2 text-center font-semibold bg-rose-500 rounded-full  ">
                  New Merch
                </div>
                <div className="w-full p-2 text-center bg-rose-500 font-semibold rounded-full  ">
                  Harvest Tour
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full bg-slate-200 grid gap-8 place-items-center py-16">
        <div className="w-full p-4 grid  place-items-center gap-8 text-center">
          <div className="text-center grid place-items-center gap-2 leading-[120%] ">
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
        </div>
        <div className="tablet:w-[1000px] px-4 box-border w-full grid place-items-center laptop:grid-cols-2 gap-4 text-dark">
          <div className="h-full relative grid  bg-gray-100 rounded-xl shadow-bs gap-2 bg-gradient-to-tr from-silver to-silver/50 animate-bg overflow-hidden ">
            <div className="p-4 grid gap-4 relative z-20 ">
              <h2 className="text-2xl  font-semibold">
                {" "}
                Link sharing have never been so easy
              </h2>
              <p className="">
                We help you connect seamlessly with your audience we are
                covering almost all the apps thats available.
              </p>
              <Button children="Browse Apps" variant={"default"} size={"sm"} />
            </div>
          </div>
          <div className="h-full relative grid  bg-gray-100 rounded-xl shadow-bs gap-2 bg-gradient-to-tr from-tahiti to-bermuda animate-bg overflow-hidden ">
            <div className="p-4 grid gap-4 relative z-20 ">
              <h2 className="w-full text-2xl font-semibold">Be creative</h2>
              <p className="">
                Create the links easy to choose and easy to share. User have
                freedom to place the link or sort them.
              </p>
              <Button children="Browse Apps" variant={"default"} size={"sm"} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-silver/80 grid place-items-center px-8 box-border text-dark">
        {" "}
        <div className="laptop:w-[1024px]   grid gap-8 box-border">
          {/* <div className="w-full box-border py-4 grid laptop:grid-cols-2  gap-8 px-4">
          <div className=" w-full grid gap-4 ">
            <div className="w-full p-4  bg-orange-600 rounded-[50px] grid place-items-center relative">
              <div className="p-4 rounded-full bg-rose-400 relative z-20">
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
                <p className="font-semibold text-sm">
                  Showcase your Reddit profile
                </p>
              </div>
            </div>
          </div>

          <Multiappcard />
        </div> */}

          <Applist applications={creatorTools} />
          <Applist applications={entertainmentTools} />
          <Applist applications={socialMedia} />
          <Applist applications={financeapps} />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
