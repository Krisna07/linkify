"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaCommentAlt, FaEye, FaHeart, FaTwitter } from "react-icons/fa";
import socialMediaData from "../../../../../components/Dashboard_components/dummydata";

interface pageProps {}

export default function page({}: pageProps) {
  const route = usePathname();
  const account = route.split("/").splice(-1)[0];

  const thisAccount = socialMediaData.filter(
    (item) => item.link.split("/").splice(-1)[0] === account
  )[0];

  const thisNav = route.split("/").splice(-2)[0];

  return (
    <div className=" gap-4 p-4 flex flex-col">
      <div className="">
        <h2 className="text-xl">{thisAccount.name}</h2>
        <p>{thisAccount.link.split("/").splice(-1)[0]}</p>
      </div>
      <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
        {thisAccount.posts.map((post: any) => (
          <div key={post.name} className="grid gap-2">
            <div className="w-full h-[200px]  bg-gradient-to-tr from-indigo-300 to-red-400 rounded-lg relative ">
              <div className="absolute bottom-0 w-full p-2 text-black font-[600] grid">
                <div className="flex gap-4">
                  {post.likes && (
                    <span className="flex items-center gap-2">
                      <FaHeart color="red" />
                      {post.likes}
                    </span>
                  )}
                  {post.comments && (
                    <span className="flex items-center gap-2">
                      <FaCommentAlt />
                      {post.comments}
                    </span>
                  )}
                  {post.retweets && (
                    <span className="flex items-center gap-2">
                      <FaTwitter color="green" />
                      {post.retweets}
                    </span>
                  )}
                  {post.views && (
                    <span className="flex items-center gap-2">
                      <FaEye color="green" />
                      {post.views}
                    </span>
                  )}
                </div>
                <div className="font-[500] text-sm">
                  {post.caption || post.content}
                </div>
              </div>
            </div>
            <div>
              <h2>{post.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
