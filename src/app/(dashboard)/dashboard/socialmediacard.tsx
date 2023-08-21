"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiGrid, BiLinkExternal, BiLinkAlt } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
interface SocialmediacardProps {
  item: any;
  list: boolean;
}

export default function Socialmediacard({ item, list }: SocialmediacardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link
      href={`dashboard/activity/${item.link.split("/").slice(-1)}`}
      className={`w-full bg-gray-800 overflow-hidden  rounded-lg transition-all ${
        list ? "flex justify-between" : "grid"
      } gap-4 hover:shadow-bs relative`}
      key={item.name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex items-center gap-2 px-4 p-2">
        <div className="w-8 h-8 shadow-bs rounded-full grid place-items-center">
          {item.icon}
        </div>
        <div className="grid">
          <h2 className="text-white text-[18px]">{item.name}</h2>
          <p className="text-sm tablet:inline hidden">{item.link}</p>
          <p className="tablet:hidden block">
            {list ? item.link : item.link.split("/").slice(-1)}
          </p>
        </div>
      </div>
      <div className="grid gap-2 tablet:block hidden px-4">
        {item.followers ? <span>Followers : {item.followers}</span> : ""}
        {item.subscribers ? <span>Subscriber : {item.subscribers}</span> : ""}
        {item.connections ? <span>Connection : {item.connections}</span> : ""}
        <span className="flex items-center gap-2 tablet:flex hidden">
          <BiLinkAlt /> From {item.name.toLocaleLowerCase()}
        </span>
      </div>

      <div className="w-full gap-2  tablet:flex flex-col text-left hidden ">
        <span className="px-4"> {item.date}</span>
        {list ? (
          ""
        ) : (
          <div className="p-2 px-4  flex gap-4 items-center bg-gray-600 text-gray-100">
            <FaPen /> {item.bio}
          </div>
        )}
      </div>
      <div
        className="p-2 absolute rounded-full bg-white right-0 transition-all"
        style={{ opacity: hover ? "1" : "0" }}>
        <BiLinkExternal />
      </div>
    </Link>
  );
}
