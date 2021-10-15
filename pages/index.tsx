import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className="main">
      <Login />
    </div>
  );
};

export default Home;
