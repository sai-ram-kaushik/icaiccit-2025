import "../styles/globals.css";
import AcademicPartners from "../components/AcademicPartners";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Scrolling from "../components/Scrolling";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ICAICCIT-2023</title>
        <meta name="description" content="Conference Website - ICAICCIT - 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aiccit_logo.png " />
      </Head>
      <Navbar />
      <Scrolling />
      <Component {...pageProps} />
      <AcademicPartners />
      <Footer />
    </>
  );
}
