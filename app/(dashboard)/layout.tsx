import "../globals.css";
// _app.js or _app.tsx
import "react-toastify/dist/ReactToastify.css";

import { getCurrentUser } from "../../lib/session";

import Dashboardlayout from "../../components/Layouts/Dashboardlayout";
import ErrorPage from "../../components/Layouts/ErrorPage";
import { userProps } from "../../components/Dashboard_components/utils/Interfaces";
import { getVerificationStatus } from "../../lib/getVerificationStatus";

export const metadata = {
  title: "Linkify",
  description: "A link sharing platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: userProps = await getCurrentUser();
  const getVerification = await getVerificationStatus();
  console.log(getVerification);
  if (!user) {
    return <ErrorPage />;
  }

  return <Dashboardlayout children={children} user={user} />;
}
