import { FaArrowLeft } from "react-icons/fa";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import Authlayout from "../../components/Layouts/Authlayout";
import Background from "../../components/Landing_components/Background";
import { ToastContainer } from "react-toastify";
import { inter, roboto } from "../../fonts/fonts";

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
        className={`${inter.className} w-full min-h-[100vh] grid place-items-center relative bg-gray-200 overflow-hidden `}
      >
        <div className="absolute">
          <ToastContainer />
        </div>
        <Background />
        <Authlayout children={children} />
      </body>
    </html>
  );
}
