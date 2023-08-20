"use client";
import Button from "@/app/g_components/Button";
import React, { useState, useEffect } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Newpage from "../components/newpage";
import Socialmediacard from "./socialmediacard";
import { ToastContainer, toast } from "react-toastify";

interface SocialMediaItem {
  name: string;
  link: string;
  icon: JSX.Element;
  date: string;
}

export default function page({}) {
  const [socialMediaData, setSoialmediaData] = useState([
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
  ]);
  const [list, setList] = useState(false);

  const [newItem, setItem] = useState<any>({
    name: "",
    link: "",
    icon: "",
    date: "",
  });
  useEffect(() => {
    if (newItem.name) {
      setSoialmediaData([newItem, ...socialMediaData]);
      setItem({
        name: "",
        link: "",
        icon: "",
        date: "",
      });
    }
  }, [newItem]);

  const [add, setAdd] = useState(false);

  return (
    <div className="laptop:w-[1000px]  w-full grid gap-8 p-2 box-border overflow-hidden ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full grid tablet:grid-cols-[4fr_230px] grid-cols-1 tablet:gap-2 gap-4 p-2 box-border place-items-center ">
        <div className=" w-full flex items-center gap-4 px-4 py-2 bg-gray-800 box-border rounded-lg">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 px-2 outline-none w-[100%]"
          />
        </div>
        <div className="w-full   flex gap-4 items-center justify-between relative z-[10]">
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
          <div className="relative ">
            <Button
              children="Add new"
              variant={"primary"}
              size={"default"}
              onClick={() => setAdd(!add)}
              className="w-fit py-2  px-4 "
              rightIcon={!add ? <FaChevronDown /> : <FaChevronUp />}
            />

            {add ? (
              <Newpage
                item={setItem}
                add={setAdd}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-full grid laptop:grid-cols-${list ? 1 : 3} grid-cols-${
          list ? 1 : 2
        }  gap-8 text-gray-400`}>
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
            <Socialmediacard
              item={...item}
              list={list}
            />
          </div>
        ))}
      </div>
      <div className="w-full h-[100vh]"></div>
    </div>
  );
}
