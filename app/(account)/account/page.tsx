import React from "react";
import { getCurrentUser } from "../../../lib/session";
import { userProps } from "../../../components/Dashboard_components/utils/Interfaces";
import { BiImageAlt } from "react-icons/bi";
import Button from "../../../components/Global_components/Button";
import { FaEdit } from "react-icons/fa";

const page = async () => {
  const user: userProps = await getCurrentUser();
  console.log(user);
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-full grid place-items-center gap-4">
      <div className="px-2 w-full tablet:w-[80%] grid place-items-center text-center gap-1">
        <div
          style={{ background: `${user.image}` }}
          className="grid place-items-center w-full pt-16 mb-[30px] rounded-lg relative"
        >
          <div className="w-[100px] h-[100px] rounded-full shadow-bs bg-dark grid place-items-center relative top-[30px]">
            <BiImageAlt size={50} />
          </div>
          <span className="">
            <FaEdit />
          </span>
        </div>
        <div className="grid">
          <span className="text-xl font-bold capitalize">{user.username}</span>
          <span>{user.email}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-sm shadow-bs px-2 p-1 rounded-sm hover:rounded-lg font-semibold hover:translate-y-1 transition-all duration-300 cursor-pointer hover:bg-primary ">
            verified
          </span>
          <span className="text-sm shadow-bs px-2 p-1 rounded-sm hover:rounded-lg font-semibold hover:translate-y-1 transition-all duration-300 cursor-pointer  ">
            unsubscribed
          </span>
        </div>
      </div>
      <form
        className="px-2 w-full tablet:w-[50%] grid gap-4"
        // onSubmit={(e) => submitForm(e)}
      >
        <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Username</span>
          <input
            type="text"
            placeholder={user.username}
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
          />
        </label>
        <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Email</span>
          <input
            type="email"
            placeholder={user.email}
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
          />
        </label>
        {/* <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Date of Birth</span>
          <input
            type="date"
            placeholder={user.username}
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
          />
        </label> */}
        <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Occupation</span>
          <input
            type="text"
            placeholder={"Job Title"}
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
          />
        </label>
        <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Company</span>
          <input
            type="text"
            placeholder={"Company Name"}
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
          />
        </label>
        <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg"> Phone</span>
          <input
            type="tel"
            className="outline-none px-2 py-2 rounded-md shadow-bs bg-dark"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </label>
        {/* <label className="grid gap-2">
          <span className="px-2 font-semibold text-lg">Profile Status</span>
          <div className="outline-none px-2 py-2 flex gap-2 rounded-md shadow-bs bg-dark">
            <span className="flex items-center gap-2">
              <input type="radio" value={"Private"} placeholder="Private" />
              Private
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" value={"Public"} placeholder="Public" />
              Public
            </span>
          </div>
        </label> */}
        <Button variant={"primary"} size={"sm"}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default page;
