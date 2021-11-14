import type { NextPage } from "next";
// Head
import Head from "next/head";
// Hooks
import usePedidos from "../hooks/usePedidos";
// Layout
import { SidebarComponent, NavbarComponent } from "../layouts/index";
// Components
import Estadisticas from "../components/Estadisticas";
import Pedidos from "../components/Pedidos";
import UsuariosRegistrados from "../components/UsuariosRegistrados";
import Comentarios from "../components/Comentarios";
import React from "react";
import { Spinner } from "react-bootstrap";
import NavbarMobile from "../layouts/NavbarMobile/NavbarMobile";

const Dashboard: NextPage = () => {
  // Pedidos
  const { pedidos, loading } = usePedidos("/pedidos/");

  console.log(pedidos);

  return (
    <div className="main">
      <Head>
        <title>Dashboard MVP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
        />
      </Head>
      {/* CONTAINER DASHBOARD */}
      <div className="container-dashboard">
        {/* SIDEBAR */}
        <div className="sidebar">
          <SidebarComponent />
        </div>
        {/* SIDEBAR */}
        {/* NAVBAR MOBILE */}
        <div className="navbar-mobile">
          <NavbarMobile />
        </div>
        {/* NAVBAR MOBILE */}
        {/* NAVBAR */}
        <div className="navbar-dashboard">
          <NavbarComponent />
        </div>
        {/* NAVBAR */}
        {/* DASHBOARD */}
        <div className="dashboard">
          {/* ESTADISTICAS */}
          <div className="estadisticas">
            {loading ? (
              <div className="centrar-sin-datos">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <Estadisticas pedidos={pedidos} />
            )}
          </div>
          {/* ESTADISTICAS */}
          <div className="usuarios-registrados">
            {/* USUARIOS REGISTRADOS */}
            <UsuariosRegistrados />
            {/* USUARIOS REGISTRADOS */}
          </div>
          <div className="pedidos">
            {/* PEDIDOS */}
            {loading ? (
              <div className="centrar-sin-datos">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <Pedidos pedidos={pedidos} />
            )}
            {/* PEDIDOS */}
          </div>
          <div className="comentarios">
            {/* COMENTARIOS */}
            <Comentarios />
            {/* COMENTARIOS */}
          </div>
        </div>
        {/* DASHBOARD */}
      </div>
      {/* CONTAINER DASHBOARD */}
    </div>
  );
};

export default Dashboard;
