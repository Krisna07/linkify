"use client";

import React, { useState, useEffect } from "react";

import Button from "../../../Global_components/Button";
import AddSocial from "./addBoard";
import { boardProps } from "../../utils/Interfaces";
import { FaX } from "react-icons/fa6";

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
  // const tag: string[] = [];
  const [tag, setTagValue] = useState<string>();
  let tagValue;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.innerText);
    setFormData({ ...formdata, description: e.target.innerText });
    // console.log(formdata.description);
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.innerText.includes(",")) {
      const enteredTag = e.target.innerText.split(",");
      setTagValue(enteredTag[0]);
      formdata.tags.push(enteredTag[0]);
      return (e.target.innerText = "");
    }
  };

  const deleteTag = (e: any) => {
    const thisele = e.target.parentElement.innerText;
    formdata.tags.splice(formdata.tags.indexOf(thisele));
    console.log(formdata.tags);
  };
  // useEffect(() => setFormData({ ...formdata, tags: tag }), [entered]);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
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
      <div className="w-[max-content] block font-semibold ">Add new board</div>
      <label htmlFor="" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Title</span>
        <input
          type="text"
          placeholder={"Enter the title"}
          className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
          name={formdata.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="" className="w-full grid gap-1 border-box">
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
      <label htmlFor="" className="w-full grid gap-1 border-box">
        <span className="mx-2 font-semibold">Tags</span>
        <div className="flex gap-2 relative flex-wrap shadow-bs px-2 py-1 ">
          {formdata.tags.map(
            (tag, index) =>
              tag !== "" && (
                <span
                  key={index}
                  className="bg-tahiti px-2 rounded-full flex items-center gap-2 hover:shadow-bs"
                >
                  {tag} <FaX size="12" onClick={deleteTag} />
                </span>
              )
          )}

          {/* <input
            placeholder={"Start typing tag"}
            className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
            onChange={handleTags}
            value={tag[tag.length - 1]}
          /> */}
          <div
            suppressContentEditableWarning={true}
            contentEditable="true"
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
            {tagValue}
          </div>
        </div>
      </label>
      <Button variant={"accent"} size={"sm"}>
        Add
      </Button>
    </form>
  );
}

// <div className="w-full flex gap-2">
//   {socialMediaArray.map(
//     (item: social, index: React.Key | null | undefined) => (
//       <label
//         htmlFor=""
//         className={`w-fit p-[2px] flex items-center text-lg relative text-dark ${
//           social === item.value
//             ? "shadow-[0_0_2px_0_gray] bg-dark text-white rounded"
//             : ""
//         }`}
//         key={index}
//       >
//         <input
//           type="checkbox"
//           name=""
//           id=""
//           value={item.value}
//           className="absolute opacity-0  "
//           onChange={() => setSocial(item.value)}
//         />
//         {item.icon}
//       </label>
//     )
//   )}
// </div>
// <div>
//   <label htmlFor="">Enter the username</label>
//   <input
//     type="text"
//     name="username"
//     placeholder="@username"
//     onChange={(e) => setUsername(e.target.value)}
//     className="w-full  outline-none bg-none px-2 p-1  border-bottom border-b-2 border-black focus:border-green-400"
//   />
// </div>
// <Button
//   variant={"default"}
//   children="Add"
//   size={"sm"}
//   onClick={() => submitForm}
// />
