// Hooks
import { Spinner } from "react-bootstrap";
// Hooks
import usePedidos from "../../../hooks/usePedidos";
// Components
import RutaPedido from "../../RutaPedido/RutaPedido";
import EstatusPedido from "../../EstatusPedido/EstatusPedido";
import SinDatos from "../../SinDatos/SinDatos";

const TablaListadoPedidos = () => {
  let { pedidos, setPedidos, loading } = usePedidos("/pedidos/");

  return (
    <div>
      {loading ? (
        <div className="centrar-listado-pedidos">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : pedidos.length === 0 ? (
        <SinDatos mensaje="Sin pedidos registrados" />
      ) : (
        <div className="table-responsive-listado-pedidos">
          <table>
            <thead>
              <tr>
                <th>Dirección</th>
                <th>Articulos</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="tabla-listado-pedidos-responsive">
              {pedidos.map((pedido) => (
                <tr key={pedido._id}>
                  {/* DIRECCION */}
                  <td>{`${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`}</td>
                  {/* DIRECCION */}
                  {/* ARTICULOS */}
                  <td>
                    {pedido.productos.map((producto: any) => (
                      <div key={producto.idPedido}>
                        <span>{` ${producto.nombreProducto}`}</span>
                      </div>
                    ))}
                  </td>
                  {/* ARTICULOS */}
                  {/* ESTATUS */}
                  <td>{`${pedido.estatus}`}</td>
                  {/* ESTATUS */}
                  <td>
                    <div className="container-btn-pedidos">
                      {/* ESTATUS PEDIDO */}
                      {pedido.estatus !== "ENTREGADO" && (
                        <EstatusPedido
                          pedido={pedido}
                          setPedidos={setPedidos}
                        />
                      )}
                      {/* ESTATUS PEDIDO */}
                      {/* VER RUTA */}
                      <RutaPedido pedido={pedido} />
                      {/* VER RUTA */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TablaListadoPedidos;
