import "../globals.css";

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
      <body className={"w-full min-h-[100vh] grid place-items-center relative"}>
        {/* <header className="w-full grid place-items-center shadow-bs fixed z-[999] bg-white ">
          Login
        </header> */}
        <div className="w-full relative oveflow-hidden pb-0 grid place-items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
