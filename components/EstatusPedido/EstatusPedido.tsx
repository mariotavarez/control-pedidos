// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Hooks
import { useRef, useState } from "react";
import useActualizacionPedido from "../../hooks/useActualizacionPedido";
// Bootstrap
import { Modal, Button } from "react-bootstrap";
import useListadoPedidos from "../../hooks/useListadoPedidos";

const EstatusPedido = ({
  pedido,
  setPedidos,
}: {
  pedido: any;
  setPedidos: any;
}) => {
  // Valida si muestra el modal
  const [show, setShow] = useState(false);
  // Cerrar Modal
  const handleClose = () => setShow(false);
  // Abrir Modal
  const handleShow = () => setShow(true);

  const formRef: any = useRef(null);

  const { getResponseEstatusPedido } = useActualizacionPedido(
    "/pedidos/actualizar-pedido"
  );

  const { getListadoPedidos } = useListadoPedidos();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    formData.set("estatusActual", pedido.estatus);

    const nuevoEstatus = formData.get("nuevoEstatus");

    const estatusPedido: any = {
      idPedido: pedido._id,
      estatus: nuevoEstatus,
    };
    getResponseEstatusPedido(estatusPedido).then(async () => {
      console.log("ghreighei");

      const listadoPedidos = await getListadoPedidos();
      setPedidos(listadoPedidos);
    });

    handleClose();
  };

  return (
    <div>
      <Button
        className="btn-estatus-pedido"
        variant="warning"
        onClick={handleShow}
      >
        Cambiar estatus
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cambio de estatus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="estatus-pedido">
            <form ref={formRef}>
              {/* ESTATUS ACTUAL */}
              <div className="form-group">
                <label className="label-login" htmlFor="correo">
                  Estatus actual
                </label>
                <select
                  name="estatusActual"
                  id="estatusActual"
                  className="input-login"
                >
                  <option disabled value={pedido.estatus}>
                    {pedido.estatus}
                  </option>
                </select>
              </div>
              {/* ESTATUS ACTUAL */}
              {/* NUEVO ESTATUS */}
              <div className="form-group">
                <label className="label-login" htmlFor="password">
                  Nuevo estatus
                </label>
                <select
                  name="nuevoEstatus"
                  id="nuevoEstatus"
                  className="input-login"
                >
                  <option value="">Seleccione un opción</option>
                  <option value="VOLANDO A TU DOMICILIO">
                    VOLANDO A TU DOMICILIO
                  </option>
                  <option value="ENTREGADO">ENTREGADO</option>
                </select>
              </div>
              {/* NUEVO ESTATUS */}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EstatusPedido;
