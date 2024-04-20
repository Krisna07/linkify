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
      <body
        className={
          "w-full min-h-[100vh] grid place-items-center relative bg-gray-200 "
        }
      >
        <div className="w-full tablet:w-[800px] relative oveflow-hidden pb-0 p-4 grid place-items-center bg-white tablet:rounded box-border">
          {children}
        </div>
      </body>
    </html>
  );
}
