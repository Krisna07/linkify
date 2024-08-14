import Image from "next/image";
import React from "react";
import { CiImageOn } from "react-icons/ci";
import { FaX } from "react-icons/fa6";

const ImageHandler = ({ imagePreview, handleImageUpload, clearImage }: any) => {
  return (
    <label htmlFor="image" className="w-full grid gap-1 border-box">
      <span className="mx-2 font-semibold">Image</span>
      <div className="w-[200px] bg-silver rounded-md overflow-hidden relative grid place-items-center">
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
          <div className="w-full h-full relative">
            <Image src={imagePreview} alt="image" width={200} height={100} />
            <FaX
              className="absolute right-4 top-4 cursor-pointer text-[red]"
              onClick={clearImage}
            />
          </div>
        )}
        <span>{imagePreview ? "Board Image" : "Select Background"}</span>
      </div>
    </label>
  );
};

export default ImageHandler;
