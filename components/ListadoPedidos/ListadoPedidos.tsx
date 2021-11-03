// Components
import TablaListadoPedidos from "./TablaListadoPedidos/TablaListadoPedidos";

const ListadoPedidos = () => {
  return (
    <div>
      <div className="listado-pedidos-container">
        <div className="numero-listado-pedidos">
          <h1 className="titulo-listado-pedidos">Listado de pedidos</h1>
          <div className="table-listado-pedidos">
            {/* TABLA LISTADO DE PEDIDOS */}
            <TablaListadoPedidos />
            {/* TABLA LISTADO DE PEDIDOS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoPedidos;
