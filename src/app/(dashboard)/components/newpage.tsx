"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "@/app/g_components/Button";

interface NewpageProps {
  name: string;
  link: string;
  icon: JSX.Element;
  date: string;
}

export default function Newpage({ item, add }: any) {
  const [social, setSocial] = useState<string>("facebook");
  const [username, setUsername] = useState<string>("");

  const getIcon = () => {
    switch (social) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSocial(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSocial = {
      name: social,
      link: `https://www.${social}.com/${username}`,
      icon: getIcon(),
      date: new Date().toLocaleDateString(),
    };
    add(false);
    item(newSocial);
  };

  return (
    <form
      className="w-fit bg-white absolute p-4 top-[120%] right-0  rounded-lg z-40 text-black grid gap-2 transition-all"
      onSubmit={submitForm}
    >
      <h2 className="w-full text-center text-lg font-semibold">Social</h2>
      <select
        name="social"
        value={social}
        onChange={handleChange}
        id="social"
        className="bg-gray-800 text-white"
      >
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
      </select>
      <label htmlFor="username">
        <h2>Username</h2>
        <span className="text-sm flex">
          https://www.{social}.com/
          <div className="border-b border-gray-900">
            <input
              type="text"
              id="username"
              className="text-sm bg-white outline-none border-none w-[100px]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </span>
      </label>
      <Button children="Submit" variant="primary" size="sm" />
    </form>
  );
}
