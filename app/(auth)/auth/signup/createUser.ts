"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface newUser {
  username: string;
  email: string;
  password: string;
}

export default async function CreateUser(formData: newUser) {}
