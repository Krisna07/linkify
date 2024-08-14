import React from "react";
import EditableComponents from "../EditableComponents";
import { FaX } from "react-icons/fa6";

const TagHandler = ({ formData, handleTags, deleteTag }: any) => {
  return (
    <label htmlFor="tags" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">Tags</span>
      <div
        className="flex gap-1 relative flex-wrap items-center shadow-bs px-1 rounded-md"
        onClick={(event) => event.stopPropagation()}
      >
        {formData.tags.map(
          (tag: string, index: number) =>
            tag && (
              <div
                key={index}
                className="bg-tahiti hover:bg-silver transition-all h-fit w-fit px-2 rounded-full flex items-center gap-2 hover:shadow-bs"
                onClick={(event) => event.stopPropagation()} // Prevent the click event from propagating
              >
                #{tag}
                <FaX
                  size={12}
                  className="hover:text-[red]/50 font-bold transition-all duration-300"
                  onClick={(e) => deleteTag(e, tag)}
                />
              </div>
            )
        )}
        <EditableComponents
          valueUpdate={handleTags}
          placeholder={formData.tags.length ? "" : "Enter the Tags"}
          isEditable={formData.tags.length < 5}
        />
      </div>
    </label>
  );
};

export default TagHandler;
