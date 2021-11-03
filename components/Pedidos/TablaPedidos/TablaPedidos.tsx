// Detalle Pedidos
import DetallePedidos from "../../DetallePedidos/DetallePedidos";

const TablaPedidos = (props: any) => {
  // Obtiene el listado de pedidos
  const pedidos = props.pedidos;

  return (
    <div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Dirección</th>
              <th>Estatus</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido: any) => (
              <tr key={pedido._id}>
                {/* DIRECCION */}
                <td>{`${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`}</td>
                {/* DIRECCION */}
                {/* DIRECCION */}
                <td>{`${pedido.estatus}`}</td>
                {/* DIRECCION */}
                {/* CORREO */}
                <td>
                  <DetallePedidos pedido={pedido} />
                </td>
                {/* CORREO */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPedidos;
