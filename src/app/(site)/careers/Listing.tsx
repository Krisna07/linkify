import Button from "@/app/g_components/Button";
import React from "react";
import { FaShareAlt } from "react-icons/fa";

export default function Listing({ job }) {
  console.log(job);
  return (
    <div className="w-full shadow-bs grid gap-2 p-4">
      <h2 className="text-xl font-[600]">{job.title}</h2>
      <div>
        Description
        {job.des.map((des) => (
          <li>{des}</li>
        ))}
      </div>
      <div>
        Requirements
        {job.requirements.map((des) => (
          <li>{des}</li>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          children="Apply"
          variant={"primary"}
          size={"sm"}
        />
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
