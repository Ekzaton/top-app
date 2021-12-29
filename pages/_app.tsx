import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Router from "next/router";
import ym, {YMInitializer} from "react-yandex-metrika";

import "../styles/globals.css";

Router.events.on("routeChangeComplete", (url: string) => {
  if (typeof window !== "undefined") {
    ym("hit", url);
  }
});

export default function MyApp(props: AppProps): JSX.Element {
  const {Component, pageProps, router} = props;

  return (
    <>
      <Head>
        <title>My Top - наш лучший топ</title>
        <link rel="icon" href={"/favicon.ico"}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preconnect" href="https://mc.yandex.ru"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
        <meta property="og:locale" content="ru_RU"/>
      </Head>
      <YMInitializer accounts={[]} options={{webvisor: true, defer: true}} version="2"/>
      <Component {...pageProps}/>
    </>
  );
}
