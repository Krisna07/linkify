import "../globals.css";

import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";

import { getCurrentUser } from "../../lib/session";
import Button from "../../components/Global_components/Button";
import Dashboardlayout from "../../components/Layouts/Dashboardlayout";
import ErrorPage from "../../components/Layouts/ErrorPage";

export const metadata = {
  title: "Linkify",
  description: "A link sharing platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: any = await getCurrentUser();
  console.log(user);

  if (!user) {
    return <ErrorPage />;
  }

  return <Dashboardlayout children={children} user={user} />;
}
