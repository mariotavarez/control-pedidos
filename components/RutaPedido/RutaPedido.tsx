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

const RutaPedido = ({ pedido }) => {
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
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ruta del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-ruta-pedido">
            <div className="mapa-pedido">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: { KEY_MAPS },
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
              <div>
                <button className="btn-generar-ruta" onClick={handleSubmit}>
                  Generar ruta
                </button>
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

export default RutaPedido;
