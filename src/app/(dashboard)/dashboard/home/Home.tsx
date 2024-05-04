"use client";
import Button from "@/app/g_components/Button";
import React, { useState, useEffect, useRef } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import socialMediaData from "../../components/dummydata";

import Newpage from "../../components/newpage";
import Socialmediacard from "../socialmediacard";
import { ToastContainer, toast } from "react-toastify";
import { useOutsideClick } from "@/app/g_components/outsideclick";

export default function Home() {
  const [social, setSocial] = useState(socialMediaData);
  const [list, setList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>();
  const [add, setAdd] = useState(false);
  const [newItem, setItem] = useState<any>({
    username: "",
    type: "",
  });

  const [accounts, setAccounts] = useState<any>([]);

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
      const response = await fetch("/api/user/social"); // Assuming you have an endpoint to fetch accounts

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const data = await response.json();
      setAccounts(data.data); // Assuming the accounts data is nested under 'data' key
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setError("Failed to fetch accounts");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSocial();
    console.log(accounts);
  }, [newItem]);

  return (
    <div className="w-full laptop:w-[1000px] px-2 h-screen flex flex-col gap-8 box-border overflow-hidden ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-w-full grid tablet:grid-cols-[4fr_230px] grid-cols-1 tablet:gap-2 gap-4 p-2 box-border place-items-center ">
        <div className=" w-full flex items-center gap-4 px-4 py-2 bg-gray-800 box-border rounded-lg">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 px-2 outline-none w-[100%]"
          />
        </div>
        <div className="w-full   flex gap-4 items-center justify-between relative z-[10]">
          <div className="flex gap-2 p-1 bg-gray-800 text-[18px] rounded-lg text-gray-400 relative">
            <div
              className="p-2 relative z-20 rounded-md"
              onClick={() => setList(false)}
            >
              <BiGrid />
            </div>
            <div
              className="p-2  rounded-md relative z-20"
              onClick={() => setList(true)}
            >
              <FaBars />
            </div>
            <div
              className={`absolute w-1/2 h-[90%] bg-gray-900 top-[2px] ${
                !list ? "left-[1%]" : "left-[49%]"
              }  rounded-md z-10 transition-all`}
            ></div>
          </div>
          <div className="relative ">
            <Button
              children="Add new"
              variant={"primary"}
              size={"default"}
              onClick={() => setAdd(true)}
              className="w-fit py-2  px-4 "
              rightIcon={!add ? <FaChevronDown /> : <FaChevronUp />}
            />

            {add ? <Newpage item={setItem} add={closeAppform} /> : ""}
          </div>
        </div>
      </div>
      <div
        className={`min-w-full grid laptop:grid-cols-${
          list ? 1 : 3
        } grid-cols-${list ? 1 : 2}  gap-8 text-gray-400 `}
      >
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
      {/* <div className="w-full h-[100vh]"></div> */}
    </div>
  );
}
