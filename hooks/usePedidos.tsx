// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Config
import { URL } from "../config/constants.config";
import { PedidosModel } from "../models/Pedidos/pedidos.model";

const usePedidos = (API: string) => {
  const [pedidos, setPedidos] = useState<PedidosModel[]>([]);

  useEffect(() => {
    // // // Funcion asincrona que devuelve los pedidos de los usuarios
    const getPedidos = async () => {
      const responsePedidos = await axios(`${URL}${API}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIxLTEwLTI5VDAyOjM2OjMzLjY2OVoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2MzU0NzQ5OTMsImV4cCI6MTYzODA2Njk5M30.UlkE0JtYkrXeDJ9i02mx5qZL-msbuJRJjXzzpmXgHHs",
        },
      });
      // Valida si el estatus es correcto
      if (responsePedidos.data.status === "NOK") {
        setPedidos([]);
      } else {
        setPedidos(responsePedidos.data.pedidos);
      }
    };

    getPedidos();
  }, []);

  return pedidos;
};

export default usePedidos;
