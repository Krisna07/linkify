import React, { useState } from "react";

interface EditableComponentsProps {
  valueUpdate: any;
  placeholder: string;
  isEditable: boolean;
}

const EditableComponents = ({
  valueUpdate,
  placeholder,
  isEditable,
}: EditableComponentsProps) => {
  const [isPlaceholder, setIsplaceholder] = useState<boolean>();
  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={isEditable}
      onInput={valueUpdate}
      onFocus={(e) => {
        const placeHolder = e.target.innerHTML;
        const value = placeholder;
        if (placeHolder === value) {
          e.target.innerText = "";
          setIsplaceholder(false);
        }
      }}
      onBlur={(e) => {
        const placeHolder = e.target.innerHTML;
        const value = placeholder;
        if (placeHolder.length < 1) {
          e.target.innerText = value;
          setIsplaceholder(true);
        }
      }}
      className={`${
        isPlaceholder && "text-[gray]"
      }  px-2 py-1 outline-none border-inset border-box rounded-md`}
    >
      {placeholder}
    </div>
  );
};

export default EditableComponents;
