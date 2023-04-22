import Head from "next/head";
import Navbar from "./Navbar";

const LandingPageLayout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 My Company</p>
      </footer>
    </>
  );
};

export default LandingPageLayout;
