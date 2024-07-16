import "../globals.css";

import Landingpage from "../../components/Layouts/Landingpage";
import { Inter } from "next/font/google";

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
        className={`${inter.className} w-full h-fit p-0 m-[0_auto]  dark:bg-dark leading -[100%] `}
      >
        <Landingpage children={children} />
      </body>
    </html>
  );
}
