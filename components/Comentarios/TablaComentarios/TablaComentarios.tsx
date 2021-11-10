import type { NextPage } from "next";
// Hooks
import useComentarios from "../../../hooks/useComentarios";
// Components
import Puntuacion from "../../Puntuacion/Puntuacion";
// Modal
import DetalleComentarios from "../../../components/DetalleComentarios/DetalleComentarios";
// Components
import SinDatos from "../../SinDatos/SinDatos";
import { Pagination, Spinner } from "react-bootstrap";

const TablaComentarios: NextPage = () => {
  // Obtiene el listado de comentarios de los usuarios
  const { comentarios, loading } = useComentarios("/pedidos/comentarios/");

  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

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
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Puntuación</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {comentarios.map((comentario) => (
                <tr key={comentario._id}>
                  {/* USUARIO */}
                  <td>{`${comentario.comentariosPedido.usuario.nombres} ${comentario.comentariosPedido.usuario.apellidoPaterno} ${comentario.comentariosPedido.usuario.apellidoMaterno}`}</td>
                  {/* USUARIO */}
                  {/* PUNTUACION */}
                  <td>
                    <Puntuacion
                      puntuacion={comentario.comentariosPedido.puntuacion}
                    />
                  </td>
                  {/* PUNTUACION */}
                  {/* COMENTARIOS */}
                  <td>
                    <DetalleComentarios comentarios={comentario} />
                  </td>
                  {/* COMENTARIOS */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        // TABLA COMENTARIOS
      )}
    </div>
  );
};

export default TablaComentarios;
