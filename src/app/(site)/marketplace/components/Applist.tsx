"use client";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";

interface Applist {
  name: string;
  des: string;
  logo: any;
  accent: string;
  type: string;
}
const Applist = ({ applications }: any) => {
  const [showapp, setShowapp] = useState<boolean>(false);
  const title = applications[0].type;

  return (
    <div className="w-full grid gap-8 box-border">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-bold">{title.toUpperCase()}</h2>
        <button
          className=" font-semibold text-slate-800 cursor-pointer hover:text-sky-600 "
          onClick={() => setShowapp(!showapp)}>
          {showapp ? " less" : `+see more ${applications.length - 6}`} apps
        </button>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-fit bg-${applications[0].accent} text-[80px] p-4  shadow-bs`}>
            {applications[0].logo}
          </div>
          <div>
            <h2 className="text-xl font-[600]">{applications[0].name}</h2>
            <p>{applications[0].des}</p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 laptop:grid-cols-3 tablet:grid-cols-2 gap-4 ">
          {applications
            .slice(0, showapp ? applications.length : 6)
            .map((app: Applist) => (
              <div
                className="w-full flex items-center gap-4 cursor-default "
                key={app.name}>
                <div
                  className={`bg-${app.accent} rounded text-3xl p-4 grid place-items-center shadow-bs hover:scale-[1.05] transition`}>
                  {app.logo}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{app.name}</h2>
                  <p className="font-semibold text-sm">{app.des}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Applist;
