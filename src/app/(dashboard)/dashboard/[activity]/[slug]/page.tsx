"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaChevronRight,
  FaCommentAlt,
  FaEye,
  FaHeart,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import socialMediaData from "../../../components/dummydata";

interface pageProps {}

export default function page({}: pageProps) {
  const route = usePathname();
  const account = route.split("/").splice(-1)[0];

  const thisAccount = socialMediaData.filter(
    (item) => item.link.split("/").splice(-1)[0] === account,
  )[0];
  console.log(thisAccount);

  return (
    <div className="w-full ">
      <div className="w-full border-b grid place-items-center sticky top-[140px] z-[40] bg-black">
        <div className="px-8 pb-8  w-full text-2xl font-[600] ">Activity</div>
      </div>
      <div className="grid tablet:grid-cols-2 relative z-10">
        <div className="tablet:w-fit  border-r tablet:grid flex hidden ">
          <span className="p-4 text-2xl">Filters</span>
          <div className=" w-fit p-4 tablet:grid flex gap-4">
            <select
              name=""
              id=""
              className="w-full h-fit box-border bg-gray-600 p-2 px-4 gap-2 grid rounded-full outline-none ">
              <option value="">Last 3 days</option>
              <option value="">Last 7 days</option>
              <option value="">Last month</option>
              <option value="">Last year</option>
            </select>
          </div>
          <div className="p-4 grid gap-4 ">
            <div className="flex gap-2 items-center leading-[120%] text-gray-400 text-xl">
              <FaChevronRight /> Type
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2 text-xl items-center bg-gray-800 p-2 px-4 rounded-lg text-gray-400">
                <FaSearch />
                <input
                  type="text"
                  placeholder="search types...."
                  className=" w-full bg-gray-800 outline-none border-none"
                />
              </div>
              <div className="flex items-center text-gray-400 gap-4">
                <input
                  type="checkbox"
                  className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                />
                Select all
              </div>
              <div className="w-full border border-gray-600 py-4 px-2 grid gap-4">
                <div className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Share
                </div>
                <div className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Deployments
                </div>
                <div className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Entertainment
                </div>
                <div className="flex items-center text-gray-400 gap-4">
                  <input
                    type="checkbox"
                    className="bg-gray-600 text-gray-400 w-4 h-4 p-2 "
                  />
                  Social media
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4">
          <div className="">
            <h2 className="text-xl">{thisAccount.name}</h2>
            <p>{thisAccount.link.split("/").splice(-1)[0]}</p>
          </div>
          <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
            {thisAccount.posts.map((post) => (
              <div key={post.name}>
                <div className="w-full h-[200px]  bg-gradient-to-tr from-indigo-300 to-red-100 rounded-lg relative">
                  <div className="absolute bottom-0 w-full p-2 text-black font-[600] flex gap-4">
                    <span className=" flex items-center  gap-2">
                      <FaHeart color="red" />
                      {post.likes}
                    </span>
                    {post.comments ? (
                      <span className=" flex items-center  gap-2">
                        <FaCommentAlt />
                        {post.likes}
                      </span>
                    ) : (
                      ""
                    )}
                    {post.retweets ? (
                      <span className=" flex items-center  gap-2">
                        <FaTwitter color="green" />
                        {post.retweets}
                      </span>
                    ) : (
                      ""
                    )}
                    {post.views ? (
                      <span className=" flex items-center  gap-2">
                        <FaEye color="green" />
                        {post.views}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
                  <h2>{post.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
