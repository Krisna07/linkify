"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TbShare } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import Dropdown from "../components/dropdown";
import { NavProps } from "./MainNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Timer from "../../utils/Timer";
import Counter from "../../../Landing_components/Homepage/Features/Counter";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Verify from "../Forms/verificationForm/Verify";
import useOutsideClick from "../../../../lib/outsideclick";
import { fetchVerificationData } from "../../utils/FetchDatas";

interface NotificationProps {
  message: string;
}

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  exceeded: boolean;
}

export interface VerificationProps {
  verificationCode?: number | null;
  isVerified: boolean;
  isExpired: boolean;
  expiryTime: number;
}

const Appnav = ({ user }: NavProps) => {
  const [accountOptions, setAccountOptions] = useState<boolean>(false);
  const [verification, setVerification] = useState<VerificationProps | null>(
    null
  );
  const [time, setTime] = useState<Time | null>(null);

  const getUrl = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timestampRef = useRef(user.timestamp);
  const memoizedUser = useMemo(() => user, [user.id]);

  useOutsideClick(dropdownRef, () => setAccountOptions(false));

  useEffect(() => {
    timestampRef.current = memoizedUser.timestamp;
  }, [memoizedUser.timestamp]);

  useEffect(() => {
    const updateTimer = () => {
      const timeValue = Timer(timestampRef.current as number);
      setTime(timeValue);
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchVerificationData().then((res) => {
      const verificationData = res.data;
      setVerification({
        verificationCode: verificationData.code || null,
        isVerified: verificationData.isVerified,
        isExpired: verificationData.isExpired, // Added missing property
        expiryTime: verificationData.timeSinceLastUpdate, // Added missing property
      });
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-between box-border p-2 gap-4 top-0">
      <div className="flex items-center py-2 gap-2">
        <Link
          href="/dashboard"
          className="h-6 w-6 rounded-full overflow-hidden tablet:flex"
        >
          <Image
            src="/favicon.ico"
            width={10}
            height={10}
            alt="icon"
            className="w-full h-full cover rounded-full"
          />
        </Link>
        <span className="text-gray-400 tablet:flex">/</span>
        <div className="flex items-center gap-2 font-[600]">
          <div
            style={{ backgroundImage: user.image }}
            className="h-6 w-6 rounded-full grid place-items-center"
          >
            <span className="text-black font-bold text-sm tablet:hidden">
              {user.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="hidden tablet:block">{user.username}</span>
        </div>
        {verification && !verification.isVerified && (
          <>
            <div>
              {verification?.isVerified ? (
                <RiVerifiedBadgeFill color="skyblue" />
              ) : (
                <Verify user={user} verification={verification} />
              )}
            </div>
            {!verification?.isVerified && time && (
              <div
                className={`${
                  time.exceeded ? "bg-[red]/75" : "bg-accent"
                } px-3 cursor-pointer group relative py-[2px] gap-1 flex items-center justify-center rounded hover:rounded-[8px] transition-all duration-500 text-[10px] font-[600]`}
              >
                {time.exceeded ? (
                  <span className=" -translate-y-[1px]">-</span>
                ) : (
                  ""
                )}
                <Counter number={time.hours} size={12} />:
                <Counter number={time.minutes} size={12} />:
                <Counter number={time.seconds} size={12} />
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-4 text-gray-300 box-border">
        {getUrl.includes("dashboard") && (
          <>
            <div className="flex items-center gap-2 bg-dark/50 p-[2px] text-silver/50 hover:text-silver px-2 text-sm hover:shadow-[0_0_4px_0_white] transition-all duration-300 shadow-[0_0_2px_0_white] rounded-[4px] hover:rounded-[12px]">
              <span className="hidden tablet:flex">Share</span>
              <div className="w-4 h-4 text-tahiti rounded-full text-[10px] grid place-items-center">
                <TbShare />
              </div>
            </div>
            <div className="flex items-center gap-1 text-silver/50 hover:text-silver p-[4px] px-2 hover:shadow-[0_0_4px_0_white] transition-all duration-300 shadow-[0_0_2px_0_white] rounded-[4px] hover:rounded-[12px]">
              <BiBell />
              <div className="w-4 h-4 text-tahiti rounded-full text-[10px] grid place-items-center">
                <Counter number={1} size={12} />
              </div>
            </div>
          </>
        )}
        <div ref={dropdownRef} className="w-full relative z-[100]">
          <div
            style={{ backgroundImage: user.image }}
            className="w-8 h-8 rounded-full relative"
            onClick={() => setAccountOptions(!accountOptions)}
          ></div>
          <div
            className={`w-[300px] ${
              !accountOptions ? "translate-x-[400px]" : "translate-x-0"
            } transition-all right-0 duration-300 min-w-fit min-h-fit absolute top-[120%] bg-tahiti text-dark z-[999] rounded overflow-hidden`}
          >
            <Dropdown user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appnav;
