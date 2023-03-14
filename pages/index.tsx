import type { NextPage } from "next";
import Head from "next/head";
import ForCanvas from "../components/ForCanvas";
import MobileViewText from "../components/MobileView";
import styles from "../styles/Home.module.css";
import { isMobile } from "react-device-detect";
import Script from "next/script";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beau Coup</title>
        <meta name="description" content="Pushing the limits of an NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=87bb78af%22%3E"></Script>

      { !isMobile ? (
        <main className={styles.main}>
          <ForCanvas />
        </main>
      ) : (
        <MobileViewText />
      ) }
    </div>
  );
};

export default Home;
