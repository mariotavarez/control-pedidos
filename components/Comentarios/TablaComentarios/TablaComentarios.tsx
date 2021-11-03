import type { NextPage } from "next";
// Hooks
import useComentarios from "../../../hooks/useComentarios";
// Components
import Puntuacion from "../../Puntuacion/Puntuacion";
// Modal
import DetalleComentarios from "../../../components/DetalleComentarios/DetalleComentarios";

const TablaComentarios: NextPage = () => {
  // Obtiene el listado de comentarios de los usuarios
  const comentarios = useComentarios("/pedidos/comentarios/");

  return (
    <div>
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
    </div>
  );
};

export default TablaComentarios;
