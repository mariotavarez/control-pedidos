// Axios
import axios from "axios";
// Hooks
import { useState, useEffect } from "react";
// Config
import { URL } from "../config/constants.config";

const useComentarios = (API: string) => {
  // Comentarios
  const [comentarios, setComentarios] = useState<any[]>([]);
  // Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getComentarios = async () => {
      const responseComentarios = await axios(`${URL}${API}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIyLTExLTEyVDE1OjU1OjIzLjcxOFoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2NjgyNjg1MjMsImV4cCI6MTY3MDg2MDUyM30.hcRO332QZ1aqCe3cbXe6NYbPvXZ82NIJ6QqdMsFhzEg",
        },
      });

      // Valida que el estatus sea correcto
      if (responseComentarios.data.status === "NOK") {
        setComentarios([]);
        setLoading(false);
      } else {
        setComentarios(responseComentarios.data.comentarios);
        setLoading(false);
      }
    };

    // Ejecuta la funcion que devuelve el listado de comentarios del usuario
    getComentarios();
  }, []);

  return { comentarios, loading };
};

export default useComentarios;
