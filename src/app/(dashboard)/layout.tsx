import "../globals.css";
import Mainnav from "./components/mainnav";
import "react-toastify/dist/ReactToastify.css";

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
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className="w-full  gap-8 bg-black text-white">
        <header className="sticky top-0 z-20">
          <Mainnav />
        </header>

        <main className="w-full  grid place-items-center py-8 z-10">
          <div className="w-full flex items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
