"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "@/app/g_components/Button";
import { toast } from "react-toastify";
import { get } from "http";

interface NewpageProps {
  name: string;
  link: string;
  icon: JSX.Element;
  date: string;
}

export default function Newpage({ item, add }: any) {
  const [social, setSocial] = useState<string>("facebook");
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState(null);

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
  // const fetchUser = async (username: any) => {
  //   const encodedUsername = encodeURIComponent(username);
  //   const response = await fetch(
  //     `https://graph.facebook.com/${encodedUsername}?fields=name,friends`,
  //   );
  //   if (response.status === 200) {
  //     const data = await response.json();
  //     setUser(data);
  //   } else {
  //     console.error("Error fetching user data:", response.status);
  //   }
  // };
  // fetchUser("Realmadrid");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSocial(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSocial = username
      ? {
          name: social,
          link: `https://www.${social}.com/${username}`,
          icon: getIcon(),
          date: new Date().toLocaleDateString(),
        }
      : "";
    add(false);
    item(newSocial ? newSocial : "");
    !username ? toast("Please enter the username !!!") : "";
  };

  return (
    <form
      className="w-fit  absolute p-4 top-[120%] right-0  rounded-lg z-40 text-black bg-gray-300 grid gap-2 transition-all"
      onSubmit={submitForm}>
      <h2 className="w-full text-left text-lg font-semibold">New Card</h2>
      <select
        name="social"
        value={social}
        onChange={handleChange}
        id="social"
        className="bg-gray-800 text-white px-2 p-1 rounded-lg">
        <option value="facebook">Facebook</option>
        <option value="twitter">Twitter</option>
        <option value="instagram">Instagram</option>
      </select>
      <label htmlFor="username">
        <h2 className="font-[500] text-lg">Username</h2>
        <span className="text-sm flex">
          https://www.{social}.com/
          <div className="border-b border-gray-900">
            <input
              type="text"
              id="username"
              className="text-sm bg-gray-300 outline-none border-none w-[100px]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </span>
      </label>
      <Button
        children="Submit"
        variant="primary"
        size="sm"
      />
    </form>
  );
}
