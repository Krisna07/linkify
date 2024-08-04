"use client";

import React, { useState, useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaPinterest,
  FaYoutube,
  FaReddit,
  FaTiktok,
  FaTumblr,
} from "react-icons/fa";
import Button from "../../../Global_components/Button";
import AddSocial from "./addBoard";
import { boardProps } from "../../utils/Interfaces";

// import ErrorHandler from "../../../../lib/errorhandler";

interface social {
  value: string;
  icon: JSX.Element;
}
// export const socialMediaArray: social[] = [
//   { value: "Facebook", icon: <FaFacebook /> },
//   { value: "Twitter", icon: <FaTwitter /> },
//   { value: "Instagram", icon: <FaInstagram /> },
//   { value: "LinkedIn", icon: <FaLinkedin /> },
//   { value: "Snapchat", icon: <FaSnapchat /> },
//   { value: "Pinterest", icon: <FaPinterest /> },
//   { value: "YouTube", icon: <FaYoutube /> },
//   { value: "Reddit", icon: <FaReddit /> },
//   { value: "TikTok", icon: <FaTiktok /> },
//   { value: "Tumblr", icon: <FaTumblr /> },
// ];
// interface NewBoardForm {
//   item: any;
//   errorHandler: void;
//   add: boolean;
// }

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
  const [tagItem, setTag] = useState<string[]>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.innerText);
    setFormData({ ...formdata, description: e.target.innerText });
    // console.log(formdata.description);
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.split(",");
    setTag(tag);
    console.log(tagItem);
    // setTag(tag)
    tagItem && setFormData({ ...formdata, tags: tagItem });
    console.log(formdata.tags);
  };

  // React.useLayoutEffect(() => {
  //     // Reset height - important to shrink on delete
  //    textareaRef.current ? textareaRef.current.style.height = "inherit";
  //     // Set height
  //     textareaRef.current.style.height = `${Math.max(
  //       textareaRef.current.scrollHeight,
  //       MIN_TEXTAREA_HEIGHT
  //     )}px`;
  //   }, [value]);
  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setFormData({ ...formdata, image: e.target?.result as string });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

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
        <div className="grid gap-2 relative">
          <div className="flex items-center gap-2 flex-wrap ">
            {formdata.tags.map(
              (tag, index) =>
                tag !== "" && (
                  <Button
                    children={tag}
                    variant="primary"
                    key={index}
                    className="px-2  "
                  />
                )
            )}
          </div>
          <input
            placeholder={"Start typing tag"}
            className="px-2 py-1 rounded-md   shadow-bs outline-none   border-inset border-box"
            onChange={handleTags}
            // value={formdata.tags[formdata.tags.length - 1]}
          />
          {/* <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            defaultValue={formdata.description}
            onInput={handleTags}
            onFocus={(e) =>
              e.target.innerText === "Enter the tags"
                ? (e.target.innerText = "")
                : ""
            }
            className={`w-[40ch] shadow-bs px-2 py-1 outline-none  ${
              formdata.tags[0] === "Enter the tags"
                ? "text-[gray]"
                : "text-black"
            }  border-inset border-box rounded-md`}
          ></div> */}
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
