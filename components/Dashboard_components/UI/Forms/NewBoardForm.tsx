"use client";

import React, { ChangeEvent, useState } from "react";
import Button from "../../../Global_components/Button";
import { FaX } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import AddBoard from "../../utils/addBoard";
import EditableComponents from "./EditableComponents";
import Image from "next/image";
import { toast } from "react-toastify";

interface labelProps {
  label: string;
  value: string;
  handleChange: any;
}

export interface newBoardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  file?: File;
  tags: string[];
}

export function FormLabel({ label, value, handleChange }: labelProps) {
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

export default function NewBoardForm({
  add,
  handleForm,
  updateBoard,
  errorHandler,
}: any) {
  const [formdata, setFormData] = useState<newBoardProps>({
    title: "",
    description: "",
    link: "",
    image: "",
    file: undefined,
    tags: [],
  });

  const [imagePreview, setImagePreview] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, description: e.target.innerText });
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.innerText.includes(",")) {
      const value = e.target.innerText;
      const enteredTag = value.split(",");
      formdata.tags.push(enteredTag[0].trimStart());
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
    if (!formdata.title || formdata.title === "Enter the title") {
      toast.error("Please enter the title");
      return;
    }
    if (!regex.test(formdata.title)) {
      toast.error("Please check the title");
      return;
    }
    if (
      !formdata.description ||
      formdata.description === "Enter the description"
    ) {
      return toast.error("Please enter the description");
    }

    try {
      const data = await AddBoard(formdata);

      if (data.status === 201) {
        setFormData({
          title: "",
          description: "",
          link: "",
          image: "",
          file: undefined,
          tags: [],
        });
        handleForm(!add);
        updateBoard(data.newBoard);
        return toast.success(`${data.message}`);
      }
      toast.error(`${data.message}`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({ ...formdata, file: file });
    }
  };

  const clearImage = () => {
    setFormData({ ...formdata, file: undefined });
    setImagePreview("");
    handleForm(add);
  };

  return (
    <form
      className={` w-[20rem] ${
        add === false
          ? "translate-x-full   opacity-0 z-[-20]"
          : " translate-x-0  opacity-1 "
      } absolute p-4 top-[140%] right-0 rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4  transition-all duration-500`}
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
          <EditableComponents
            valueUpdate={updateDescription}
            placeholder={"Enter the description"}
            isEditable={true}
          />
        </div>
      </label>
      <label htmlFor="tags" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Tags</span>
        <div className="flex gap-1 relative flex-wrap items-center shadow-bs px-1  rounded-md">
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
            placeholder={formdata.tags.length ? "" : "Enter the Tags"}
            isEditable={formdata.tags.length == 5 ? false : true}
          />
        </div>
      </label>
      <label htmlFor="image" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Image</span>
        <div className="w-[200px]  bg-silver rounded-md overflow-hidden relative grid place-items-center">
          {!imagePreview ? (
            <>
              <input
                type="file"
                onInput={handleImageUpload}
                className="outline-none absolute w-full h-full opacity-0 "
              />
              <CiImageOn size={"100px"} />
            </>
          ) : (
            <div className="w-full h-full relative ">
              <Image
                src={imagePreview}
                alt="image"
                width={"200"}
                height={"100"}
              />
              <FaX
                className="absolute right-4 top-4 cursor-pointer text-[red]"
                onClick={clearImage}
              />
            </div>
          )}

          <span>{imagePreview ? "Board Image" : "Select Background"}</span>
        </div>
      </label>
      <Button variant={"primary"} size={"sm"} icon={true}>
        Add
      </Button>
    </form>
  );
}
