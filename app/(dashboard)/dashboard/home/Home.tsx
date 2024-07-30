"use client";

import React, { useState, useEffect, useRef } from "react";

import ToastConatiner from "../../../../components/Global_components/Toast";
import Homenav from "../../../../components/Dashboard_components/UI/Navbar/HomeNav";
import Socialmediacard from "../../../../components/Dashboard_components/UI/components/socialmediacard";
interface HomeProps {
  accounts: {
    username: string;
    type: string;
  };
  loading: boolean;
  error: string;
}
interface newItems {
  username: string;
  type: string;
}
export default function Home() {
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [add, setAdd] = useState<boolean>(false);
  const [newItem, setItem] = useState<newItems>({
    username: "",
    type: "",
  });

  const [accounts, setAccounts] = useState<any>([]);
  //handling the error message
  const errorHandler = (item: string) => {
    // console.log(item);
    return setError(item);
    // console.log(error);
  };
  useEffect(() => {
    errorHandler(error);
  }, [error]);

  //function to close and open the addnewitem form
  const closeAppform = (item: boolean) => {
    return setAdd(item);
  };

  //changing the page view
  const changeView = (item: boolean) => {
    return setList(item);
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
  // const getSocial = async () => {
  //   try {
  //     //need to add  the api to the .env file
  //     const response = await fetch("/api/user/social");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch accounts");
  //     }
  //     const data = await response.json();
  //     setAccounts(data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching accounts:", error);
  //     setError("Failed to fetch accounts");
  //     setLoading(false);
  //   }
  // };

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
    <div className="w-full laptop:max-w-[1200px] px-2 h-screen flex flex-col gap-8 box-border overflow ">
      <Homenav
        errorHandler={errorHandler}
        closeAppform={closeAppform}
        add={add}
        item={setItem}
        list={list}
        changeView={changeView}
      />
      <div
        className={` grid ${
          list
            ? "grid-cols-1"
            : "laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1"
        } gap-8 relative z-10 text-[gray] `}
      >
        {loading ? (
          <div>Loading....... please wait</div>
        ) : accounts ? (
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
        ) : (
          <div className="text-white">No accounts</div>
        )}
      </div>
      {<ToastConatiner message={error} />}
    </div>
  );
}
