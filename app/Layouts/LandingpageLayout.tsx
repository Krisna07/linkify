// components/LandingPageLayout.js

import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>My App - Landing Page</title>
        <meta name="description" content="My awesome landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="landing-page-layout">{children}</div>
    </>
  );
}
