"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../../Global_components/Button";
import { JobListProps } from "./Joblists";
import { FaXTwitter } from "react-icons/fa6";

export default function Listing({ job }: { job: JobListProps }) {
  const [req, showReq] = useState<boolean>(false);
  const [share, showShare] = useState<boolean>(false);

  const createUrl = (tag: string) => {
    const tags = tag.split(" ");
    const url = tags.join("_");
    return url;
  };
  const shareIcons = [
    <FaFacebook color="blue" />,
    <FaXTwitter />,
    <FaWhatsapp color="green" />,
  ];

  return (
    <div className="w-full shadow-bs grid gap-2 p-4 box-border">
      <div className=" leading-[120%] text-sm grid font-semibold">
        <h2 className="text-xl font-[600]">{job.title}</h2>
        <span>
          {job.datePosted}-{job.endDate}
        </span>
      </div>
      <div>{job.description}</div>

      <div className={`${req ? "grid" : "hidden"}`}>
        <span className="font-semibold">Requirements</span>
        {job.requirements.map((req: any) => (
          <li key={req}>{req}</li>
        ))}
      </div>
      <Button
        children={!req ? "More" : "Hide"}
        variant={"accent"}
        size={"sm"}
        rightIcon={!req ? <FaChevronDown /> : <FaChevronUp />}
        onClick={() => showReq(!req)}
      />
      <div className="flex gap-4">
        <Link href={`careers/${createUrl(job.title)}`}>
          <Button children="Apply" variant={"primary"} size={"sm"} />
        </Link>
        <div className=" flex items-center gap-2 relative">
          <Button
            children="Share"
            variant={"default"}
            size={"sm"}
            rightIcon={<FaShareAlt />}
            onClick={() => showShare(!share)}
          />
          <div className="flex items-center gap-2 ">
            {shareIcons.map((icon, index: number) => (
              <span
                key={index}
                className="p-1 bg-white rounded shadow relative transition-all hover:scale-[1.1]"
                style={
                  !share
                    ? { left: -50 * index, opacity: 0 }
                    : { left: 0, opacity: 1 }
                }
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
