import type { NextPage } from "next";
import React from "react";
import { Spinner } from "react-bootstrap";
// Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
// Pagination Factory
import paginationFactory from "react-bootstrap-table2-paginator";
// Hooks
import useUsuarios from "../../../hooks/useUsuarios";
import SinDatos from "../../SinDatos/SinDatos";

const TablaUsuarios = () => {
  // Estado de usuarios que se mostrara en la tabla
  const { usuarios, loading } = useUsuarios("/usuarios/");

  const items = [];
  for (const usuario of usuarios) {
    items.push({
      id: usuario._id,
      usuario: `${usuario.nombres} ${usuario.apellidoPaterno}`,
      direccion: `${usuario.calle} ${usuario.noExt} ${usuario.noInt}`,
      correo: `${usuario.correo}`,
    });
  }

  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
    },
    {
      dataField: "usuario",
      text: "Usuario",
    },
    {
      dataField: "direccion",
      text: "Dirección",
    },
    {
      dataField: "correo",
      text: "Correo",
    },
  ];

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
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={items}
            columns={columns}
            pagination={paginationFactory({ sizePerPage: 10 })}
          />
        </div>
      )}
    </div>
  );
};

export default TablaUsuarios;
