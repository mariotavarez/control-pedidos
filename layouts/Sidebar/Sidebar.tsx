import type { NextPage } from "next";
// Link
import Link from "next/link";

const SidebarComponent: NextPage = () => {
  return (
    <div>
      <div className="container-sidebar">
        <div className="sidebar-options">
          {/* HOME */}
          <div className="sidebar-option">
            <p>
              <i className="fa fa-home" aria-hidden="true"></i>
            </p>
            <Link href="/dashboard">
              <p>
                <a>Inicio</a>
              </p>
            </Link>
          </div>
          {/* HOME */}
          {/* PEDIDOS */}
          <div className="sidebar-option">
            <p>
              <i className="fa fa-list" aria-hidden="true"></i>
            </p>
            <Link href="/pedidos">
              <p>
                <a>Pedidos</a>
              </p>
            </Link>
          </div>
          {/* PEDIDOS */}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
