import type { NextPage } from "next";
// Hooks
import useUsuarios from "../../../hooks/useUsuarios";

const TablaUsuarios: NextPage = () => {
  // Estado de usuarios que se mostrara en la tabla
  const usuarios = useUsuarios("/usuarios/");

  return (
    <div>
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
    </div>
  );
};

export default TablaUsuarios;
