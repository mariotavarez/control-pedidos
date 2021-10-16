import type { NextPage } from "next";

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
            <p>Inicio</p>
          </div>
          {/* HOME */}
          {/* PEDIDOS */}
          <div className="sidebar-option">
            <p>
              <i className="fa fa-list" aria-hidden="true"></i>
            </p>
            <p>Pedidos</p>
          </div>
          {/* PEDIDOS */}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
