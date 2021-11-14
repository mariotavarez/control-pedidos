// Hooks
import { Spinner } from "react-bootstrap";
// Hooks
import usePedidos from "../../../hooks/usePedidos";
// Components
import RutaPedido from "../../RutaPedido/RutaPedido";
import EstatusPedido from "../../EstatusPedido/EstatusPedido";
import SinDatos from "../../SinDatos/SinDatos";
// Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
// Pagination Factory
import paginationFactory from "react-bootstrap-table2-paginator";

const TablaListadoPedidos = () => {
  let { pedidos, setPedidos, loading } = usePedidos("/pedidos/");

  const items = [];
  for (const pedido of pedidos) {
    items.push({
      id: pedido._id,
      direccion: `${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`,
      articulos: `${pedido.productos[0].nombreProducto}`,
      acciones: (
        <div className="container-btn-pedidos">
          {/* ESTATUS PEDIDO */}
          {pedido.estatus !== "ENTREGADO" && (
            <EstatusPedido pedido={pedido} setPedidos={setPedidos} />
          )}
          {/* ESTATUS PEDIDO */}
          {/* VER RUTA */}
          <RutaPedido pedido={pedido} />
          {/* VER RUTA */}
        </div>
      ),
    });
  }

  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
    },
    {
      dataField: "direccion",
      text: "Direccion",
    },
    {
      dataField: "articulos",
      text: "Articulos",
    },
    {
      dataField: "acciones",
      text: "Acciones",
    },
  ];

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
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={items}
            columns={columns}
            pagination={paginationFactory({ sizePerPage: 5 })}
          />
        </div>
      )}
    </div>
  );
};

export default TablaListadoPedidos;
