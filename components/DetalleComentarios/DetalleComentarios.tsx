// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Hooks
import { useState } from "react";
// Bootstrap
import { Modal, Button } from "react-bootstrap";

const DetalleComentarios = (props: any) => {
  const { comentarios } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Ver comentarios
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comentarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-detalle-comentarios">
            <p>Comentarios:</p>
            <p>{`${comentarios.comentariosPedido.comentarios}`}</p>
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

export default DetalleComentarios;
