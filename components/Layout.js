import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
