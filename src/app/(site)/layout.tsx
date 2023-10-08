"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={"w-full min-h-[100vh] grid place-items-center relative"}>
        <header className="w-full grid place-items-center shadow-bs fixed z-[999] bg-white ">
          <Navbar />
        </header>
        <div className=" relative oveflow-hidden pb-0"> {children}</div>
        <footer className="w-full grid place-items-center p-4 bg-gray-200 ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
