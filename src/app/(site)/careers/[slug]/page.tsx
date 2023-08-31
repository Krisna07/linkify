"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Joblists from "../Joblists";

interface pageProps {}

const page = ({}: pageProps) => {
  const router = usePathname().split("/")[2];
  const jobTitle = router.split("_")[0] + " " + router.split("_")[1];
  const allJobs = Joblists;
  const thisjob: any = Joblists.find((job) => job.title == jobTitle);
  console.log(thisjob);

  return (
    <div className="py-20 grid place-items-center">
      <div className="laptop:w-[1000px]">
        <h2>{thisjob.title}</h2>
      </div>
    </div>
  );
};

export default page;
