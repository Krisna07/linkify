"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLeaf, FaLock, FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

import Button from "../../../../components/Global_components/Button";
import { FiAlertCircle, FiMail, FiUser } from "react-icons/fi";
import calculatePasswordStrength from "../lib/PasswordStrengthCheck";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface User {
  username: string;
  email: string;
  password: string;
  passwordmatch: string;
}

const signuppage: React.FC = () => {
  //defining objects
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
    passwordmatch: "",
  });

  //defineing the states
  const [err, setErr] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  //handling the input check
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

  const nameCheck = (object: string) => {
    return (
      !object.match(/^[A-Za-z0-9]+(?:[._][A-Za-z0-9]+)*$/) &&
      setErr("Invalid characters username")
    );
  };

  const emailCheck = (object: string) => {
    return object.match(regex);
  };

  useEffect(() => {
    setStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  useEffect(() => {
    formData.username && nameCheck(formData.username);
  }, [formData.username]);

  const validateForm = (formData: User) => {
    const PasswordLength = formData.password.split("").length;
    if (!formData.email || !formData.password) {
      setErr("Please fill in all fields.");
      return false;
    }
    if (nameCheck(formData.username)) {
      setErr("Username error");
      return false;
    }
    if (emailCheck(formData.email)) {
      setErr("Please enter the valid email address.");
      return false;
    }
    if (strength < 60) {
      setErr("Create  strong password");
      return false;
    }
    if (PasswordLength < 6) {
      setErr("Create a longer password");
      return false;
    }
    if (formData.password !== formData.passwordmatch) {
      setErr("Password didn't match");
      return false;
    }
    if (formData.email.match!(regex)) {
      setErr("Invalid email");
      return false;
    }

    return true;
  };

  useEffect(() => {
    err && toast(err);
  }, [err]);

  const route = useRouter();
  //submit form data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm(formData)) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/Json",
        },
        body: JSON.stringify({
          username: formData.username.toLowerCase(),
          email: formData.email.toLocaleLowerCase(),
          password: formData.password,
        }),
      };
      const api = "/api/user";
      toast.loading("Creating user......");
      const response = await fetch(api, options);

      response && toast.dismiss();
      const data = await response.json();

      if (data.status === 200) {
        toast.success(`${data.message} "Logging in "`);
        const logInData = await signIn("credentials", {
          email: formData.email.toLocaleLowerCase(),
          password: formData.password,
          redirect: false,
        });
        if (logInData?.error) {
          return toast.error("Credentials do not match");
        } else {
          route.refresh();
          route.push("/dashboard");
        }
      } else {
        toast.error(data.message);
        setErr(data.message);
        return;
      }
    } else {
      return;
    }
  };
  // const MailingOption = {
  //   email: "krisnachhetri07@gmail.com",
  //   message: "This is the teset email ",
  // };

  return (
    <div className="w-full h-screen text-black box-border tablet:h-fit px-4 py-8  rounded flex flex-col  justify-center tablet:grid tablet:grid-cols-2 gap-12 place-items-center relative z-30 bg-silver ">
      <div className="w-full px-2 box-border tablet:h-full grid gap-2">
        <div className="w-full flex tablet:flex-col items-center tablet:items-start justify-between tablet:justify-start border-b tablet:border-none py-2  ">
          {/* <FaLeaf color="green" size={40} className="tablet:block hidden" /> */}

          <div>
            <h3 className="font-semibold text-xl ">Sign up</h3>
            <p>Get started with Linkify</p>
          </div>
          <FaLeaf color="green" size={40} className="block tablet:hidden" />
        </div>
        <div className="h-fit grid gap-2">
          <span className="text-sm font-semibold">Contiune with</span>
          <div className="flex gap-2 text-[20px]">
            <FaGithub className="hover:scale-[1.1]" />
            <FcGoogle className="hover:scale-[1.1]" />
            <FaFacebook className="hover:scale-[1.1]" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full grid gap-2 box-border">
        <Input
          label="Username"
          placeholder="Username"
          icon={<FiUser />}
          color="blue"
          data={formData.username}
          onchange={handleInputChange}
        />
        <Input
          label="Email"
          placeholder="Email"
          icon={<FiMail />}
          color="blue"
          type="email"
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
        <Input
          label="Retype Password"
          name="passwordmatch"
          type="password"
          placeholder="Retype-Password"
          icon={<BsEyeSlash />}
          secondIcon={<BsEye />}
          color="green"
          data={formData.passwordmatch}
          onchange={handleInputChange}
        />

        {formData.password ? (
          <div className="w-full h-4 bg-white shadow relative mx-2 text-white  rounded-full flex items-center">
            <div
              style={{ width: `${strength}%` }}
              className={`rounded-full relative transition-all h-full  ${
                strength < 80
                  ? "bg-gradient-to-r from-[red]/25 to-[red]/75 "
                  : "bg-primary"
              } flex items-center`}
            >
              <FaLock size={12} className="absolute right-2" />
            </div>
          </div>
        ) : (
          ""
        )}

        <span className="px-2 flex gap-2 items-center text-sm">
          Already a member?
          <Link href={"./signin"} className="underline">
            Login here
          </Link>
        </span>
        <Button
          type="submit"
          variant={"submit"}
          size={"sm"}
          children={"submit"}
          className="mx-2"
        />
      </form>
      {
        <div
          className={`w-fit text-sm font-semibold gap-2 ${
            err ? "right-[10px] opacity-1" : "right-[-1000px] opacity-0"
          } transition-all  grid place-items-center fixed bottom-2   bg-red-300 rounded-lg overflow-hidden bg-white`}
        >
          <div className="w-full h-full p-4 flex items-center gap-2 relative ">
            <FiAlertCircle /> {err}
            <div
              style={err ? { width: "100%" } : { width: "0%" }}
              className={`h-[4px] transition-all duration-[4000ms] bg-green-600 absolute bottom-0 right-0`}
            ></div>
          </div>
        </div>
      }
    </div>
  );
};

export default signuppage;
