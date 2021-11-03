// Axios
import axios from "axios";
// Hooks
import { useState, useEffect } from "react";
// Config
import { URL } from "../config/constants.config";

const useComentarios = (API: string) => {
  // Comentarios
  const [comentarios, setComentarios] = useState<any[]>([]);

  useEffect(() => {
    const getComentarios = async () => {
      const responseComentarios = await axios(`${URL}${API}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIxLTEwLTI5VDAyOjM2OjMzLjY2OVoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2MzU0NzQ5OTMsImV4cCI6MTYzODA2Njk5M30.UlkE0JtYkrXeDJ9i02mx5qZL-msbuJRJjXzzpmXgHHs",
        },
      });

      // Valida que el estatus sea correcto
      if (responseComentarios.data.status === "NOK") {
        setComentarios([]);
      } else {
        setComentarios(responseComentarios.data.comentarios);
      }
    };

    // Ejecuta la funcion que devuelve el listado de comentarios del usuario
    getComentarios();
  }, []);

  return comentarios;
};

export default useComentarios;
