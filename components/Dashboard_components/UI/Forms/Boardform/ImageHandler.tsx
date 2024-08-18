import Image from "next/image";
import React from "react";
import { CiImageOn } from "react-icons/ci";
import { FaX } from "react-icons/fa6";

const ImageHandler = ({ imagePreview, handleImageUpload, clearImage }: any) => {
  return (
    <label htmlFor="image" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">Image</span>
      <div className="w-full bg-silver rounded-md overflow-hidden relative grid place-items-center">
        {!imagePreview ? (
          <>
            <input
              type="file"
              onInput={handleImageUpload}
              className="outline-none absolute w-full h-full opacity-0"
            />
            <CiImageOn size="100px" />
          </>
        ) : (
          <div className="w-[100%] h-[300px] relative">
            <Image
              src={imagePreview}
              alt="image"
              fill={true}
              className="w-full h-full object-cover"
            />
            <div className="p-1 bg-dark  absolute right-4 top-4 rounded-md">
              {" "}
              <FaX
                className=" cursor-pointer text-[red] "
                onClick={clearImage}
              />
            </div>
          </div>
        )}
        <span>{imagePreview ? "Board Image" : "Select Board Image"}</span>
      </div>
    </label>
  );
};

export default ImageHandler;
