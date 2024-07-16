"use client";
import { useRouter } from "next/router";

export default function Redirect() {
  const Route = useRouter();
  return Route.push("/");
}
