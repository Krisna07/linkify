"use client";

import React, { useState, useEffect, useRef } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

import Socialmediacard from "../socialmediacard";
import Button from "../../../../components/Global_components/Button";
import ToastConatiner from "../../../../components/Global_components/Toast";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";

export default function Home() {
  const [list, setList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>();
  const [add, setAdd] = useState<boolean>(false);
  const [newItem, setItem] = useState<any>({
    username: "",
    type: "",
  });

  const [accounts, setAccounts] = useState<any>([]);

  const errorHandler = (error: string) => {
    setError(error);
  };

  useEffect(() => {
    if (newItem) {
      setAccounts([newItem, ...accounts]);
      setItem({
        username: "",
        type: "",
      });
    }
    console.log(accounts);
  }, []);

  const closeAppform = (item: boolean) => {
    return setAdd(item);
  };

  const getSocial = async () => {
    try {
      const response = await fetch("/api/user/social");
      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const data = await response.json();
      setAccounts(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setError("Failed to fetch accounts");
      setLoading(false);
    }
  };

  useEffect(() => {
    closeAppform(false);
    getSocial();
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [newItem]);

  return (
    <div className="w-full laptop:max-w-[1200px] px-2 h-screen flex flex-col gap-8 box-border overflow-hidden ">
      <Homenav />
      <div className={` flex flex-wrap gap-8 text-[gray] `}>
        {loading ? (
          <div>Loading</div>
        ) : (
          accounts &&
          accounts.map((item: any, index: number) => (
            <div key={index} className="grid gap-2 p-2">
              {list ? (
                <div className="font-semibold text-white">
                  {item.type}/{item.username}
                </div>
              ) : (
                ""
              )}
              <Socialmediacard item={item} list={list} />
            </div>
          ))
        )}
      </div>
      {<ToastConatiner message={error} />}
      {/* {
        <div
          className={`w-fit text-sm font-semibold gap-2 ${
            error ? "right-[10px] opacity-1" : "right-[-1000px] opacity-0"
          } transition-all  grid place-items-center fixed bottom-2   bg-red-300 rounded-lg overflow-hidden`}
        >
          <div className="w-full h-full p-4 flex items-center gap-2 relative ">
            <FiAlertCircle /> {error}
            <div
              style={error ? { width: "100%" } : { width: "0%" }}
              className={`h-[4px] transition-all duration-[4000ms] bg-green-600 absolute bottom-0 right-0`}
            ></div>
          </div>
        </div>
      } */}
    </div>
  );
}
