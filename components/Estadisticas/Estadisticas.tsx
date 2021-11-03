// Hooks
import { useEffect, useState } from "react";

const EstadisticasComponent = (props: any) => {
  // Pedidos
  const pedidos: any[] = props.pedidos;

  // Total Pedidos
  const [totalPedidos, setTotalPedidos] = useState(0);
  // Pedidos en espera
  const [pedidosEnEspera, setPedidosEnEspera] = useState(0);
  // Pedidos atendidos
  const [pedidosAtendidos, setPedidosAtendidos] = useState(0);

  useEffect(() => {
    setTotalPedidos(pedidos.length);
    // Total Pedidos
    let longitudPedidosEspera = pedidos.filter(
      (pedido) => pedido.estatus === "EN PROCESO"
    ).length;
    // Pedidos en espera
    setPedidosEnEspera(longitudPedidosEspera);
    // Pedidos atendidos
    let longitudPedidosAtendidos = pedidos.filter(
      (pedido) => pedido.estatus === "ENTREGADO"
    ).length;
    setPedidosAtendidos(longitudPedidosAtendidos);
  }, []);

  return (
    <div>
      <div className="container-estadisticas">
        <div className="numeros-estadisticas">
          <div className="total-pedidos">
            <p>Total de pedidos</p>
            <h1>{totalPedidos}</h1>
          </div>
          <div className="pedidos-espera">
            <p>Pedidos en espera</p>
            <h1>{pedidosEnEspera}</h1>
          </div>
          <div className="pedidos-atendidos">
            <p>Pedidos atentidos</p>
            <h1>{pedidosAtendidos}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadisticasComponent;
