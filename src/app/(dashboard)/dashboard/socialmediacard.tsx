"use client";
import React, { useEffect, useState } from "react";
import { BiLinkExternal, BiLinkAlt } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import Link from "next/link";

interface SocialmediacardProps {
  item: {
    username: string;
    type: string;
    link: string;

    email: string;
    avatar: string;
    date: string;
    bio?: string;
  };
  list: boolean;
}
import { socialMediaArray } from "../components/newpage";

export default function Socialmediacard({ item, list }: SocialmediacardProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [icon, setIcon] = useState<any>();

  const handleClick = () => {
    setHover(!hover);
  };
  useEffect(() => {
    socialMediaArray.map((icon) => {
      if (item.type == icon.value.toLocaleLowerCase()) {
        return setIcon(icon.icon);
      }
    });
  }, []);

  // const renderLink = list ? item.link : item.link.split("/").slice(-1);

  // const renderMetrics = () => {
  //   const metrics = [
  //     "followers",
  //     "subscribers",
  //     "connections",
  //     "friends",
  //   ] as const;

  //   return metrics.map((metric) =>
  //     item[metric] !== undefined ? (
  //       <span key={metric} className="flex items-center">
  //         {metric}: {item[metric]}
  //       </span>
  //     ) : null
  //   );
  // };

  // const renderAdditionalInfo = () => {
  //   return;
  // };
  const link = "https://www." + item.type + ".com" + "/" + item.username;
  return (
    <Link
      // href={`dashboard/activity/${item.username}`}
      href={link}
      className={`w-full h-fit bg-gray-800 overflow-hidden rounded-lg transition-all ${
        list ? "flex justify-between" : "grid"
      } gap-4 hover:shadow-bs relative `}
      key={item.username}
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
    >
      <div className="flex items-center gap-2 px-4 p-2">
        <div className="w-8 h-8 shadow-bs rounded-full grid place-items-center">
          {icon}
        </div>
        <div className="grid">
          <h2 className="text-white text-[18px]">{item.username}</h2>
          <p className="text-sm tablet:inline hidden">{link}</p>
          {/* <p className="tablet:hidden block">{renderLink}</p> */}
        </div>
      </div>
      <div className="grid gap-2 tablet:block hidden px-4">
        {/* {renderMetrics()} */}
        <span className="gap-2 tablet:flex items-center hidden">
          <BiLinkAlt />{" "}
          <span className="flex items-center ">
            From {item.username.toLowerCase()}
          </span>
        </span>
      </div>
      {!list ? (
        <div className="w-full gap-2 tablet:flex flex-col text-left hidden ">
          <span className="px-4"> {item.date}</span>

          <div className="p-2 px-4 flex gap-4 items-center bg-gray-600 text-gray-100">
            <FaPen /> {item.bio}
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="p-2 absolute rounded-full bg-white right-0 transition-all"
        style={{ opacity: hover ? "1" : "0" }}
      >
        <BiLinkExternal />
      </div>
    </Link>
  );
}
