import "../globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Notice from "./Components/Notice";

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
        className={
          "w-full min-h-[100vh] grid place-items-center m-0 p-0 relative bg-slate-900"
        }
      >
        <header className="w-full top-0 grid place-items-center shadow z-[999]   ">
          {/* <Notice /> */}
        </header>
        <nav className=" w-full top-0 grid place-items-center shadow z-[999] sticky ">
          <Navbar />
        </nav>
        <main className="w-full relative oveflow-hidden pb-0">{children}</main>
        <footer className="w-full h-fit grid place-items-center p-4 text-white ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
