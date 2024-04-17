"use client";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaLeaf, FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
  });

  const route = useRouter();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  //setting error states
  const [err, setErr] = useState<string>("");
  //handling input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //validating form

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setErr("Please fill in all fields.");
      return false;
    }
    if (formData.email.match!(regex)) {
      setErr("Invalid email");
      return false;
    }
    return true;
  };
  //handling form action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //signin authentication
    if (validateForm()) {
      const signinData = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (signinData?.error) {
        console.log(signinData.error);
      } else {
        route.push("/dashboard");
      }
      console.log(signinData);
    }
  };

  return (
    <div className="w-fit p-2 px-4 bg-gradient-to-tr from-indigo-400/50 to-blue-300/50 rounded grid tablet:grid-cols-2 place-items-center">
      <div className="w-full px-2  h-full flex flex-col gap-2">
        <FaLeaf color="green" size={40} />
        <h3 className="font-semibold text-xl ">Sign in</h3>
        <p>Continue with Linkify</p>
      </div>
      <form onSubmit={handleSubmit} className="w-[400px] grid gap-2">
        {err && <div className="text-red-500">{err}</div>}
        <Input
          label="Email"
          placeholder="Email"
          icon={<FaUser />}
          color="blue"
          data={formData.email}
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

        <span className="px-2 flex gap-2 items-center text-sm">
          Already a member?{" "}
          <Link href={"./signup"} className="underline">
            signup here
          </Link>
        </span>
        <Button type="submit" variant={"default"} size={"default"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
