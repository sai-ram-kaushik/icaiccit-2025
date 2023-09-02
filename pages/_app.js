import "../styles/globals.css";
import AcademicPartners from "../components/AcademicPartners";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
// import Scrolling from "../components/Scrolling";
import Layouts from "../components/Layouts";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
        <AcademicPartners />
      </Layouts>
    </>
  );
}
