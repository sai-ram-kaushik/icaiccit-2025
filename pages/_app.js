import "../styles/globals.css";
import AcademicPartners from "../components/AcademicPartners";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";  

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <AcademicPartners />
      <Footer />
    </>
  );
}
