import React, { useEffect, useRef, useState } from "react";

interface EditableComponentsProps {
  valueUpdate: any;
  placeholder: string;
  isEditable: boolean;
  add: boolean;
}

const EditableComponents = ({
  valueUpdate,
  placeholder,
  isEditable,
  add,
}: EditableComponentsProps) => {
  const [isPlaceholder, setIsplaceholder] = useState<boolean>(true);
  const editableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!add && editableRef.current) {
      // Ensure editableRef.current is not null
      editableRef.current.innerText = placeholder;
      setIsplaceholder(true);
    }
  }, [add]);
  return (
    <div
      suppressContentEditableWarning={true}
      contentEditable={isEditable}
      onInput={valueUpdate}
      ref={editableRef}
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
