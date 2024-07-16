"use client";

import React, { useState, useEffect, useRef } from "react";
import { BiGrid } from "react-icons/bi";
import { FaBars, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import socialMediaData from "../../../../components/Dashboard_components/dummydata";

import Newpage from "../../../../components/Dashboard_components/newpage";
import Socialmediacard from "../socialmediacard";
import Button from "../../../../components/Global_components/Button";

export default function Home() {
  const [social, setSocial] = useState(socialMediaData);
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
    getSocial();
  }, [newItem]);

  return (
    <div className="w-full laptop:w-[1000px] px-2 h-screen flex flex-col gap-8 box-border overflow-hidden ">
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
              onClick={() => setAdd(!add)}
              className="w-fit py-2  px-4 "
              rightIcon={!add ? <FaChevronDown /> : <FaChevronUp />}
            />

            {add ? <Newpage item={setItem} errorHandler={errorHandler} /> : ""}
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
      {/* {<ToastConatiner message={error} />} */}
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
