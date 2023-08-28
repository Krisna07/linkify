"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/g_components/Button";
import { clear } from "console";
import { randomUUID } from "crypto";
import { uuid } from "uuidv4";

interface User {
  username: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { username, email, password, passwordConfirmation } = formData;
  // const getUsers =
  //   typeof window !== "undefined" ? localStorage.getItem("userData") : [];
  // const parsedUsers =
  //   getUsers && typeof getUsers === "string" ? JSON.parse(getUsers) : [];
  // const [users, setUsers] = useState<User[]>(
  //   JSON.parse(localStorage.getItem("UserData")),
  // ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  // localStorage.clear();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (true) {
      case password !== passwordConfirmation:
        toast("Passwords do not match");
        return;
        break;
      case password.length < 6:
        toast("Password should be at least 6 characters long");
        return;

        break;
      case !username || !email:
        toast("Please fill out all fields");
        return;
        break;
      default:
        const newUser: any = {
          username: username,
          password: password,
          email: email,
          key: uuid(),
        };

        const getUser: any = JSON.parse(
          localStorage.getItem(`${newUser.email}`),
        );
        console.log(getUser);
        if (getUser) {
          toast("User exists sign in");
          return;
        }
        console.log(newUser);
        localStorage.setItem(`${newUser.email}`, JSON.stringify(newUser));
        toast("User created successfully!");
        router.push(`/dashboard?data=${newUser.key}`);
    }
  };

  return (
    <div className="w-full min-h-[100vh] py-8 grid place-items-center box-border animate-text">
      <div className="tablet:w-fit w-full grid place-items-center box-border bg-white">
        <ToastContainer />
        <form
          action=""
          className="w-full p-8 grid gap-4 shadow-bs"
          onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
          {[
            {
              label: "Username",
              name: "username",
              type: "text",
              value: username,
            },
            {
              label: "Email address",
              name: "email",
              type: "email",
              value: email,
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              value: password,
            },
            {
              label: "Retype Password",
              name: "passwordConfirmation",
              type: "password",
              value: passwordConfirmation,
            },
          ].map((input, index) => (
            <div
              key={index}
              className="rounded-md  grid gap-2  ">
              <label
                htmlFor={input.label}
                className="font-semibold">
                {input.label}
              </label>
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={input.label}
                value={input.value}
                onChange={handleChange}
              />
            </div>
          ))}

          <Button
            children="Sign Up"
            variant={"default"}
            type="submit"
            size={"default"}
            icon={false}
            className="w-full grid place-items-center"
          />

          <div className="text-center grid gap-4 place-items-center">
            <p>Already have an account</p>
            <Link href="./signin">
              <Button
                children="Sign in"
                variant={"default"}
                size={"default"}
                icon={false}
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
