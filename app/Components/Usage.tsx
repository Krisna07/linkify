import React from "react";

const Usage = () => {
  return (
    <div className=" box-borde py-16 lg:flex flex-row grid place-items-center gap-8">
      <div className="lg:w-1/2 h-[fit-content] flex items-center gap-4">
        <div className="w-1/2 flex-col flex gap-2 font-[600]">
          <span className="bg-gray-500/25  px-4 py-2 rounded hover:bg-gray-500 hover:border-l-2 hover:border-red-500">
            Get your key
          </span>
          <span className="bg-gray-500/25  px-4 py-2 hover:bg-gray-500 hover:border-l-2 hover:border-red-500 rounded">
            Add links
          </span>
          <span className="bg-gray-500/25  px-4  py-2 hover:bg-gray-500 hover:border-l-2 hover:border-red-500 rounded">
            Share{" "}
          </span>
          <span className="bg-gray-500/25  px-4  py-2 hover:bg-gray-500 hover:border-l-2 hover:border-red-500 rounded">
            View insights
          </span>
        </div>
        <div className="w-1/2 min-h-[150px] bg-gray-100 hover:shadow-lg border-l-2 border-red-300 box-border p-4 text-center flex flex-col items-center justify-center rounded">
          Here is your link key : <br />
          <span className="font-[600]"> $66756hhyqkey****</span>
        </div>
      </div>
      <div className="lg:w-1/2 h-[fit-content] flex items-center gap-4">
        <div className="grid gap-4">
          <h3 className="font-[600] text-lg">Lorem, ipsum</h3>
          <h2 className="font-[800] text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            quia porro fugit nobis dolorum itaque?
          </p>
        </div>
        <div className="w-1/2 h-48 bg-gray-100 rounded text-center">
          Image goes here <br />
          200X200
        </div>
      </div>
    </div>
  );
};

export default Usage;
