import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import socialMediaData from "../../../../components/Dashboard_components/dummydata";

interface pageProps {}

const page = ({}: pageProps) => {
  //   console.log(socialMediaData);
  return (
    <div className="grid gap-4">
      <h2>Your activities</h2>
      <div className="">
        <div className="flex items-center gap-4 bg-gray-600/25 p-2 w-fit rounded-lg">
          <FaFacebookSquare className="text-[40px]" />
          255 new friends
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
