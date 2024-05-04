import Button from "@/app/g_components/Button";
import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa";
import SponsorsSection from "./Sponsers";

interface HerosectionProps {}

export default function Herosection({}: HerosectionProps) {
  return (
    <div className="laptop:w-[1024px] min-h-[80vh] animate-text box-border  laptop:px-8 p-4 bg-white grid place-items-center gap-4 py-16 ">
      <div className="grid place-items-center gap-8 ">
        <div className="grid gap-2 leading-[120%] text-center">
          <div className="font-[600]">Seamless link sharing</div>
          <div className="animate-text text-center text-4xl font-extrabold text-transparent leading-relaxed bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400">
            A place for your links
          </div>
          <p className="laptop:w-[800px] w-full text-center text-slate-900 font-[500]">
            Effortlessly share and connect with our link sharing app. Instantly
            share articles, videos, and ideas, fostering engaging discussions.
            Join us to reshape how you connect and share in the digital age.
          </p>
        </div>
        <Link href="/auth/signup">
          <Button
            children={"Start"}
            variant={"default"}
            size={"sm"}
            // rightIcon={<FaRocket />}
            icon={true}
          />
        </Link>
        <Link href="/dashboard">
          <Button
            children={"Try Demo"}
            variant={"default"}
            size={"sm"}
            // rightIcon={<FaRocket />}
            icon={true}
          />
        </Link>
      </div>
      <div className="w-full overflow-hidden">
        <SponsorsSection />
      </div>
    </div>
  );
}
