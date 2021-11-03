// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Hooks
import { useState } from "react";
// Modal
import { Modal, Button } from "react-bootstrap";

const DetallePedidos = (props: any) => {
  const { pedido } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Ver detalle
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalle del pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-detalle-pedidos">
            <div className="datos-detalle">
              <p>Dirección:</p>
              <p>{`${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`}</p>
            </div>
            <div className="datos-detalle">
              <p>Latitud:</p>
              <p>{pedido.latitud}</p>
            </div>
            <div className="datos-detalle">
              <p>Longitud:</p>
              <p>{pedido.longitud}</p>
            </div>
            <div className="datos-detalle">
              <p>Fecha creación:</p>
              <p>{pedido.fechaCreacion}</p>
            </div>
            <div className="datos-detalle">
              <p>Productos:</p>
              <div>
                {pedido.productos.map((producto: any) => (
                  <div key={producto.idPedido}>
                    <br />
                    <span>Nombre:</span>
                    <span>{` ${producto.nombreProducto}`}</span>
                    <br />
                    <span>Cantidad:</span>
                    <span>{` ${producto.cantidad}`}</span>
                    <br />
                    <span>Notas:</span>
                    <span>{` ${producto.notasAdicionales}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetallePedidos;
