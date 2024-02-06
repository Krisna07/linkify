"use client";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";

interface User {
  username: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-fit p-2 px-4 bg-gradient-to-tr from-indigo-400 to-blue-300 grid place-items-center">
      <div className="w-full px-2 text-lg font-bold">
        <h3>Sign in</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          placeholder="Username"
          icon={<FaUser />}
          color="blue"
          data={formData.username}
          onchange={handleInputChange}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          icon={<BsEyeSlash />}
          secondIcon={<BsEye />}
          color="green"
          data={formData.password}
          onchange={handleInputChange}
        />
        <Button type="submit" variant={"default"} size={"default"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
