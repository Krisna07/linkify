import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import Navbar from "./Components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full  min-h-screen flex items-center justify-center">
          {/* <Head>
            <title></title>
            <meta name="description" content="My awesome app" />
            <link rel="icon" href="/favicon.ico" />
          </Head> */}
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
