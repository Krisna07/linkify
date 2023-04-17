import React from "react";

const Usage = () => {
  return (
    <div className=" box-borde py-16 flex flex-row">
      <div className="w-1/2 h-[fit-content] flex items-center gap-4">
        <div className="flex-col flex gap-2 font-[600]">
          <span className="bg-gray-500/25  px-4 py-2 ">Get your key</span>
          <span className="bg-gray-500/25  px-4 py-2">Add links</span>
          <span className="bg-gray-500/25  px-4  py-2">Share </span>
          <span className="bg-gray-500/25  px-4  py-2">View insights</span>
        </div>
        <div className="w-1/2 min-h-[150px] bg-gray-100 hover:shadow-lg border-l-2 border-red-300 box-border p-4 text-center flex flex-col items-center justify-center rounded">
          Here is your link key : <br />
          <span className="font-[600]"> $66756hhyqkey****</span>
        </div>
      </div>
      <div className="w-1/2 h-[fit-content] flex items-center gap-4">
        <div className="grid gap-4">
          <h3 className="font-[600] text-lg">Lorem, ipsum</h3>
          <h2 className="font-[800] text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            quia porro fugit nobis dolorum itaque?
          </p>
        </div>
        <div className="w-1/2 h-48 bg-gray-100 rounded"></div>
      </div>
    </div>
  );
};

export default Usage;
