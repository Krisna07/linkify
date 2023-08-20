"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiGrid, BiLinkExternal, BiLinkAlt } from "react-icons/bi";
interface SocialmediacardProps {
  item: any;
  list: boolean;
}

export default function Socialmediacard({ item, list }: SocialmediacardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link
      href={item.link}
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
          <p className="text-sm tablet:inline hidden">{item.link}</p>
          <p className="tablet:hidden block">
            {list ? item.link : item.link.split("/").slice(-1)}
          </p>
        </div>
      </div>
      <div className="grid gap-2 tablet:block hidden">
        <span>provider {item.link.split("/").slice(-1)}</span>
        <span className="flex items-center gap-2 tablet:inline hidden">
          <BiLinkAlt /> From {item.name.toLocaleLowerCase()}
        </span>
      </div>

      <div className="flex gap-2 place-items-center tablet:inline-block hidden ">
        <span className=""> {item.date}</span>
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
    </Link>
  );
}
