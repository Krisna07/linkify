import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { boardProps } from "../../utils/Interfaces";
import { FaRightToBracket } from "react-icons/fa6";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

interface BoardProps {
  board: boardProps;
}

const Board = ({ board }: BoardProps) => {
  console.log(board);
  return (
    <div className="group w-full grid gap-4 p-2 shadow-bs border border-transparent rounded-md transition-all duration-500 hover:border-white/50 relative overflow-hidden">
      <div
        style={{ background: `${board.image}` }}
        className="w-full min-h-[200px] relative"
      ></div>
      <div className="grid gap-2">
        <span className="text-silver leading-[100%] text-2xl font-semibold">
          {board.title}
        </span>
        <span>{board.description}</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {board.tags &&
          board.tags.map((tag: string) => (
            <span key={tag} className="bg-tahiti text-dark px-2  rounded-md">
              #{tag}
            </span>
          ))}
      </div>
      <div className="grid gap-2">
        <span className="flex items-center gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <div className="flex items-center justify-between gap-2">
          <span>20 reviwer</span>
          <span>
            <BiEdit />
          </span>
        </div>
      </div>
      <div className="p-[12px] rounded-full overflow-hidden opacity-0 group-hover:opacity-[1] group-hover:translate-x-0 translate-x-full  transition-all duration-500 absolute right-4 top-4 bg-dark grid place-items-center">
        <BsArrowDownLeftSquare className="rotate-[180deg]" />
      </div>
    </div>
  );
};

export default Board;
