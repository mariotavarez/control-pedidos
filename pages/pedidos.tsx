import type { NextPage } from "next";
// Head
import Head from "next/head";
// Components
import { NavbarComponent, SidebarComponent } from "../layouts";
import ListadoPedidos from "../components/ListadoPedidos";
// Bootstrap
import NavbarMobile from "../layouts/NavbarMobile/NavbarMobile";
const PedidosComponent: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>Pedidos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
        />
      </Head>
      {/* CONTAINER DASHBOARD */}
      <div className="container-listado-pedidos">
        {/* SIDEBAR */}
        <div className="sidebar-pedidos">
          <SidebarComponent />
        </div>
        {/* SIDEBAR */}
        {/* NAVBAR MOBILE */}
        <div className="navbar-mobile">
          <NavbarMobile />
        </div>
        {/* NAVBAR MOBILE */}
        {/* NAVBAR */}
        <div className="navbar-dashboard-pedidos">
          <NavbarComponent />
        </div>
        {/* NAVBAR */}
        {/* DASHBOARD */}
        <div className="dashboard-pedidos">
          <div className="estadisticas"></div>
          <div className="listado-pedidos">
            <ListadoPedidos />
          </div>
        </div>
        {/* DASHBOARD */}
      </div>
      {/* CONTAINER DASHBOARD */}
    </div>
  );
};

export default PedidosComponent;
