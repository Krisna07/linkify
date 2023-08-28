"use client";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface user {
  name: string;
  email: string;
  password: string;
}

const SignInForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { email, password };
    const userDatas = JSON.parse(localStorage.getItem(`${user.email}`));
    console.log(userDatas);
    if (!userDatas) {
      return toast("User not found Sign up");
    }
    if (userDatas.password !== user.password) {
      return toast("Username or password doesnot match");
    }
    const encodedKey = encodeURIComponent(userDatas.key);
    const url = `/dashboard?key=${encodedKey}`;
    router.push(url);
  };

  return (
    <div className="w-full py-8  grid place-items-center box-border  animate-text">
      <div className="w-fit min-h-[100vh] grid place-items-center box-border    bg-white  ">
        <ToastContainer />
        <form
          className="bg-white  rounded-b-none shadow-bs box-border px-4 py-8  relative"
          onSubmit={handleSubmit}>
          <div className="">
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Signin
            </h2>
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email">
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
              htmlFor="password">
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
              type="submit">
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p className="grid place-items-center text-gray-700 gap-4 ">
              Don't have an account?
              <Link href="./signup">
                <Button
                  children={"Sign up"}
                  variant={"default"}
                  icon={false}
                  size={"default"}
                />
              </Link>
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-4 text-xl relative -bottom-4 ">
            <span className="p-2 bg-white rounded-full shadow-bs hover:animate-bounce">
              {" "}
              <FcGoogle />
            </span>
            <span className="p-2 bg-white rounded-full shadow-bs hover:animate-bounce">
              <FaFacebook color="blue" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
