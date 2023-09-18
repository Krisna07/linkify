"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Joblists from "../Joblists";
import Button from "@/app/g_components/Button";

import { GiShare } from "react-icons/gi";

interface pageProps {}

const page = ({}: pageProps) => {
  const router = usePathname().split("/")[2];
  const jobTitle = router.split("_")[0] + " " + router.split("_")[1];
  const allJobs = Joblists;
  const thisjob: any = Joblists.find((job) => job.title == jobTitle);

  const navigate = useRouter();
  const submitApplciation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate.push("/careers");
  };

  return (
    <div className="py-20 min-h-[80vh] grid place-items-center">
      <div className="laptop:w-[1000px]  grid  gap-4">
        <div className="px-4 grid gap-4">
          <span className=" text-2xl font-bold">{thisjob.title}</span>
          <span className="font-semibold text-sm">2023/01/22</span>
        </div>
        <div className="flex items-center justify-between border-b p-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-300 rounded-full"></div>
              <div className=" text-sm flex flex-col leading-[120%]">
                <span>Dominic Fike</span>
                <span className=" font-semibold text-xs">HR Manager</span>
              </div>
            </div>
          </div>
          <Button
            children="Share"
            rightIcon={<GiShare />}
            variant={"ghost"}
            size={"sm"}
          />
        </div>
        <div className="">
          <div className=""></div>
        </div>
        <div className="grid tablet:grid-cols-2 gap-4">
          <form
            className="w-full grid  gap-4 border-r p-4"
            onSubmit={submitApplciation}>
            <label
              htmlFor="name"
              className="w-full grid tablet:flex gap-4">
              <div className="grid gap-2">
                <span className="font-[600]">Firstname</span>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="w-full shadow-bs px-2 outline-none shadow h-fit"
                />
              </div>
              <div className="grid gap-2">
                <span className="font-[600]">Lastname</span>
                <input
                  type="text"
                  placeholder="Lastname"
                  className=" px-2 w-full shadow-bs outline-none shadow h-fit"
                />
              </div>
            </label>
            <label
              htmlFor="email"
              className="w-full grid gap-2">
              <span className="font-[600]"> Email</span>
              <input
                type="text"
                placeholder="Email"
                className="px-2 shadow-bs outline-none shadow h-fit "
              />
            </label>
            <label
              htmlFor="resume"
              className="grid gap-2">
              <span className="font-[600]">Upload your Resume</span>
              <input type="file" />
            </label>
            <label
              htmlFor="cover_letter"
              className="grid gap-2">
              <span className="font-[600]"> Cover letter</span>
              <div className="grid tablet:flex gap-4">
                <div className="grid gap-2">
                  Write a cover letter
                  <textarea className="shadow-bs" />
                </div>
                <div className="grid gap-2">
                  Upload a file
                  <input type="file" />
                </div>
              </div>
            </label>
            <Button
              children="Apply"
              variant={"default"}
              size={"sm"}
            />
          </form>
          <div className="grid gap-8 px-4">
            <div className="grid gap-2">
              <h2 className="font-[600]">Descriptions</h2>
              {thisjob.des.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </div>
            <div className="grid gap-2">
              <h2 className="font-[600]">Requirements</h2>
              {thisjob.requirements.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
