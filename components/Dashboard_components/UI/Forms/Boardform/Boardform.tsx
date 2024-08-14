"use client";

import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import AddBoard from "../../../utils/addBoard";
import { FormLabel } from "./BoardformLabel";
import DescriptionHandler from "./DescriptionHandler";
import TagHandler from "./TagHandler";
import ImageHandler from "./ImageHandler";
import Button from "../../../../Global_components/Button";

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
  handleForm: (state: boolean) => void;
  updateBoard: (board: NewBoardProps) => void;
  errorHandler: (error: any) => void;
}

const NewBoardForm: React.FC<NewBoardFormProps> = ({
  add,
  handleForm,
  updateBoard,
  errorHandler,
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
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleTags = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.includes(",")) {
      const [newTag] = value.split(",").map((tag) => tag.trimStart());
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
      e.target.value = "";
    }
  };

  const deleteTag = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
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
    setFormData((prev) => ({ ...prev, file: undefined }));
    setImagePreview("");
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

    try {
      const data = await AddBoard(formData);

      if (data.status === 201) {
        setFormData({
          title: "",
          description: "",
          link: "",
          image: "",
          file: undefined,
          tags: [],
        });
        handleForm(false);
        updateBoard(data.newBoard);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      errorHandler(error);
      toast.error(`${error}`);
    }
  };

  return (
    <form
      className={`w-[20rem] ${
        add ? "translate-x-0 opacity-1" : "translate-x-full opacity-0 z-[-20]"
      } absolute p-4 top-[140%] right-0 rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4 transition-all duration-500`}
      onSubmit={submitForm}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-[max-content] block font-semibold sticky top-0">
        Add new board
      </div>
      <FormLabel label="Title" value="title" handleChange={handleChange} />
      <DescriptionHandler updateDescription={updateDescription} />
      <TagHandler
        formData={formData}
        handleTags={handleTags}
        deleteTag={deleteTag}
      />
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
