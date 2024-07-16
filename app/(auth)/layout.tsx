import { FaArrowLeft } from "react-icons/fa";
import "../globals.css";
import Link from "next/link";

export const metadata = {
  title: "Linkify",
  description: "A link sharing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>The Linkify</title>
      </head>
      <body
        className={
          "w-full min-h-[100vh] grid place-items-center relative bg-gray-200 "
        }
      >
        <div className="w-full tablet:w-[800px] relative oveflow-hidden pb-0 p-4 grid place-items-center bg-white tablet:rounded box-border">
          {children}
          <Link href={"/"}>
            <div className="w-8 h-8 bg-gray-300 absolute top-4 right-4 rounded-full grid place-items-center rotate-[45deg] hover:rotate-0 transition-all">
              <FaArrowLeft />
            </div>
          </Link>
        </div>
      </body>
    </html>
  );
}
