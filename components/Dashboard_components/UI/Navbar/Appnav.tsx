"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { TbShare } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import Dropdown from "../components/dropdown";
import { NavProps } from "./MainNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface notificationProps {
  message: string;
}

const Appnav = ({ user }: NavProps) => {
  const [accountOptions, setAccountOptions] = useState<boolean>(false);
  const getUrl: string = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedItem = e.target as HTMLElement;
      const openItem = dropdownRef.current;
      if (openItem && !openItem.contains(clickedItem)) {
        setAccountOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [notification, setNotification] = useState<notificationProps[]>([]);
  // console.log(user);

  // if (!user.verified) {
  //   setNotification([...notification, { message: "Please verify your email" }]);
  // }

  return (
    <div className="w-full flex items-center justify-between box-border p-2  gap-4  top-0 ">
      <div className=" flex items-center py-2  gap-2">
        <Link
          href={"/dashboard"}
          className="h-6 w-6  rounded-full overflow-hidden  tablet:flex"
        >
          <Image
            src="/favicon.ico"
            width={10}
            height={10}
            alt={"icon"}
            className="w-full h-full cover rounded-full "
          />
        </Link>
        <span className="text-gray-400  tablet:flex">/</span>
        <div className="flex items-center gap-2 font-[600]">
          <div
            style={{ backgroundImage: user.image }}
            className={`h-6 w-6 rounded-full  grid place-items-center`}
          >
            <span className="text-black font-bold text-sm tablet:hidden">
              {user.username.split("")[0].toLocaleUpperCase("en-US")}
            </span>
          </div>
          <span className="hidden tablet:block"> {user.username}</span>
        </div>
        <div className="bg-primary hidden px-3  py-[2px] tablet:flex items-center rounded-full text-[10px] font-[600]">
          {user.verified ? "Verified" : "Not Verified"}
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-300 box-border  ">
        {getUrl.includes("dashboard") && (
          <>
            <div className="flex items-center gap-2 bg-dark/50 p-[2px] text-silver/50 hover:text-silver px-2 text-sm hover:shadow-[0_0_4px_0_white] transition-all duration-300  shadow-[0_0_2px_0_white]  rounded-[4px] hover:rounded-[12px]">
              <span className="hidden tablet:flex"> Share</span>
              <div className="w-4 h-4 text-tahiti rounded-full  text-[10px] grid place-items-center">
                <TbShare />
              </div>
            </div>

            <div className="flex items-center gap-1 text-silver/50 hover:text-silver p-[4px] px-2 hover:shadow-[0_0_4px_0_white] transition-all duration-300  shadow-[0_0_2px_0_white] rounded-[4px] hover:rounded-[12px] ">
              <BiBell />
              <div className="w-4 h-4 text-tahiti rounded-full  text-[10px] grid place-items-center">
                1
              </div>
            </div>
          </>
        )}
        <div ref={dropdownRef} className="w-full relative  z-[100]">
          <div
            style={{ backgroundImage: user.image }}
            className={`w-8 h-8   rounded-full relative`}
            onClick={() => setAccountOptions(!accountOptions)}
          ></div>
          <div
            className={`w-[300px] ${
              !accountOptions ? "translate-x-[400px]" : "translate-x-0"
            }  transition-all right-0  duration-300 min-w-fit min-h-fit absolute  top-[120%]   bg-tahiti text-dark z-[999] rounded overflow-hidden`}
          >
            <Dropdown user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appnav;
