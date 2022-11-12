// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Config
import { URL } from "../config/constants.config";
import { PedidosModel } from "../models/Pedidos/pedidos.model";

const usePedidos = (API: string) => {
  const [pedidos, setPedidos] = useState<PedidosModel[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // // // Funcion asincrona que devuelve los pedidos de los usuarios
    const getPedidos = async () => {
      const responsePedidos = await axios(`${URL}${API}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIyLTExLTEyVDE1OjU1OjIzLjcxOFoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2NjgyNjg1MjMsImV4cCI6MTY3MDg2MDUyM30.hcRO332QZ1aqCe3cbXe6NYbPvXZ82NIJ6QqdMsFhzEg",
        },
      });
      // Valida si el estatus es correcto
      if (responsePedidos.data.status === "NOK") {
        setPedidos([]);
        setLoading(false);
      } else {
        setPedidos(responsePedidos.data.pedidos);
        setLoading(false);
      }
    };

    getPedidos();
  }, []);

  return { pedidos, setPedidos, loading };
};

export default usePedidos;
