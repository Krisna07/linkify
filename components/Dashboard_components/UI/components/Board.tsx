import React from "react";
import { FaStar } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { boardProps } from "../../utils/Interfaces";
import { Span } from "next/dist/trace";

interface BoardProps {
  board: boardProps;
}

const Board = ({ board }: BoardProps) => {
  return (
    <div className="w-full grid gap-4 p-2 shadow-bs rounded-md ">
      <div
        style={{ background: `${board.image}` }}
        className="w-full min-h-[200px] "
      ></div>
      <div className="grid gap-2">
        <span className="text-silver leading-[100%] text-2xl font-semibold">
          {board.title}
        </span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          expedita blanditiis tenetur.
        </span>
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
            <TbReportAnalytics />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Board;
