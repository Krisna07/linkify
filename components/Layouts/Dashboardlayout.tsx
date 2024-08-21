import React from "react";
import Provider from "../Dashboard_components/utils/Provider";
import Mainnav from "../Dashboard_components/UI/Navbar/MainNav";
import { userProps } from "../Dashboard_components/utils/Interfaces";
import { ToastContainer } from "react-toastify";

interface Dashboardprops {
  children: React.ReactNode;
  user: userProps;
}

const Dashboardlayout = ({ children, user }: Dashboardprops) => {
  console.log(user);
  return (
    <html lang="en">
      <body className="w-full min-h-screen relative   px-0 m-0  bg-dark  ">
        <ToastContainer />
        <div className="w-full  gap-8 bg-dark p-0 m-0 text-white overflow-hidden relative">
          <Provider>
            <>
              <header className="w-full h-fit sticky top-0 z-[100] ">
                <Mainnav user={user} />
              </header>
              <main className="w-full  grid place-items-center py-8 z-10">
                <div className="w-full  flex items-center justify-center ">
                  {children}
                </div>
              </main>
            </>
          </Provider>
        </div>
      </body>
    </html>
  );
};

export default Dashboardlayout;
