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
  const templates = ["Snowy Mountains", "Sunset Surpries", "Blooming yellow"];
  return (
    <div className="w-full grid laptop:grid-cols-[200px_1fr] ">
      <div className="w-full flex flex-col p-4 gap-4 box-border border-r">
        <h2>Usage</h2>
        <div className="grid gap-4">
          <div>Choose Tempplates</div>
          <div className="grid gap-2">
            {templates.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-300">
                <div className="w-4 h-4 rounded-full bg-gray-300 grid place-items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="w-[300px] h-[500px] p-4 bg-gradient-to-tr from-slate-900 to-gray-500 rounded-lg flex flex-col place-items-center justify-center gap-4">
          <div className="w-[60px] h-[60px] bg-gradient-to-tr from-indigo-900 to-gray-500 rounded-full shadow-lg"></div>
          <div className="w-full grid gap-2">
            <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-black rounded-lg py-2">
              <FaFacebook />
              Facebook
            </div>
            <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-black rounded-lg py-2">
              <FaTwitter /> Twitter
            </div>
            <div className="flex items-center gap-2 justify-center hover:shadow-bs bg-black rounded-lg py-2">
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
  );
}
