import type { NextPage } from "next";
import React from "react";
import { Spinner } from "react-bootstrap";
// Hooks
import useUsuarios from "../../../hooks/useUsuarios";
import SinDatos from "../../SinDatos/SinDatos";

const TablaUsuarios: NextPage = () => {
  // Estado de usuarios que se mostrara en la tabla
  const { usuarios, loading } = useUsuarios("/usuarios/");

  return (
    <div>
      {loading ? (
        <div className="centrar-sin-datos">
          {/* LOADING */}
          <Spinner animation="border" variant="primary" />
          {/* LOADING */}
        </div>
      ) : usuarios.length === 0 ? (
        // SIN DATOS
        <SinDatos mensaje={"Sin usuarios registrados"} />
      ) : (
        // SIN DATOS
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Dirección</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario._id}>
                  {/* USUARIO */}
                  <td>{`${usuario.nombres} ${usuario.apellidoPaterno}`}</td>
                  {/* USUARIO */}
                  {/* DIRECCION */}
                  <td>{`${usuario.calle} ${usuario.noExt} ${usuario.noInt}`}</td>
                  {/* DIRECCION */}
                  {/* CORREO */}
                  <td>{usuario.correo}</td>
                  {/* CORREO */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TablaUsuarios;
