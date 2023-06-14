"use client";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="md:w-full animate-text h-[600px] lg:px-8 p-4 bg-white grid place-items-center gap-4 bg-gradient-to-t from-sky-900 to-rose-900">
      <div className="grid place-items-center gap-4">
        <div className="animate-text text-center text-6xl font-extrabold text-transparent leading-relaxed bg-clip-text bg-gradient-to-t from-slate-100 to-slate-400">
          A place for your links
        </div>
        <p className="md:w-[50%] text-center text-slate-100">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          maiores perferendis dignissimos quod facere odit quo accusantium
          provident neque quia deserunt at, nulla tenetur explicabo labore, hic
          corporis saepe corrupti dicta consequuntur? Iste soluta eveniet animi.
        </p>
<Link href="/demo">        <Button children={"Start"} variant={"default"} icon={true} />  </Link>
      
      </div>
    </div>
  );
};

export default Herosection;
