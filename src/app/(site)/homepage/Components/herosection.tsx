import SponsorsSection from "@/app/Landingpage/Components/Sponsers";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa";

interface HerosectionProps {}

export default function Herosection({}: HerosectionProps) {
  return (
    <div className="laptop:w-[1024px] animate-text  lg:px-8 p-4 bg-white grid place-items-center gap-4 ">
      <div className="grid place-items-center gap-8 ">
        <div className="grid gap-2 leading-[120%] text-center">
          <div className="font-[600]">Seamless link sharing</div>
          <div className="animate-text text-center text-4xl font-extrabold text-transparent leading-relaxed bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400">
            A place for your links
          </div>
          <p className="md:w-[800px] text-center text-slate-900 font-[500]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            maiores perferendis dignissimos quod facere odit quo accusantium
            provident neque quia deserunt at, nulla tenetur explicabo labore,
            hic corporis saepe corrupti dicta consequuntur? Iste soluta eveniet
            animi.
          </p>
        </div>
        <Link href="/demo">
          <Button
            children={"Start"}
            variant={"default"}
            size={"sm"}
            // rightIcon={<FaRocket />}
            icon={true}
          />
        </Link>
      </div>
      <div className="">{/* <SponsorsSection /> */}</div>
    </div>
  );
}
