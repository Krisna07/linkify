"use client";
import Link from "next/link";
import { useState } from "react";

interface SignInProps {
  onSignUpClick: () => void;
}

const SignInForm: React.FC<SignInProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
    // handle sign-in logic
  };

  return (
    <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
      <div className="">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Signin to your account
        </h2>
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
      <div className="text-center">
        <p className="text-gray-700">
          Don't have an account?{" "}
          <button
            className="text-white hover:underline focus:outline-none"
            type="button"
          >
            <Link href={"/user_auth/signup"}> Sign up</Link>
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
