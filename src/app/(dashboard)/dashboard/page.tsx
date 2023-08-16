"use client";
import Button from "@/app/g_components/Button";
import React, { useState, useEffect } from "react";
import { BiGrid, BiLinkExternal, BiLinkAlt } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Newpage from "../components/newpage";
import { IconType } from "react-icons/lib";

interface SocialMediaItem {
  name: string;
  link: string;
  icon: JSX.Element;
  date: string;
}

function SocialmediaCard(item: any, list: boolean) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`w-full p-4 bg-gray-800 rounded-lg transition-all ${
        list ? "flex justify-between" : "grid"
      } gap-4 hover:shadow-bs relative`}
      key={item.name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 shadow-bs rounded-full grid place-items-center">
          {item.icon}
        </div>
        <div className="grid">
          <h2 className="text-white text-[18px]">{item.name}</h2>
          <p className="text-sm">{item.link}</p>
        </div>
      </div>
      <div className="grid gap-2">
        <span>provider {item.link.split("/").slice(-1)}</span>
        <span className="flex items-center gap-2">
          <BiLinkAlt /> From {item.name.toLocaleLowerCase()}
        </span>
      </div>
      <div className="flex gap-2 place-items-center">
        {item.date}
        {list ? (
          ""
        ) : (
          <div className="p-2  rounded-full flex gap-2 items-center">
            via {item.icon}
          </div>
        )}
      </div>
      <div
        className="p-2 absolute rounded-full bg-white right-0 transition-all"
        style={{ opacity: hover ? "1" : "0" }}>
        <BiLinkExternal />
      </div>
    </div>
  );
}

export default function page({}: pageProps) {
  const socialMediaData = [
    {
      name: "Twitter",
      link: "https://twitter.com/bigboy-21",

      date: "2023-08-14",
      icon: <FaTwitter color="#1DA1F2" />, // Using FaTwitter icon component
    },
    {
      name: "Instagram",
      link: "https://instagram.com/lostland",
      date: "2023-08-14",
      icon: <FaInstagram color="#C13584" />, // Using FaInstagram icon component
    },
    {
      name: "Facebook",
      link: "https://facebook.com/adam_bolt",

      date: "2023-08-14",
      icon: <FaFacebook color="#1877F2" />, // Using FaFacebook icon component
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/adam.bolt",

      date: "2023-08-14",
      icon: <FaLinkedin color="#0A66C2" />, // Using FaLinkedin icon component
    },
    {
      name: "YouTube",
      link: "https://youtube.com/codecamp",

      date: "2023-08-14",
      icon: <FaYoutube color="#FF0000" />, // Using FaYoutube icon component
    },
  ];
  const [list, setList] = useState(false);

  const [newItem, setItem] = useState({
    name: "",
    link: "",
    icon: "",
    date: "",
  });
  newItem ? socialMediaData.push(newItem) : "";

  const [add, setAdd] = useState(false);
  return (
    <div className="w-full grid gap-8 ">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-[80%] flex items-center gap-4 px-4 py-2 bg-gray-800 rounded-lg">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 px-2 outline-none"
          />
        </div>
        <div className="flex gap-2 p-1 bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
          <div
            className="p-2 relative z-20 rounded-md"
            onClick={() => setList(false)}>
            <BiGrid />
          </div>
          <div
            className="p-2  rounded-md relative z-20"
            onClick={() => setList(true)}>
            <FaBars />
          </div>
          <div
            className={`absolute w-1/2 h-[90%] bg-gray-900 top-[2px] ${
              !list ? "left-[1%]" : "left-[49%]"
            }  rounded-md z-10 transition-all`}></div>
        </div>
        <div
          className="relative"
          onClick={() => setAdd(!add)}>
          <Button
            children="Add new"
            variant={"primary"}
            size={"default"}
            className="w-fit py-2  px-4"
            rightIcon={!add ? <FaChevronDown /> : <FaChevronUp />}
          />
          {add ? <Newpage item={setItem} /> : ""}
        </div>
      </div>
      <div
        className={`grid laptop:grid-cols-${list ? 1 : 3} tablet:grid-cols-${
          list ? 1 : 3
        } gap-8 text-gray-400`}>
        {socialMediaData.map((item: any) => (
          <div
            key={item.name}
            className="grid gap-2">
            {list ? (
              <div className="font-semibold text-white">
                {item.name}/{item.link.split("/").splice(-1)}
              </div>
            ) : (
              ""
            )}
            {SocialmediaCard(item, list)}
          </div>
        ))}
      </div>
      <div className="w-full h-[100vh]"></div>
    </div>
  );
}
