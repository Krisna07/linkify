import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { userProps } from "../Dashboard_components/utils/Interfaces";
import Provider from "../Dashboard_components/utils/Provider";
import Appnav from "../Dashboard_components/UI/Navbar/Appnav";

interface Authprops {
  children: React.ReactNode;
  user: userProps;
}

const MiscLayout = ({ children, user }: Authprops) => {
  return (
    <html lang="en">
      <body className="w-full min-h-screen    px-0 m-0  bg-dark  ">
        <div className="w-full  gap-8 bg-dark p-0 m-0 text-white overflow-hidden">
          <Provider>
            <header className="w-full h-fit sticky top-0 z-[100] shadow-bs ">
              <Appnav user={user} />
            </header>
            <main className="w-full  grid place-items-center py-8 z-10">
              <div className="w-full  flex items-center justify-center ">
                {children}
              </div>
            </main>
          </Provider>
        </div>
      </body>
    </html>
  );
};

export default MiscLayout;
