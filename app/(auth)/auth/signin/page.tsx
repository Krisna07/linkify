"use client";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaLeaf, FaUser } from "react-icons/fa";
import Input from "../Formcomponents/Input";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiAlertCircle } from "react-icons/fi";
import Button from "../../../../components/Global_components/Button";
import { toast } from "react-toastify";
import Loading from "../Formcomponents/Loading";
import sendCode from "../lib/resetcode";

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

  const [loading, isLoading] = useState(false);

  const validateForm = (data: User) => {
    if (!data.email || !data.password) {
      return false;
    }
    return true;
  };

  //handling form action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //signin authentication
    if (!validateForm(formData)) {
      toast.warn("Please fill out all fields correctly.");
      return;
    }

    try {
      // Show loading toast
      toast.loading("Loading....");
      isLoading(true);
      // Attempt to sign in
      const signinData = await signIn("credentials", {
        email: formData.email.toLowerCase(),
        password: formData.password,
        redirect: false,
      });

      signinData && toast.dismiss();

      // Handle sign-in errors
      if (signinData?.error) {
        const data = JSON.parse(signinData.error);
        toast.warn(data.message);
        isLoading(false);
        return;
      }

      // Success: Redirect and show success toast
      route.push("/dashboard");
      toast.success("Login Successful");
    } catch (error) {
      // Handle unexpected errors
      console.error("Login failed: ", error);
      toast.error("An unexpected error occurred. Please try again.");
      isLoading(false);
    }
  };
  const Emailregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

  //handling verification code for the passwordreset
  const handleresetCode = async () => {
    const resetEmail = formData.email && formData.email;
    // console.log(resetEmail);
    if (resetEmail) {
      toast("verifying user and sending code");
      const data = await sendCode(resetEmail);
      if (data?.status !== 200) {
        return toast.warn(data?.message);
      }
      toast.done("Reset code sent to the email");
      route.push(`./reset/${data?.id}=true`);

      // route.push(`./reset/${formData.email.split("@")[0]}`);
    } else {
      toast.warn("Please enter the valid email.");
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full  text-black box-border tablet:h-fit px-4 py-8  rounded flex flex-col  justify-center tablet:grid tablet:grid-cols-2 gap-12 place-items-center  z-30 bg-silver">
          <div className="w-full px-2 box-border tablet:h-full grid gap-2">
            <div className="w-full flex tablet:flex-col items-center tablet:items-start justify-between tablet:justify-start border-b tablet:border-none py-2  ">
              <FaLeaf color="green" size={40} className="tablet:block hidden" />
              <div>
                <h3 className="font-semibold text-xl ">Sign in</h3>
                <p>Continue with Linkify</p>
              </div>
              <FaLeaf color="green" size={40} className="block tablet:hidden" />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full grid gap-2 box-border"
          >
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
            <span
              // href={`./reset/${formData.email.split("@")[0]}`}
              onClick={handleresetCode}
              className="underline px-2 text-sm"
            >
              Forgot Password?
            </span>

            <span className="px-2 flex gap-2 items-center text-sm">
              New here?
              <Link href={"./signup"} className="underline">
                signup here
              </Link>
            </span>
            <Button
              type="submit"
              variant={"accent"}
              size={"default"}
              className="mx-2"
            >
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
      )}
    </>
  );
};

export default SignInPage;
