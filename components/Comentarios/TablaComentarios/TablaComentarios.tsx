import type { NextPage } from "next";
// Hooks
import useComentarios from "../../../hooks/useComentarios";
// Components
import Puntuacion from "../../Puntuacion/Puntuacion";
// Modal
import DetalleComentarios from "../../../components/DetalleComentarios/DetalleComentarios";
// Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
// Pagination Factory
import paginationFactory from "react-bootstrap-table2-paginator";
// Components
import SinDatos from "../../SinDatos/SinDatos";
import { Pagination, Spinner } from "react-bootstrap";

const TablaComentarios: NextPage = () => {
  // Obtiene el listado de comentarios de los usuarios
  const { comentarios, loading } = useComentarios("/pedidos/comentarios/");

  const items = [];
  for (const comentario of comentarios) {
    items.push({
      id: comentario._id,
      usuario: `${comentario.comentariosPedido.usuario.nombres} ${comentario.comentariosPedido.usuario.apellidoPaterno} ${comentario.comentariosPedido.usuario.apellidoMaterno}`,
      puntuacion: (
        <Puntuacion puntuacion={comentario.comentariosPedido.puntuacion} />
      ),
      comentarios: <DetalleComentarios comentarios={comentario} />,
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
      dataField: "puntuacion",
      text: "Puntuación",
    },
    {
      dataField: "comentarios",
      text: "Comentarios",
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
      ) : comentarios.length === 0 ? (
        // SIN DATOS
        <SinDatos mensaje="Sin comentarios registrados" />
      ) : (
        // SIN DATOS
        // TABLA COMENTARIOS
        <div className="table-responsive">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={items}
            columns={columns}
            pagination={paginationFactory({ sizePerPage: 5 })}
          />
        </div>
        // TABLA COMENTARIOS
      )}
    </div>
  );
};

export default TablaComentarios;
