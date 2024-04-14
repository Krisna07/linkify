"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLeaf,
  FaLock,
  FaLockOpen,
  FaUser,
} from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

interface User {
  username: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    password: "",
  });
  const [err, setErr] = useState<string>("");
  const [strength, setStrength] = useState<number>();
  const [strengthName, setStrengthName] = useState<string>("Weak");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

  const calculatePasswordStrength = (object: string) => {
    const lengthWeight = 20;
    const uppercaseWeight = 20;
    const lowercaseWeight = 20;
    const digitWeight = 20;
    const specialCharWeight = 20;
    //length
    const lengthScore = object.length > 8 ? 20 : (object.length / 8) * 20;

    // Check uppercase letters
    const uppercaseScore = object.match(/[A-Z]/) ? uppercaseWeight : 0;

    // Check lowercase letters
    const lowercaseScore = object.match(/[a-z]/) ? lowercaseWeight : 0;

    // Check digits
    const digitScore = object.match(/\d/) ? digitWeight : 0;

    // Check special characters
    const specialCharScore = object.match(/[!@#$%^&*()\-_=+{};:,<.>]/)
      ? specialCharWeight
      : 0;

    // Calculate total score
    const totalScore =
      lengthScore +
      uppercaseScore +
      lowercaseScore +
      digitScore +
      specialCharScore;
    if (totalScore < 50) {
      setStrengthName("Weak");
    }
    if (totalScore > 50 && totalScore < 80) {
      setStrengthName("Still not there");
    }
    if (totalScore > 80) {
      setStrengthName("Strong");
    }
    return Math.floor(totalScore);
  };

  useEffect(() => {
    setStrength(calculatePasswordStrength(formData.password));
    console.log(strength);
  });

  const validateForm = () => {
    if (!formData.username || !formData.password) {
      setErr("Please fill in all fields.");
      return false;
    }
    if (formData.password.length < 8) {
      setErr("Password Very short");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);

      setFormData({ username: "", password: "" });

      setErr("");
    }
  };

  return (
    <div className="w-fit h-screen tablet:h-fit px-4 py-8 bg-gradient-to-tr from-indigo-400/50 to-blue-300/50 rounded flex flex-col  justify-center tablet:grid tablet:grid-cols-2  gap-4 place-items-center">
      <div className="w-full px-2  tablet:h-full grid gap-2">
        <div>
          <FaLeaf color="green" size={40} />
          <h3 className="font-semibold text-xl ">Sign up</h3>
          <p>Get started with Linkify</p>
        </div>
        <div className="h-fit grid gap-2">
          <span className="text-sm font-semibold">Contiune with</span>
          <div className="flex gap-2 text-[20px]">
            <FaGithub className="scale-[1.1]" />
            <FcGoogle className="scale-[1.1]" />
            <FaFacebook className="scale-[1.1]" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-[400px] grid gap-2">
        {err && <div className="text-red-500">{err}</div>}
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
        {formData.password ? (
          <div className="w-full h-4 bg-white shadow relative  rounded-full flex items-center">
            <div
              style={{ width: `${strength}%` }}
              className={`rounded-full relative transition-all h-full  bg-gradient-to-r from-red-400 to-green-400 flex items-center`}
            >
              <FaLock size={12} className="absolute right-2" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="subs" className="px-2 flex gap-2 items-center">
            <input type="checkbox" />
            <span>I agreee with terms and conditions</span>
          </label>
          <label htmlFor="subs" className="px-2 flex gap-2 items-center">
            <input type="checkbox" />
            <span>I want to receive the newsletter </span>
          </label>
        </div>
        <span className="px-2 flex gap-2 items-center text-sm">
          Already a member?{" "}
          <Link href={"./signin"} className="underline">
            Login here
          </Link>
        </span>
        <Button type="submit" variant={"default"} size={"sm"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
