// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Hooks
import { useState } from "react";
// Bootstrap
import { Modal, Button } from "react-bootstrap";
// Maps
import GoogleMapReact from "google-map-react";
// Constants
import { KEY_MAPS } from "../../config/constants.config";
// Components
import MarkerMapa from "./MarkerMapa/MarkerMapa";
// Models
import { PedidosModel } from "../../models/Pedidos/pedidos.model";

const RutaPedido = ({ pedido }: { pedido: PedidosModel }) => {
  // Crea las propiedades iniciales para mostrar el punto a donde se debe dirigir el drone
  const propiedadesIniciales = {
    center: {
      lat: parseFloat(pedido.latitud),
      lng: parseFloat(pedido.longitud),
    },
    zoom: 17,
  };

  //   const { comentarios } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Generando ruta");
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Ver ruta
      </Button>

      <Modal
        show={show}
        size="lg"
        centered={true}
        scrollable={true}
        fullscreen={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="titulo-detalle-ruta">Ruta del Pedido </p>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-ruta-pedido">
            <div className="mapa-pedido">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: KEY_MAPS,
                }}
                defaultCenter={propiedadesIniciales.center}
                defaultZoom={propiedadesIniciales.zoom}
                yesIWantToUseGoogleMapApiInternals
              >
                <MarkerMapa />
              </GoogleMapReact>
            </div>
            <div className="datos-pedido">
              <p>
                <strong> Dirección: </strong>
                {`${pedido.direccion} ${pedido.noExt} ${pedido.noInt}`}
              </p>
              <p>
                <strong> Latitud: </strong> {pedido.latitud}
              </p>
              <p>
                <strong> Longitud: </strong> {pedido.longitud}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RutaPedido;
