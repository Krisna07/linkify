"use client";

import React, { useState, useEffect } from "react";

import Button from "../../../Global_components/Button";
import AddSocial from "./addBoard";
import { boardProps } from "../../utils/Interfaces";
import { FaX } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

import { CiImageOn } from "react-icons/ci";
import AddBoard from "../../utils/addBoard";
interface social {
  value: string;
  icon: JSX.Element;
}

export function FormLabel({ label, value, handleChange }: any) {
  return (
    <label htmlFor="" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">{label}</span>
      <input
        type="text"
        placeholder={"Enter the title"}
        className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
        name={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default function NewBoardForm({ add }: any) {
  const [formdata, setFormData] = useState<boardProps>({
    title: "",
    description: "Enter the description",
    link: "",
    image: "",
    tags: [],
  });
  const [error, setError] = useState<string>();

  const [tag, setTagValue] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, description: e.target.innerText });
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.innerText.includes(",")) {
      const enteredTag = e.target.innerText.split(",");
      setTagValue(enteredTag[0]);
      formdata.tags.push(enteredTag[0]);
      return (e.target.innerText = "");
    }
  };

  const deleteTag = async (event: any) => {
    const selectTag = await event.target.parentElement.innerText;
    const tagValue = selectTag && selectTag.split("#")[1];
    const index = formdata.tags.indexOf(tagValue);
    formdata.tags.splice(index, 1);
    setFormData({ ...formdata, tags: formdata.tags });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(formdata.title)) {
      toast("Please check the title");
      return;
    }
    if (
      !formdata.description ||
      formdata.description === "Enter the description"
    ) {
      return toast("Please enter the description");
    }

    try {
      const data = await AddBoard(formdata);
      if (data.status === 200) {
        setFormData({
          title: "",
          description: "",
          link: "",
          image: "",
          tags: [],
        });
        return toast(`${data.message}`);
      }
      toast(`${data.message}`);
    } catch (error) {
      toast(`${error}`);
    }
  };

  return (
    <form
      className={`w-fit h-fit ${
        !add
          ? "top-[120%] right-0 opacity-1"
          : "top-0 right-0  opacity-0 z-[-20]"
      } absolute p-4   rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4  transition-all duration-500`}
      onSubmit={submitForm}
    >
      <div className="absolute">
        <ToastContainer />
      </div>
      <div className="w-[max-content] block font-semibold ">Add new board</div>
      <label htmlFor="title" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Title</span>
        <input
          type="text"
          placeholder={"Enter the title"}
          className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
          name={"title"}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Description</span>
        <div
          suppressContentEditableWarning={true}
          contentEditable="true"
          defaultValue={formdata.description}
          onInput={updateDescription}
          onFocus={(e) =>
            e.target.innerText === "Enter the description"
              ? (e.target.innerText = "")
              : ""
          }
          className={`w-[40ch] shadow-bs px-2 py-1 outline-none  ${
            formdata.description === "Enter the description" ||
            formdata.description === ""
              ? "text-[gray]"
              : "text-black"
          }  border-inset border-box rounded-md`}
        >
          {formdata.description === "" && "Enter the description"}
        </div>
      </label>
      <label htmlFor="tags" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Tags</span>
        <div className="flex gap-2 relative flex-wrap shadow-bs px-2 py-1 ">
          {formdata.tags.map(
            (tag, index) =>
              tag !== "" && (
                <div
                  key={index}
                  className="bg-tahiti hover:bg-silver transition-all  h-fit w-fit px-2 rounded-full flex items-center gap-2 hover:shadow-bs"
                >
                  #{tag}
                  <FaX
                    size="10"
                    className="font-semibold hover:text-[red] cursor-pointer"
                    onClick={deleteTag}
                  />
                </div>
              )
          )}
          <div
            suppressContentEditableWarning={true}
            contentEditable={formdata.tags.length < 5 ? "true" : "false"}
            defaultValue={formdata.description}
            onInput={handleTags}
            onFocus={(e) =>
              e.target.innerText === "Enter the tags"
                ? (e.target.innerText = "")
                : ""
            }
            className={`max-w-[40ch] min-w-[10ch]  outline-none  ${
              formdata.tags[0] === "Enter the tags"
                ? "text-[gray]"
                : "text-black"
            }  border-inset border-box rounded-md`}
          >
            Enter the tags
          </div>
        </div>
      </label>
      <label htmlFor="image" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Image</span>
        <div className="w-[200px]  bg-dark/25 rounded-md overflow-hidden relative grid place-items-center">
          <CiImageOn size={"100px"} />
          <span>Select Background</span>
          <input
            type="file"
            className="outline-none absolute w-full h-full opacity-0"
          />
        </div>
      </label>
      <Button variant={"primary"} size={"sm"} icon={true}>
        Add
      </Button>
    </form>
  );
}
