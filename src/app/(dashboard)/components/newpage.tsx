"use client";
import Button from "@/app/g_components/Button";
import { getCurrentUser } from "@/lib/session";
import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaPinterest,
  FaYoutube,
  FaReddit,
  FaTiktok,
  FaTumblr,
} from "react-icons/fa";

interface social {
  value: string;
  icon: JSX.Element;
}

export default function Newpage({ item, add }: any) {
  const [social, setSocial] = useState<string>("Facebook");
  const [username, setUsername] = useState<string>("");
  // const userId = getCurrentUser();
  // console.log(userId);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !social) {
      return console.log("no username ");
    }
    const newSocial = {
      username: username,
      type: social,
    };
    console.log(newSocial);
  };

  const socialMediaArray: social[] = [
    { value: "Facebook", icon: <FaFacebook /> },
    { value: "Twitter", icon: <FaTwitter /> },
    { value: "Instagram", icon: <FaInstagram /> },
    { value: "LinkedIn", icon: <FaLinkedin /> },
    { value: "Snapchat", icon: <FaSnapchat /> },
    { value: "Pinterest", icon: <FaPinterest /> },
    { value: "YouTube", icon: <FaYoutube /> },
    { value: "Reddit", icon: <FaReddit /> },
    { value: "TikTok", icon: <FaTiktok /> },
    { value: "Tumblr", icon: <FaTumblr /> },
  ];

  return (
    <form
      className="w-fit h-fit  absolute p-4 top-[120%] right-0  rounded-lg z-40 text-black bg-gray-300 grid gap-4 transition-all"
      onSubmit={submitForm}
    >
      <div className="w-[max-content] block font-semibold ">Add new social</div>
      <div className="w-full flex gap-2">
        {socialMediaArray.map(
          (item: social, index: React.Key | null | undefined) => (
            <label
              htmlFor=""
              className={`w-fit p-[2px] flex items-center text-lg relative ${
                social === item.value
                  ? "shadow-[0_0_2px_0_gray] bg-green-300"
                  : ""
              }`}
              key={index}
            >
              <input
                type="checkbox"
                name=""
                id=""
                value={item.value}
                className="absolute opacity-0 "
                onChange={() => setSocial(item.value)}
              />
              {item.icon}
            </label>
          )
        )}
      </div>
      <div>
        <label htmlFor="">Enter the username</label>
        <input
          type="text"
          name="username"
          placeholder="@username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full  outline-none bg-none px-2 p-1 bg-gray-300 border-bottom border-b-2 border-black focus:border-green-400"
        />
      </div>
      <Button variant={"default"} children="Add" size={"sm"} />
    </form>
  );
}
