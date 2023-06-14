"use client";
import React, { useState } from "react";
import { BiDoughnutChart, BiLoader, BiSearch } from "react-icons/bi";
import { BsTiktok } from "react-icons/bs";
import {
  FaAirbnb,
  FaAmazon,
  FaDiscord,
  FaDollarSign,
  FaDropbox,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaPaypal,
  FaPinterestP,
  FaRedditAlien,
  FaRedditSquare,
  FaSearch,
  FaSkype,
  FaSlackHash,
  FaSnapchatGhost,
  FaTiktok,
  FaTwitch,
  FaUber,
  FaWhatsapp,
  FaWikipediaW,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";

import { RiNetflixFill } from "react-icons/ri";
import Button from "../Landingpage/Components/ui/Button";

const page = () => {
  const apps = [
    {
      name: "YouTube",
      des: "Watch and share videos",
      logo: <FaYoutube color="white" />,
      accent: "red-500",
    },
    {
      name: "TikTok",
      des: "Create and discover short videos",
      logo: <FaTiktok color="white" />,
      accent: "slate-900",
    },
    {
      name: "Reddit",
      des: "Join the online community",
      logo: <FaRedditAlien color="white" />,
      accent: "orange-600",
    },
    {
      name: "Netflix",
      des: "Watch movies and shows online",
      logo: <RiNetflixFill color="red" />,
      accent: "red-700",
    },
    {
      name: "Facebook",
      des: "Connect with friends and family",
      logo: <FaFacebookF color="white" />,
      accent: "blue-400",
    },
    {
      name: "Amazon",
      des: "Shop online for anything",
      logo: <FaAmazon color="black" />,
      accent: "white",
    },
    {
      name: "LinkedIn",
      des: "Build your professional network",
      logo: <FaLinkedinIn color="white" />,
      accent: "sky-600",
    },
    {
      name: "Snapchat",
      des: "Send and receive fun snaps",
      logo: <FaSnapchatGhost color="white" />,
      accent: "yellow-300",
    },
    {
      name: "Pinterest",
      des: "Discover and save ideas",
      logo: <FaPinterestP color="white" />,
      accent: "red-600",
    },
    {
      name: "Discord",
      des: "Chat with your friends and communities",
      logo: <FaDiscord color="purple" />,
      accent: "white",
    },
    {
      name: "WhatsApp",
      des: "Message and call securely",
      logo: <FaWhatsapp color="black" />,
      accent: "white",
    },

    {
      name: "Airbnb",
      des: "Find and book unique places to stay",
      logo: <FaAirbnb color="white" />,
      accent: "red-500",
    },
    {
      name: "Uber",
      des: "Get a ride or become a driver",
      logo: <FaUber color="white" />,
      accent: "black",
    },
    {
      name: "Twitch",
      des: "Watch and stream live games",
      logo: <FaTwitch color="white" />,
      accent: "purple-500",
    },
    {
      name: "Medium",
      des: "Read and write stories that matter",
      logo: <FaMediumM color="black" />,
      accent: "white",
    },
    {
      name: "GitHub",
      des: "Host and review code, manage projects and software",
      logo: <FaGithub color="white" />,
      accent: "black",
    },
    {
      name: "Slack",
      des: "Communicate and collaborate with your team",
      logo: <FaSlackHash color="white" />,
      accent: "black",
    },
    {
      name: "Dropbox",
      des: "Store and share your files online",
      logo: <FaDropbox color="white" />,
      accent: "black",
    },
    {
      name: "Wikipedia",
      des: "The free encyclopedia that anyone can edit",
      logo: <FaWikipediaW color="white" />,
      accent: "black",
    },
    {
      name: "PayPal",
      des: "Send and receive money online",
      logo: <FaPaypal color="white" />,
      accent: "blue-400",
    },
    {
      name: "Skype",
      des: "Make free video and voice calls",
      logo: <FaSkype color="white" />,
      accent: "blue-400",
    },
  ];
  const [showapp, setShowapp] = useState(false);
  return (
    <div className="w-full grid place-items-center gap-8 box-border overflow-hidden ">
      <div className="w-full  bg-sky-800 grid place-items-center">
        <div className="md:w-[80%] w-full text-rose-200 py-16 px-4 md:flex grid gap-4 items-center justify-center box-border">
          <div className="md:w-1/2 p-4 grid gap-8 box-boder">
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
      </div>
      <div className="w-[80%] grid gap-8 box-border">
        <div className="w-full box-border py-4 md:flex grid gap-8">
          <div className="md:w-1/2 w-full grid gap-4">
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
                <FaTiktok size="52" className="" />
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
                <p className="font-semibold">
                  Share your Tiktok on your Linkify
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid gap-8 box-border">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-2xl font-bold">Create and Share</h2>
            <button
              className=" font-semibold text-slate-800 cursor-pointer hover:text-sky-600"
              onClick={() => setShowapp(!showapp)}
            >
              + see {showapp ? 3 : ` more ${apps.length - 3}`} apps
            </button>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {apps.slice(0, showapp ? apps.length : 6).map((app) => (
              <div className="w-full flex gap-4 cursor-default" key={app.name}>
                <div
                  className={`bg-${app.accent} rounded text-3xl p-4 grid place-items-center shadow-bs`}
                >
                  {app.logo}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{app.name}</h2>
                  <p className="font-semibold">{app.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-200 grid place-items-center">
        <div className="md:w-60% p-4 md:flex items-center  gap-8">
          <div className="w-fit grid gap-4 ">
            <h2 className="text-6xl font-bold">Join our team</h2>
            <p className="text-xl font-semibold">We are expanding</p>
            <Button
              icon={true}
              children={"Register"}
              variant={"default"}
              className="w-fit"
            />
          </div>
          <div className="p-4">
            <div className="w-[400px] h-[400px] bg-gradient-to-r animate-text from-red-200 to-sky-300 rounded-[20px]  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
