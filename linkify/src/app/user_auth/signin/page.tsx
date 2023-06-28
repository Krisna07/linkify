"use client";
import Button from "@/app/Landingpage/Components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Toast } from "react-toastify/dist/components";

const SignInForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
  };

  return (
    <div className="w-full py-8  grid place-items-center box-border  animate-text">
      <div className="w-full lg:w-[1000px] grid place-items-center box-border   bg-white  ">
        <form
          className="md:w-4/6 bg-white  rounded-b-none shadow-bs box-border px-4 py-8  relative"
          onSubmit={handleSubmit}
        >
          <div className="">
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Signin
            </h2>
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-bs"
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-bs"
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="my-4">
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 hover:shadow-bs text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p className="grid place-items-center text-gray-700 gap-4 ">
              Don't have an account?
              <Link href="./signup">
                <Button children={"Sign up"} variant={"default"} icon={false} />
              </Link>
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-4 text-xl relative -bottom-4 ">
            <span className="p-2 bg-white rounded-full shadow-bs hover:animate-bounce">
              {" "}
              <FcGoogle />
            </span>
            <span className="p-2 bg-white rounded-full shadow-bs hover:animate-bounce">
              {" "}
              <FaFacebook color="blue" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
