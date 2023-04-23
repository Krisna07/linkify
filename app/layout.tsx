// components/RootLayout.js

import Head from "next/head";
import React from "react";
import LandingPageLayout from "./layouts/LandingpageLayout";
import Linkify from "./layouts/LinkifyLayout";
import "../styles/globals.css";
export default function RootLayout({
  children,
  isLandingPage,
}: {
  children: React.ReactNode;
  isLandingPage?: boolean;
}) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My awesome app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLandingPage ? (
        <LandingPageLayout>{children}</LandingPageLayout>
      ) : (
        <Linkify>{children}</Linkify>
      )}
    </>
  );
}
