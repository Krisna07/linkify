// components/WebAppLayout.js

import Head from "next/head";
import React from "react";

export default function Linkify({ children }) {
  return (
    <>
      <Head>
        <title>My App - Web App</title>
        <meta name="description" content="My awesome web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="web-app-layout bg-red-200">{children}</div>
    </>
  );
}
