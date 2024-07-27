import "../globals.css";

// import Landingpage from "../../components/Layouts/Landingpage";
import { Inter } from "next/font/google";
import Button from "../../components/Global_components/Button";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import Background from "../../components/Landing_components/Background";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} w-full h-fit p-0 m-0 grid place-items-center  bg-dark leading -[100%]  text-silver relative`}
      >
        <Background />
        <div className="w-full h-screen grid place-items-center  relative z-40 ">
          <div className="grid place-items-center gap-4 p-2 shadow-bs rounded-lg text-center bg-primary p-4">
            <span className="flex gap-2 items-center text-xl font-bold">
              Linkify <FaLeaf color="green" />
            </span>
            <p className="w-full tablet:w-[400px]">
              This is a demo of the Linkify app. Please sign up or login to
              access the full functionality.
            </p>
            <Link href={"/auth/signin"}>
              <Button
                variant={"default"}
                children="Login in"
                size={"default"}
                icon={true}
              />
            </Link>
            <Button
              variant={"accent"}
              children="Sign up"
              size={"default"}
              icon={true}
            />
          </div>
        </div>
        {/* <Landingpage children={children} /> */}
      </body>
    </html>
  );
}
