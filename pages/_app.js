import '@/styles/globals.css'
import Head from 'next/head';
import 'typeface-inter';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta property="og:title" content="Andrés Barrera" />
      <meta property="og:description" content="I help companies craft beautiful UI, orchestrate efficient automation, and prototype interconnected systems." />
      <meta property="og:image" content="/images/centerpiece.gif" />
      <meta property="og:url" content="www.drebarrera.com" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}
