import {AppProps} from "next/dist/shared/lib/router/router";

import Head from "next/head";

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top - наш лучший топ</title>
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
