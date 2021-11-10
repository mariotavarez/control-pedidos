// Link
import Link from "next/link";
// Sidebar
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
// Styles and assets
import "react-pro-sidebar/dist/css/styles.css";
// Icons
import { FaList, FaHome, FaSignOutAlt } from "react-icons/fa";

import Router from "next/router";
// Hooks
import useAlertConfirm from "../../hooks/useAlertConfirm";

const { confirmarTransaccion } = useAlertConfirm(
  "Cerrar sesión",
  "¿Está seguro de cerrar sesión?"
);

const handleExit = (event: any) => {
  event.preventDefault();
  // Valida si se ha confirmado la transaccion
  // Infoca al hook para confirmar el cierre de sesion
  const response = confirmarTransaccion();
  // Valida si se ha confirmado la transaccion
  response.then((responseAlert) => {
    // Si se confirma la transaccion
    if (responseAlert.isConfirmed) {
      Router.replace("/");
    }
  });
};

const SidebarComponent = () => {
  return (
    <div className="container-sidebar">
      <ProSidebar
        image={
          "https://control-pedidos.s3.us-east-2.amazonaws.com/login/login.jpg"
        }
        breakPoint="lg"
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Control Pedidos MVP
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <Link href="/dashboard">
              <MenuItem icon={<FaHome />}>Inicio</MenuItem>
            </Link>
            <Link href="/pedidos">
              <MenuItem icon={<FaList />}>Pedidos</MenuItem>
            </Link>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <FaSignOutAlt />
            {/* <Link href="/"> */}
            <span
              onClick={handleExit}
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                padding: "10px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cerrar sesión
            </span>
            {/* </Link> */}
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SidebarComponent;
