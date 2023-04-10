import Head from "next/head";
import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
          <Head>
            <title></title>
            <meta name="description" content="My awesome app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {children}
        </div>
      </body>
    </html>
  );
}
