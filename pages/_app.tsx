import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boop Society of Central Texas</title>
        <meta name="description" content="Boop Society of Central Texas" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
