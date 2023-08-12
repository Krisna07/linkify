"use client";
import React from "react";
import Button from "../../g_components/Button";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="md:w-full animate-text  lg:px-8 p-4 bg-white grid place-items-center gap-4 ">
      <div className="grid place-items-center gap-4">
        <div className="animate-text text-center text-6xl font-extrabold text-transparent leading-relaxed bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400">
          A place for your links
        </div>
        <p className="md:w-[800px] text-center text-slate-900 font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          maiores perferendis dignissimos quod facere odit quo accusantium
          provident neque quia deserunt at, nulla tenetur explicabo labore, hic
          corporis saepe corrupti dicta consequuntur? Iste soluta eveniet animi.
        </p>
        <Link href="/demo">
          <Button
            children={"Start"}
            variant={"default"}
            icon={true}
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
