"use client";

import React, { useState, useEffect, useRef } from "react";

import ToastConatiner from "../../../../components/Global_components/Toast";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";
import Socialmediacard from "../../../../components/Dashboard_components/UI/components/socialmediacard";
import { BiChevronRight } from "react-icons/bi";
import { error } from "console";
import getBoards from "../../../../components/Dashboard_components/utils/Fetchbaords";
interface HomeProps {
  accounts: {
    username: string;
    type: string;
  };
  loading: boolean;
  error: string;
}
export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [newItem, setItem] = useState<newItems>({
    username: "",
    type: "",
  });

  const [boards, setBoards] = useState<any>([]);

  const HandleError = (err: string) => {
    setError(err);
  };

  //handling the error message
  // const errorHandler = (item: string) => {
  // console.log(item);
  // return setError(item);
  // console.log(error);
  // };
  // useEffect(() => {
  //   errorHandler(error);
  // }, [error]);

  //function to close and open the addnewitem form
  // const closeAppform = (item: boolean) => {
  //   return setAdd(item);
  // };

  //changing the page view
  const changeView = (view: boolean) => {
    setList(view);
  };
  // useEffect(() => {
  //   //checking if new account has been added and adding it to the accounts
  //   if (newItem) {
  //     setAccounts([newItem, ...accounts]);
  //     //clearing the form
  //     setItem({
  //       username: "",
  //       type: "",
  //     });
  //   }
  //   console.log(accounts);
  // }, []);

  //fecthing the social media accounts from database
  // const getBoard = async () => {
  //   try {
  //     //need to add  the api to the .env file
  //     const response = await fetch("/api/user/boards");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch boards");
  //     }
  //     const data = await response.json();
  //     setBoards(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching accounts:", error);
  //     setError("Failed to fetch accounts");
  //     setLoading(false);
  //   }
  // };

  console.log(getBoards());

  // useEffect(() => {
  //   closeAppform(false);
  //   // getSocial();
  //   localStorage.setItem("accounts", JSON.stringify(accounts));

  //   setError("Account added");
  // }, [newItem]);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="w-full laptop:max-w-[1200px] px-2  flex flex-col gap-8 box-border  ">
      <Homenav list={list} changeView={changeView} errorHandler={HandleError} />
      {loading ? (
        <div className=" grid place-items-center ">
          <div className="w-40 h-40 bg-white rounded-full relative grid place-items-center animate-spin-slow overflow-hidden ">
            <div className="absolute w-1/2 h-1/2 bg-primary right-1/2 z-0  "></div>
            <div className="w-36 h-36 bg-dark rounded-full z-10 grid place-items-center animate-none"></div>
          </div>
          <div className="absolute text-2xl">Loading...</div>
        </div>
      ) : (
        <div
          className={` grid ${
            list
              ? "grid-cols-1"
              : "laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1"
          } gap-8 relative z-10 text-[gray] `}
        >
          {boards.length > 0 ? (
            boards.map((item: any, index: number) => (
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
          ) : (
            <>No accounts please add accounts</>
          )}
        </div>
      )}
      {error ? <ToastConatiner message={error} /> : ""}
    </div>
  );
}
