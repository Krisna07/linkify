// components/RootLayout.js

import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import Navbar from "./Landingpage/Components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My awesome app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {children}
    </>
  );
}
