"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddBoard from "../../../utils/addBoard";

import DescriptionHandler from "./DescriptionHandler";
import TagHandler from "./TagHandler";
import ImageHandler from "./ImageHandler";
import Button from "../../../../Global_components/Button";
import { nextTick } from "process";

export interface NewBoardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  file?: File;
  tags: string[];
}

interface NewBoardFormProps {
  add: boolean;
  handleForm?: (state: boolean) => void;
  updateBoard?: (board: NewBoardProps) => void;
  errorHandler?: (error: any) => void;
}

const NewBoardForm: React.FC<NewBoardFormProps> = ({
  add,
  handleForm,
  updateBoard,
}) => {
  const [formData, setFormData] = useState<NewBoardProps>({
    title: "",
    description: "",
    link: "",
    image: "",
    file: undefined,
    tags: [],
  });

  const [imagePreview, setImagePreview] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, description: e.target.innerText }));
  };

  const updateTags = (tags: string[]) => {
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    nextTick(() => {
      setFormData((prev) => ({ ...prev, file: undefined }));
      setImagePreview("");
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleRegex = /^[a-zA-Z\s]*$/;
    if (!formData.title || formData.title === "Enter the title") {
      toast.error("Please enter the title");
      return;
    }
    if (!titleRegex.test(formData.title)) {
      toast.error("Please check the title");
      return;
    }
    if (
      !formData.description ||
      formData.description === "Enter the description"
    ) {
      toast.error("Please enter the description");
      return;
    }
    toast.loading("Adding board....");
    try {
      await AddBoard(formData).then((data) => {
        if (data.status === 201) {
          setFormData({
            title: "",
            description: "",
            link: "",
            image: "",
            file: undefined,
            tags: [],
          });
          // handleForm(false);
          // updateBoard(data.newBoard);
          toast.success(data.message);
          setImagePreview("");
          toast.dismiss();
        } else {
          toast.error(data.message);
        }
      });
    } catch (error) {
      toast.error(`${error}`);
    } finally {
    }
  };

  useEffect(() => {
    add === false &&
      setFormData({
        title: "",
        description: "",
        link: "",
        image: "",
        file: undefined,
        tags: [],
      });
    setImagePreview("");
  }, [handleForm, add]);

  return (
    <form
      className={` ${
        add ? "translate-x-0 opacity-1" : "translate-x-full opacity-0 z-[-20]"
      }  p-4 top-[140%] right-0 rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4 transition-all duration-500`}
      onSubmit={submitForm}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-[max-content] block font-semibold sticky top-0">
        Add new board
      </div>
      <label htmlFor={"title"} className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Title</span>
        <input
          type="text"
          placeholder={`Enter the title`}
          className="px-2 py-1 rounded-md shadow-bs outline-none border-inset border-box"
          name={"title"}
          value={formData.title}
          // value={value}
          onChange={handleChange}
        />
      </label>
      <DescriptionHandler updateDescription={updateDescription} add={add} />
      <TagHandler formData={formData} updateTags={updateTags} add={add} />
      <ImageHandler
        imagePreview={imagePreview}
        handleImageUpload={handleImageUpload}
        clearImage={clearImage}
      />
      <Button variant="primary" size="sm" icon>
        Add
      </Button>
    </form>
  );
};

export default NewBoardForm;
