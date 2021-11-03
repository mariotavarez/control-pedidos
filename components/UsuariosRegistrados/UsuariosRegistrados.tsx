import type { NextPage } from "next";
// Components
import TablaUsuarios from "./TablaUsuarios/TablaUsuarios";

const UsuariosRegistradosComponent: NextPage = () => {
  return (
    <div>
      <div className="usuarios-registrados-container">
        <div className="numero-usuarios-registrados">
          {/* TITULO USUARIOS REGISTRADOS */}
          <h1 className="titulo-usuarios-registrados">Usuarios registrados</h1>
          {/* TITULO USUARIOS REGISTRADOS */}
          {/* TABLE USUARIOS REGISTRADOS */}
          <div className="table-usuarios-registrados">
            <TablaUsuarios />
          </div>
          {/* TABLE USUARIOS REGISTRADOS */}
        </div>
      </div>
    </div>
  );
};

export default UsuariosRegistradosComponent;
