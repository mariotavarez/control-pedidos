// Detalle Pedidos
import React from "react";
import DetallePedidos from "../../DetallePedidos/DetallePedidos";
// Components
import SinDatos from "../../SinDatos/SinDatos";
// Bootstrap Table
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";

const TablaPedidos = (props: any) => {
  // Obtiene el listado de pedidos
  const pedidos = props.pedidos;

  const items = [];
  for (const pedido of pedidos) {
    items.push({
      id: pedido._id,
      direccion: `${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`,
      estatus: `${pedido.estatus}`,
      acciones: <DetallePedidos pedido={pedido} />,
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
      text: "Dirección",
    },
    {
      dataField: "estatus",
      text: "Estatus",
    },
    {
      dataField: "acciones",
      text: "Acciones",
    },
  ];

  return (
    <div>
      {pedidos.length === 0 ? (
        // SIN DATOS REGISTRADOS
        <SinDatos mensaje={"Sin pedidos registardos"} />
      ) : (
        // SIN DATOS REGISTRADOS
        <div className="table-responsive">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={items}
            columns={columns}
            pagination={paginationFactory({ sizePerPage: 10 })}
          />
        </div>
      )}
    </div>
  );
};

export default TablaPedidos;
