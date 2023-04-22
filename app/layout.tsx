import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import Navbar from "./Components/Navbar";
import LandingPageLayout from "./Components/LandingpageLayout";
import WebAppLayout from "./Components/LinkifyLayout";

export default function RootLayout({
  children,
  isLandingPage,
}: {
  children: React.ReactNode;
  isLandingPage?: boolean;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Linkify</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLandingPage ? (
        <LandingPageLayout children={undefined} pageTitle={undefined}>
          {children}
        </LandingPageLayout>
      ) : (
        <WebAppLayout children={undefined} pageTitle={undefined}>
          {children}
        </WebAppLayout>
      )}
    </html>
  );
}
