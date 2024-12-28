"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TbShare } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import Dropdown from "../components/dropdown";
import { NavProps } from "./MainNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Counter from "../../../Landing_components/Homepage/Features/Counter";
import useOutsideClick from "../../../../lib/outsideclick";
import { fetchVerificationData } from "../../utils/FetchDatas";

import Verification from "./Verification";
import { VerificationProps } from "../../utils/Interfaces";
import { HandleNewCode, handleVerification } from "../../utils/verify";

const Appnav = ({ user }: NavProps) => {
  const [accountOptions, setAccountOptions] = useState(false);
  const [verification, setVerification] = useState<VerificationProps | null>(
    null
  );
  const getUrl = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(dropdownRef, () => setAccountOptions(false));

  const updateVerificationData = async () => {
    await fetchVerificationData().then((response: any) => {
      const data = response.data;
      return setVerification({
        isVerified: data.isVerified,
        isExpired: data.isExpired,
        expiryTime: data.expiryTime,
      });
    });
  };

  useEffect(() => {
    updateVerificationData();
  }, [HandleNewCode, handleVerification]);

  return (
    <div className="w-full flex items-center justify-between px-4 py-1 gap-4">
      <div className="flex items-center py-2 gap-2 ">
        <Link
          href="/dashboard"
          className="h-6 w-6 rounded-full overflow-hidden"
        >
          <Image
            src="/favicon.ico"
            width={10}
            height={10}
            alt="icon"
            className="w-full h-full cover rounded-full"
          />
        </Link>
        <span className="text-gray-400">/</span>
        <div className="flex items-center gap-2 font-semibold">
          <div
            style={{ backgroundImage: user.image }}
            className="h-6 w-6 rounded-full grid place-items-center"
          >
            <span className="text-black font-bold text-sm">
              {user.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="hidden tablet:block">{user.username}</span>
        </div>
        {verification && (
          <Verification
            verification={verification}
            user={user}
            updateVerificationData={updateVerificationData}
          />
        )}
      </div>
      <div className="flex items-center gap-4 text-gray-300">
        {getUrl.includes("dashboard") && (
          <>
            <ActionButton icon={<TbShare />} label="Share" />
            <ActionButton
              icon={<BiBell />}
              label="Notifications"
              counter={<Counter number={1} size={12} />}
            />
          </>
        )}
        <AccountDropdown
          user={user}
          accountOptions={accountOptions}
          setAccountOptions={setAccountOptions}
          dropdownRef={dropdownRef}
        />
      </div>
    </div>
  );
};

const ActionButton = ({
  icon,
  label,
  counter,
}: {
  icon: React.ReactNode;
  label: string;
  counter?: React.ReactNode;
}) => (
  <div className="flex items-center gap-2 bg-accent px-2 py-1  text-silver/50 hover:text-silver rounded-[8px] hover:rounded-[9999px] transition-all duration-300">
    {counter}
    <span className="hidden tablet:flex text-sm">{label}</span>
    <div className="w-4 h-4 text-tahiti rounded-full grid place-items-center">
      {icon}
    </div>
  </div>
);

const AccountDropdown = ({
  user,
  accountOptions,
  setAccountOptions,
  dropdownRef,
}: any) => (
  <div ref={dropdownRef} className="relative z-[200]  ">
    <div
      style={{ backgroundImage: user.image }}
      className="w-8 h-8 rounded-full"
      onClick={() => setAccountOptions(!accountOptions)}
    />
    <div
      className={`absolute bg-dark text-silver/75 right-0 top-[120%] w-[300px] transition-all duration-300 ${
        accountOptions ? "translate-x-0" : "translate-x-[400px]"
      }`}
    >
      <Dropdown user={user} />
    </div>
  </div>
);

export default Appnav;
