import "../globals.css";
import Mainnav from "../../components/Dashboard_components/mainnav";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";

import Provider from "../../components/Dashboard_components/Provider";

import { title } from "process";
import { getCurrentUser } from "../../lib/session";
import Button from "../../components/Global_components/Button";

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

  if (!user) {
    return (
      <html>
        <body>
          <div className="w-full h-screen grid items-center justify-center">
            Restricted area, user not authorized !!
            <Link href={"/auth/signin"}>
              <Button children="Sign In" size={"sm"} variant={"primary"} />
            </Link>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="w-full px-0 m-0  bg-black ">
        <div className="w-full gap-8 bg-black p-0 m-0 text-white">
          <Provider>
            <header className="w-full sticky top-0 z-20">
              <Mainnav user={user} />
            </header>
            <main className="w-full grid place-items-center py-8 z-10">
              <div className="w-full flex items-center justify-center">
                {children}
              </div>
            </main>
          </Provider>
        </div>
      </body>
    </html>
  );
}