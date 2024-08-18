import React from "react";
import EditableComponents from "../EditableComponents";

const DescriptionHandler = ({ updateDescription, add }: any) => {
  const placeHolder = "Enter the description";
  return (
    <label htmlFor="description" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">Description</span>
      <div className="shadow-bs rounded-md">
        <EditableComponents
          valueUpdate={updateDescription}
          placeholder={placeHolder}
          add={add}
          isEditable
        />
      </div>
    </label>
  );
};

export default DescriptionHandler;
