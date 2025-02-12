import React from "react";
import { FaStar } from "react-icons/fa";
import { boardProps } from "../../utils/Interfaces";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import Image from "next/image";
// import Redirect from "../../utils/redirect";

import { useRouter } from "next/navigation";

interface BoardProps {
  board: boardProps;
}

const Board = ({ board }: BoardProps) => {
  const Route = useRouter();

  return (
    <div
      onClick={() => Route.push(`/dashboard/boards/${board.link}`)}
      className="group min-w-[300px] h-full grid gap-4 p-2 cursor-pointer shadow-bs border border-transparent rounded-md transition-all duration-500 hover:border-white/50 relative overflow-hidden"
    >
      <div
        style={{ background: `${board.boardColor}` }}
        className="w-full min-h-[200px] relative opacity-[.8] group-hover:opacity-100 transition-all duration-500 "
      >
        {board.image && (
          <Image
            src={`${board.image}`}
            alt={`${board.title + "_image"}`}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="grid gap-2">
        <span className="text-silver leading-[100%] text-2xl font-semibold capitalize">
          {board.title}
        </span>
        <span>{board.description}</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {board.tags.length > 0
          ? board.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-tahiti text-dark px-2  rounded-md"
              >
                #{tag}
              </span>
            ))
          : "No tags"}
      </div>
      <div className="grid gap-2">
        <span className="flex items-center gap-2 text-[yellow]/50">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <div className="flex items-center justify-between gap-2">
          <span>0 reviwer</span>
          {/* <span>
            <BiEdit className="hover:scale-125" />
          </span> */}
        </div>
      </div>
      <div className="p-[12px] rounded-full overflow-hidden opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 translate-x-full  transition-all duration-500 absolute right-4 top-4 bg-dark grid place-items-center">
        <BsArrowDownLeftSquare className="rotate-[180deg] " />
      </div>
    </div>
  );
};

export default Board;
