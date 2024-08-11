import React, { useState } from "react";
import { FiTriangle } from "react-icons/fi";
import Counter from "../../../../Landing_components/Homepage/Features/Counter";

const HomepageCardConatiner1 = () => {
  const [count, setCount] = useState<number>(4);
  return (
    <div className="w-full flex flex-wrap gap-4 ">
      <div className="flex items-center gap-4 w-full">
        {" "}
        <div className="w-full h-fit  p-4 shadow-bs rounded-lg">
          <div className="grid gap-4">
            <span>Total Boards</span>
            <div className=" flex items-center gap-4">
              <span className="text-4xl">
                <Counter number={count} size={50} />
              </span>
              <div className="flex items-center gap-2">
                <span className="grid gap-[2px] place-items-center">
                  <FiTriangle className="" color="green" />
                  <FiTriangle className="rotate-180" color="red" />
                </span>
                <span className="text-primary -translate-y-2">1 new</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit  p-4 shadow-bs rounded-lg">
          <div className="grid gap-4">
            <span>Active Cards</span>
            <div className=" flex items-center gap-4">
              <span className="text-4xl">
                <Counter number={0} size={50} />
              </span>
              <div className="flex items-center gap-2">
                <span className="grid gap-[2px] place-items-center">
                  <FiTriangle className="" color="green" />
                  <FiTriangle className="rotate-180" color="red" />
                </span>
                <span className="text-primary -translate-y-2">1 new</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit  p-4 shadow-bs rounded-lg">
        <div className="grid gap-4">
          <span>Total Visitors</span>
          <div className=" flex items-center gap-4">
            <span className="shrink-1">
              <Counter number={102} size={50} />
            </span>
            <div className="flex items-center gap-2">
              <span className="grid gap-[2px] place-items-center">
                <FiTriangle className="" color="green" />
                <FiTriangle className="rotate-180" color="red" />
              </span>
              <span className="text-primary -translate-y-2">1 new</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCardConatiner1;
