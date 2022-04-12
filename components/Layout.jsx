import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout(props) {
  return (
    <main role="main" style={{ background: "#EEEEEE", minHeight: "100vh" }}>
      <Head>
        <title>Event Planning App</title>
        <meta name="description" content="Event Planning Apps by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
    </main>
  );
}
