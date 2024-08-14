"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "../../../Global_components/Button";

import AddBoard from "../../utils/addBoard";
import { toast } from "react-toastify";
import { FormLabel } from "./Boardform/BoardformLabel";
import DescriptionHandler from "./Boardform/DescriptionHandler";
import TagHandler from "./Boardform/TagHandler";
import ImageHandler from "./Boardform/ImageHandler";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleTags = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.includes(",")) {
      const enteredTag = value.split(",");
      setFormData((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, enteredTag[0].trim()],
      }));
      e.target.value = "";
    }
  }, []);

  const deleteTag = useCallback((event: React.MouseEvent, tag: string) => {
    event.stopPropagation();
    setFormData((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((t) => t !== tag),
    }));
  }, []);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prevState) => ({ ...prevState, file }));
    }
  };

  const clearImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFormData((prevState) => ({ ...prevState, file: undefined }));
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
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    // Clean up the image preview URL when the component unmounts
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <form
      className={`w-[20rem] ${
        add ? "translate-x-0 opacity-1" : "translate-x-full opacity-0 z-[-20]"
      } absolute p-4 top-[140%] right-0 rounded-lg z-40 text-dark bg-white shadow-bs grid gap-4 transition-all duration-500`}
      onSubmit={submitForm}
      onClick={(event) => event.stopPropagation()}
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
