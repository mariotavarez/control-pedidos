// Axios
import axios from "axios";
// Models
import { ActualizacionEstatusModel } from "../models/Pedidos/actualizacionEstatus.model";
// Config
import { URL } from "../config/constants.config";
// Hooks
import useAlert from "./useAlert";

const useActualizacionPedido = (API: string) => {
  const getResponseEstatusPedido = async (
    actualizacionEstatus: ActualizacionEstatusModel
  ) => {
    const actualizarEstatus = async () => {
      // Realiza la actualizacion del estatus del pedido
      const responseActualizacionPedido: any = await axios.put(
        `${URL}${API}`,
        actualizacionEstatus,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvam9zdWVpdHFAZ21haWwuY29tIiwiY3JlYXRlQXQiOiIyMDIyLTExLTEyVDE1OjUwOjIxLjA0N1oiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2NjgyNjgyMjEsImV4cCI6MTY3MDg2MDIyMX0.60XHq1ArSAsJRm0_uxAsVkVZ5fke1u48dLzDj6JWEbI",
          },
        }
      );
      // Valida si fue exitosa le peticion
      if (responseActualizacionPedido) {
        const { status, message } = responseActualizacionPedido.data;

        if (status === "OK") {
          useAlert("success", "", message);
        } else {
          useAlert("error", "", message);
        }
      } else {
        useAlert(
          "error",
          "",
          `No fue posible actualizar el estatus del pedido ${actualizacionEstatus.idPedido}`
        );
      }
    };
    // Realiza el llamado para actualizar el estatus del pedido
    await actualizarEstatus();
  };

  return {
    getResponseEstatusPedido,
  };
};

export default useActualizacionPedido;
