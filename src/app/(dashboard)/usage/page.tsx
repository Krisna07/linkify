import Button from "@/app/g_components/Button";
import React from "react";
import {
  FaChevronCircleRight,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

interface pageProps {}

export default function page({}: pageProps) {
  const templates = ["Snowy Mountains", "Sunset Surprise", "Blooming yellow"];
  return (
    <div className="w-full grid  laptop:grid-cols-[200px_1fr] ">
      <div className="w-full flex laptop:flex-col p-4 gap-4 box-border laptop:border-r  border-b">
        <h2 className="text-xl font-[600]">Usage</h2>
        <div className="laptop:grid flex gap-4">
          <div className="laptop:grid hidden">Choose Templates</div>
          <div className="laptop:grid flex gap-2">
            {templates.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-300 w-fit">
                <div className="w-[10px] h-[10px] rounded-full bg-gray-300 grid place-items-center">
                  <div className="w-[8px] h-[8px] rounded-full bg-gray-800"></div>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid place-items-center gap-8">
        <div className="w-full p-4 text-lg font-[600] border-b">
          Snowy Mountains
        </div>
        <div className="tablet:flex grid gap-4">
          <div className="w-[300px] h-[500px] p-4 bg-gradient-to-tr from-gray-600 to-slate-500 rounded-lg flex flex-col place-items-center justify-center gap-4 animate-gradient">
            <div className="w-[60px] h-[60px] bg-gradient-to-tr from-gray-400 to-gray-800 rounded-full shadow-lg"></div>
            <div className="w-full grid gap-2">
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-blue-600 rounded-lg py-2">
                <FaFacebook />
                Facebook
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs  bg-sky-600 rounded-lg py-2">
                <FaTwitter /> Twitter
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-gradient-to-tr from-indigo-600 to-red-200 rounded-lg py-2">
                <FaInstagram /> Instagram
              </div>
            </div>
            <Button
              children="More"
              variant={"primary"}
              size={"sm"}
              rightIcon={<FaChevronDown />}
            />
          </div>
          <div className="w-[300px] h-[500px] p-4 bg-gradient-to-tr from-yellow-600 to-red-500 rounded-lg flex flex-col place-items-center justify-center gap-4 animate-gradient">
            <div className="w-[60px] h-[60px] bg-gradient-to-tr from-gray-400 to-gray-800 rounded-full shadow-lg"></div>
            <div className="w-full grid gap-2">
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-blue-600 rounded-lg py-2">
                <FaFacebook />
                Facebook
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs  bg-sky-600 rounded-lg py-2">
                <FaTwitter /> Twitter
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-gradient-to-tr from-indigo-600 to-red-200 rounded-lg py-2">
                <FaInstagram /> Instagram
              </div>
            </div>
            <Button
              children="More"
              variant={"primary"}
              size={"sm"}
              rightIcon={<FaChevronDown />}
            />
          </div>
          <div className="w-[300px] h-[500px] p-4 bg-gradient-to-tr from-yellow-800 to-gray-500 rounded-lg flex flex-col place-items-center justify-center gap-4 animate-gradient">
            <div className="w-[60px] h-[60px] bg-gradient-to-tr from-gray-400 to-gray-800 rounded-full shadow-lg"></div>
            <div className="w-full grid gap-2">
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-blue-600 rounded-lg py-2">
                <FaFacebook />
                Facebook
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs  bg-sky-600 rounded-lg py-2">
                <FaTwitter /> Twitter
              </div>
              <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-gradient-to-tr from-indigo-600 to-red-200 rounded-lg py-2">
                <FaInstagram /> Instagram
              </div>
            </div>
            <Button
              children="More"
              variant={"primary"}
              size={"sm"}
              rightIcon={<FaChevronDown />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
