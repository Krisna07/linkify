import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

interface pageProps {}

const page = ({}: pageProps) => {
  //   console.log(socialMediaData);
  return (
    <div className="grid gap-4">
      <h2>Total Baords</h2>
      <div className="">
        <div className="flex items-center gap-4 bg-gray-600/25 p-2 w-fit rounded-lg">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
