import "../globals.css";
import Mainnav from "./components/mainnav";
import "react-toastify/dist/ReactToastify.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import Button from "../g_components/Button";
import Provider from "./components/Provider";

export const metadata = {
  title: "Linkify",
  description: "A link sharing platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <>
        <div className="grid items-center justify-center">
          Restricted area, user not authorized !!
          <Link href={"/auth/signin"}>
            <Button children="Sign In" size={"sm"} variant={"primary"} />
          </Link>
        </div>
      </>
    );
  }
  const loggedUser = session?.user;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="w-full  gap-8 bg-black text-white">
        <Provider>
          <header className="sticky top-0 z-20">
            <Mainnav user={loggedUser} />
          </header>

          <main className="w-full  grid place-items-center py-8 z-10">
            <div className="w-full flex items-center justify-center">
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
