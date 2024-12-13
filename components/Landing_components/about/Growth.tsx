import React from "react";
import { FaEthereum } from "react-icons/fa6";
import Button from "../../Global_components/Button";

const Growth = () => {
  return (
    <div className="py-20 w-full  grid place-items-center   justify-center  relative p-4 box-border divide-y-2  ">
      {/* <div className="w-[600px] h-[600px] absolute bg-sky-500 rounded-full z-[-1] grid place-items-center laptop:-left-40  -top-80">
        <div className="w-[590px] h-[590px] rounded-full border "></div>
      </div>
      <div className="w-[200px] h-[200px] absolute bg-yellow-500 rounded-full z-[-1] grid place-items-center right-0 -bottom-40">
        <div className="w-[190px] h-[190px] rounded-full border"></div>
      </div> */}
      <div className=" text-4xl flex items-center  border">
        <FaEthereum className="animate-pulse -tablet:translate-x-[18px] -translate-x-[15px] " />
        <span className=" font-bold text-black/75  gap-4 underline leading-[120%] p-4">
          We drive growth together
        </span>
        <FaEthereum className="animate-pulse tablet:translate-x-[18px] translate-x-[15px] " />
      </div>
      <div className="laptop:self-start tablet:w-[150%]   grid grid-cols-2    ">
        <div className=" p-4 border  ">
          <div className="text-xl font-bold">57,000+</div>
          <div className="text-slate-700">Regestered Users</div>
        </div>
        <div className="p-4 border ">
          <div className="text-xl font-bold">$33 Million</div>
          <div className="text-slate-700">Affiliated Commissions</div>
        </div>{" "}
        <div className="text-xl p-4 border ">
          <div className="font-bold">600,000+</div>
          <div className="text-slate-700">Requests Daily</div>
        </div>{" "}
        <div className="text-xl p-4 border ">
          <div className="font-bold">10,000+</div>
          <div className="text-slate-700">Linked Tracked</div>
        </div>{" "}
        <div className="text-xl p-4 border ">
          <div className="font-bold">1.1 Million</div>
          <div className="text-slate-700">Linked Generated</div>
        </div>
        <div className="text-xl p-4 border ">
          <Button
            children="More"
            variant={"primary"}
            size={"lg"}
            icon={false}
            className="bg-white text-dark hover:-translate-y-[1px] hover:shadow-[2px_2px_0_2px_white] w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Growth;
