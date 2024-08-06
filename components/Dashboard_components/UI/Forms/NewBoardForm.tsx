"use client";

import React, { useState, useEffect } from "react";

import Button from "../../../Global_components/Button";
import AddSocial from "./addBoard";
import { boardProps } from "../../utils/Interfaces";
import { FaX } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

import { CiImageOn } from "react-icons/ci";
import AddBoard from "../../utils/addBoard";
import EditableComponents from "./EditableComponents";
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

export default function NewBoardForm({ add, handleForm, updateBoard }: any) {
  const [formdata, setFormData] = useState<boardProps>({
    title: "",
    description: "",
    link: "",
    image: "",
    tags: [],
  });
  const [error, setError] = useState<string>();

  const [tag, setTagValue] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const [isPlaceholder, setIsplaceholder] = useState<boolean>();

  const actionPlaceHolder = (
    e: React.FocusEvent<HTMLDivElement, Element>,
    value: string
  ) => {
    const placeHolder = e.target.innerHTML;
    if (placeHolder === value) {
      setIsplaceholder(false);
    }
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
        handleForm(false);
        updateBoard(data.newBoard);
        return toast(`${data.message}`);
      }
      toast(`${data.message}`);
    } catch (error) {
      toast(`${error}`);
    }
  };

  return (
    <form
      className={`tablet:w-[20rem] w-[96vw]   ${
        add
          ? " -right-[2vw] tablet:right-0 opacity-1"
          : " right-[-120%]   opacity-0 z-[-20]"
      } absolute p-4 top-[140%] rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4  transition-all duration-500`}
      onSubmit={submitForm}
    >
      <div className="w-[max-content]  block font-semibold sticky top-0 ">
        Add new board
      </div>
      <label htmlFor="title" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Title</span>
        <input
          type="text"
          placeholder={"Enter the title"}
          className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
          name={"title"}
          onChange={handleChange}
          value={formdata.title}
        />
      </label>
      <label htmlFor="description" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Description</span>
        <div className="shadow-bs rounded-md">
          {" "}
          <EditableComponents
            valueUpdate={updateDescription}
            placeholder={"Enter the description"}
            isEditable={true}
          />
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
          <EditableComponents
            valueUpdate={handleTags}
            placeholder={formdata.tags.length == 5 ? "" : "Enter the Tags"}
            isEditable={formdata.tags.length == 5 ? false : true}
          />
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
function updateBoard(newBoard: any) {
  throw new Error("Function not implemented.");
}
