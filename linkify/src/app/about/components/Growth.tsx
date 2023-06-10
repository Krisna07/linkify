import React from "react";

const Growth = () => {
  return (
    <div className="md:w-[60%] md:flex  grid align-items-center justify-between gap-8 relative p-4 box-border">
      <div className="w-[600px] h-[600px] absolute bg-sky-500 rounded-full z-[-1] grid place-items-center -left-40 -top-80">
        <div className="w-[590px] h-[590px] rounded-full bg-white"></div>
      </div>
      <div className="w-[200px] h-[200px] absolute bg-yellow-500 rounded-full z-[-1] grid place-items-center right-0 -bottom-40">
        <div className="w-[190px] h-[190px] rounded-full bg-white"></div>
      </div>
      <div className="text-4xl font-bold grid gap-4 underline leading-relaxed">
        We drive growth. <br /> Together.
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <div className="p-4 shadow-bs bg-white">
          <div className="text-xl font-bold">57,000+</div>
          <div className="text-slate-700">Regestered Users</div>
        </div>
        <div className="p-4 shadow-bs">
          <div className="text-xl font-bold">$33 Million</div>
          <div className="text-slate-700">Affiliated Commissions</div>
        </div>{" "}
        <div className="text-xl p-4 shadow-bs">
          <div className="font-bold">600,000+</div>
          <div className="text-slate-700">Requests Daily</div>
        </div>{" "}
        <div className="text-xl p-4 shadow-bs">
          <div className="font-bold">10,000+</div>
          <div className="text-slate-700">Linked Tracked</div>
        </div>{" "}
        <div className="text-xl p-4 shadow-bs">
          <div className="font-bold">1.1 Million</div>
          <div className="text-slate-700">Linked Generated</div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
