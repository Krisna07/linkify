"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaLeaf, FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";
import Button from "@/app/g_components/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiAlertCircle } from "react-icons/fi";

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
  useEffect(() => {
    const timeout: any = setTimeout(() => setErr(""), 5000);
    timeout;
  }, [err]);

  const validateForm = (data: User) => {
    if (!data.email || !data.password) {
      setErr("Please fill in all fields.");
      return false;
    }
    return true;
  };
  //handling form action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //signin authentication
    if (validateForm(formData)) {
      const signinData = await signIn("credentials", {
        email: formData.email.toLocaleLowerCase(),
        password: formData.password,
        redirect: false,
      });
      if (signinData?.error) {
        setErr("Credentials do not match");
        return;
      } else {
        route.refresh();
        route.push("/dashboard");
      }
      // console.log(signinData);
    }
  };

  return (
    <div className="w-full h-screen text-black box-border tablet:h-fit px-4 py-8  rounded flex flex-col  justify-center tablet:grid tablet:grid-cols-2 gap-12 place-items-center">
      <div className="w-full px-2 box-border tablet:h-full grid gap-2">
        <div className="w-full flex tablet:flex-col items-center tablet:items-start justify-between tablet:justify-start border-b tablet:border-none py-2  ">
          <FaLeaf color="green" size={40} className="tablet:block hidden" />
          <div>
            {" "}
            <h3 className="font-semibold text-xl ">Sign in</h3>
            <p>Continue with Linkify</p>
          </div>
          <FaLeaf color="green" size={40} className="block tablet:hidden" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full grid gap-2 box-border">
        {/* {err && <div className="text-red-500">{err}</div>} */}
        <Input
          label="Email/ Username"
          placeholder="Email"
          name="email"
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
      {
        <div
          className={`w-fit text-sm font-semibold gap-2 ${
            err ? "right-[10px] opacity-1" : "right-[-1000px] opacity-0"
          } transition-all  grid place-items-center fixed bottom-2   bg-red-300 rounded-lg overflow-hidden`}
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

export default SignInPage;
