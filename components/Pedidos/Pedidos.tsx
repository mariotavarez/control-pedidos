// Components
import TablaPedidos from "./TablaPedidos/TablaPedidos";

const PedidosComponent = (props: any) => {
  const pedidos = props.pedidos;

  return (
    <div>
      <div className="pedidos-container">
        <div className="numero-pedidos">
          <h1 className="titulo-pedidos">Pedidos</h1>
          <div className="table-pedidos">
            <TablaPedidos pedidos={pedidos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosComponent;
