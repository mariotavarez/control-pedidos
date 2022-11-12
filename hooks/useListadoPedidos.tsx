import { URL } from "../config/constants.config";
import axios from "axios";

const useListadoPedidos = () => {
  // // // Funcion asincrona que devuelve los pedidos de los usuarios
  const getListadoPedidos = async () => {
    const responsePedidos = await axios(`${URL}/pedidos/`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIyLTExLTEyVDE1OjU1OjIzLjcxOFoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2NjgyNjg1MjMsImV4cCI6MTY3MDg2MDUyM30.hcRO332QZ1aqCe3cbXe6NYbPvXZ82NIJ6QqdMsFhzEg",
      },
    });
    // Valida si el estatus es correcto
    if (responsePedidos.data.status === "NOK") {
      return [];
    } else {
      return responsePedidos.data.pedidos;
    }
  };

  return { getListadoPedidos };
};

export default useListadoPedidos;
