"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";
import { FaChevronLeft } from "react-icons/fa6";

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return Math.floor(totalScore);
  };

  useEffect(() => {
    setStrength(calculatePasswordStrength(formData.password));
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
    <div className="w-fit p-2 px-4 bg-gradient-to-tr from-indigo-400 to-blue-300 grid place-items-center">
      <div className="w-full px-2 text-lg font-bold">
        <h3>Sign in</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-2">
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
        <div className="w-full bg-white shadow h-2 rounded-full flex items-center">
          <div
            style={{ width: `${strength}%` }}
            className={`transition-all h-full bg-red-400`}
          ></div>
          <FaChevronLeft size={8} />
        </div>
        <Button type="submit" variant={"default"} size={"default"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
