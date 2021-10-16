import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>FLYZZ - Control de pedidos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login />
    </div>
  );
};

export default Home;
