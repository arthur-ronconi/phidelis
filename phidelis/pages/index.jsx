import Head from "next/head";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import styles from "../styles/Home.module.css";
import Hero from "../sections/Hero";
import Travel from "../sections/Travel";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Phidelis</title>
        <link rel="icon" href="/favicon.ico" />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <Hero />
      <Travel />
      <Footer />
    </div>
  );
}
