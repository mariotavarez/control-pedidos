import type { NextPage } from "next";
// Head
import Head from "next/head";
// Layout
import Sidebar from "../layouts/Sidebar/index";

const Dashboard: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>Dashboard MVP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        />
      </Head>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
