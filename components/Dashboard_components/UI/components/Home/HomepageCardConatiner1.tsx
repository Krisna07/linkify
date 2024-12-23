import React, { useState } from "react";
import { FiTriangle } from "react-icons/fi";
import Counter from "../../../../Landing_components/Homepage/Features/Counter";
import { boardProps } from "../../../utils/Interfaces";

interface BoardItesm {
  boardList: boardProps[];
}
interface items {
  name: string;
  count: number;
}
const HomepageCardConatiner1 = ({ boardList }: BoardItesm) => {
  // const newBoards = boardList.find((board:boardProps)=>board.)

  const items: items[] = [
    {
      name: "Total Boards",
      count: boardList && boardList.length,
    },
    {
      name: "Active Cards",
      count: 0,
    },
    {
      name: "Toatl Visits",
      count: 0,
    },
  ];
  return (
    <div className="w-full flex flex-wrap gap-4 ">
      <div className="w-full flex items-center justify-between tablet:gap-8 gap-2 ">
        {" "}
        {items.map((item: items) => (
          <div className="w-full h-fit  p-4 shadow-bs rounded-lg">
            <div className=" tablet:grid gap-1 whitespace-nowrap">
              <span>{item.name}</span>
              <div className=" flex items-center gap-4">
                <span className="text-4xl">
                  <Counter number={item.count} size={50} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageCardConatiner1;
