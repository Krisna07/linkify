import "../globals.css";
import Mainnav from "./components/mainnav";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import Button from "../g_components/Button";
import Provider from "./components/Provider";
import { getCurrentUser } from "@/lib/session";
import { title } from "process";

// export interface userTypes {
//   email: String;
//   image?: String;
//   username: String;
//   name?: String;
// }

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
          <div className="grid items-center justify-center">
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
      <body className="w-full p-0 m-0 box-border ">
        <div className="gap-8 bg-black text-white">
          <Provider>
            <header className="sticky top-0 z-20">
              <Mainnav user={user} />
            </header>
            <main className="w-full grid place-items-center py-8 z-10">
              <div className="flex items-center justify-center">{children}</div>
            </main>
          </Provider>
        </div>
      </body>
    </html>
  );
}
