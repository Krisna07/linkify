"use client";
import React, { useEffect, useMemo, useState } from "react";
import EditableComponents from "../EditableComponents";
import { FaX } from "react-icons/fa6";
import { nextTick } from "process";

const TagHandler = ({ formData, updateTags, add }: any) => {
  const [tags, setTagValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(""); // Added for controlled input
  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.innerText;
    if (value.includes(",")) {
      const enteredTag = value.split(",");
      setTagValue((prev) => [...prev, enteredTag[0].trimStart()]);
      return (e.target.innerText = ""); // Clear the input field after adding the tag
    } else {
      setInputValue(value); // Update the input value state
    }
  };

  const deleteTag = (tagToDelete: string) => {
    //delaying delete action so that click fires before delete
    nextTick(() => {
      setTagValue((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
    });
  };
  useEffect(() => updateTags(tags), [tags]);
  useEffect(() => setTagValue([]), [add]);

  return (
    <label htmlFor="tags" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">Tags</span>
      <div
        className="flex gap-1 relative flex-wrap items-center shadow-bs px-1 rounded-md"
        onClick={(event) => event.stopPropagation()}
      >
        {tags.map((tag: string, index: number) => (
          <div
            key={index}
            className="bg-tahiti hover:bg-silver transition-all h-fit w-fit px-2 rounded-full flex items-center gap-2 hover:shadow-bs"
          >
            #{tag}
            {/* <span
              onClick={(event) => deleteTag(event)}
              className="w-2 h-2 bg-dark hover:bg-[red]/50 font-bold transition-all duration-300"
            ></span> */}
            <FaX
              size={12}
              id="deleteTag"
              onClick={(event) => deleteTag(tag)}
              className="hover:text-[red]/50 font-bold transition-all duration-300"
            />
          </div>
        ))}
        <EditableComponents
          // value={inputValue} // Use controlled value
          valueUpdate={handleTags}
          add={add}
          placeholder={formData.tags.length ? "" : "Enter the Tags"}
          isEditable={formData.tags.length < 5}
        />
      </div>
    </label>
  );
};

export default TagHandler;
