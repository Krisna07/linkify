"use client";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaChevronUp,
  FaShareAlt,
} from "react-icons/fa";

export default function Listing({ job }: any) {
  const [req, showReq] = useState(false);
  return (
    <div className="w-full shadow-bs grid gap-2 p-4 box-border">
      <h2 className="text-xl font-[600]">{job.title}</h2>
      <div>
        {job.des.map((des: any) => (
          <li key={des}>{des}</li>
        ))}
      </div>

      <div className={`${req ? "grid" : "hidden"}`}>
        Requirements
        {job.requirements.map((req: any) => (
          <li key={req}>{req}</li>
        ))}
      </div>
      <Button
        children={!req ? "More" : "Hide"}
        variant={"ghost"}
        size={"sm"}
        rightIcon={!req ? <FaChevronDown /> : <FaChevronUp />}
        onClick={() => showReq(!req)}
      />
      <div className="flex gap-4">
        <Link
          href={`careers/${
            job.title.split(" ")[0] + "_" + job.title.split(" ")[1]
          }`}>
          <Button
            children="Apply"
            variant={"primary"}
            size={"sm"}
          />
        </Link>
        <Button
          children="Share"
          variant={"default"}
          size={"sm"}
          rightIcon={<FaShareAlt />}
        />
      </div>
    </div>
  );
}
