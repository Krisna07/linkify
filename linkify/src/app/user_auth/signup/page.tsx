"use client";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const { username, email, password, passwordConfirmation } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}, Password Confirmation: ${passwordConfirmation}`
    );
  };
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value || "");
  };

  return (
    <div className="w-full py-8  grid place-items-center box-border   animate-text">
      <div className="lg:w-[1000px] grid place-items-center box-border bg-red-300 bg-white">
        a
        {/* <form
          onSubmit={handleSubmit}
          className=" md:w-[5/6] p-8 box-border bg-white  rounded-b-none shadow-bs box-border  grid gap-4 relative"
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
          <input type="hidden" name="remember" value="true" />
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
            <div key={index} className="rounded-md  grid gap-2  ">
              <label htmlFor={input.label} className="font-semibold">
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

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create account
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Signup;
