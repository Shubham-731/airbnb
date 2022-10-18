import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/logo.png"
          type="image/x-icon"
        />
        <title>Home | Airbnb</title>
      </Head>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
