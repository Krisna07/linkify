"use client";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import React, { useEffect, useState} from "react";
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaChevronUp,
  FaShareAlt,
} from "react-icons/fa";
import { Axios } from "axios";
import OpenAI from "openai";

export default function Listing({ job }: any) {
  const [req, showReq] = useState(false);
  const [skils, setSkill] = useState([])
  const openai = new OpenAI();
  async function main() {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: "Say this is a test.",
      max_tokens: 7,
      temperature: 0,
    });
  
    console.log(completion);
  }
  main();
    // const getSkills =async()=>{
    //   const url = 'https://job-description-generator1.p.rapidapi.com/generate/skills';
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'X-RapidAPI-Key': '1ca416b795mshd0deeb8e0ac25b6p1a7b37jsna6433fc9d22f',
    //     'X-RapidAPI-Host': 'job-description-generator1.p.rapidapi.com'
    //   },
    //   body: new URLSearchParams({
    //     title: 'PHP Developer'
    //   })
    // };
    
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }}


  
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
