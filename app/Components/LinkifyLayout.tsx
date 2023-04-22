import Head from "next/head";

const WebAppLayout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <nav></nav>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 My Company</p>
      </footer>
    </>
  );
};

export default WebAppLayout;
