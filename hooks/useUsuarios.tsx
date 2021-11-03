// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Config
import { URL } from "../config/constants.config";

const useUsuarios = (ENDPOINT: string) => {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const getUsuarios = async () => {
      // Obtiene el resultado de usuarios registrados de manera asincrona
      const responseUsuarios = await axios(`${URL}${ENDPOINT}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIxLTEwLTI5VDAyOjM2OjMzLjY2OVoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2MzU0NzQ5OTMsImV4cCI6MTYzODA2Njk5M30.UlkE0JtYkrXeDJ9i02mx5qZL-msbuJRJjXzzpmXgHHs",
        },
      });
      setUsuarios(responseUsuarios.data.usuarios);
    };
    getUsuarios();
  }, []);

  return usuarios;
};

export default useUsuarios;
