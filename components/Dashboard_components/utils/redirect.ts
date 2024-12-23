"use client";

import { useRouter } from "next/navigation";

const Redirect = (route: string) => {
  const Route = useRouter();

  return Route.push(route);
};

export default Redirect;
