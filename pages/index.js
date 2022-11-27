import Head from "next/head";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductsBanner from "../components/ProductsBanner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout pageTitle='Monogram'>
        {/* Banner */}
        <Hero />

        <main id='main'>
          <section>
            <ProductsBanner />
          </section>
          <section>
            <Banner />
          </section>
          <section>
            <Products />
          </section>
        </main>
      </Layout>
    </div>
  );
}
