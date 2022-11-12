// Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Config
import { URL } from "../config/constants.config";

const useUsuarios = (ENDPOINT: string) => {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cargando
    setLoading(true);
    const getUsuarios = async () => {
      // Obtiene el resultado de usuarios registrados de manera asincrona
      const responseUsuarios = await axios(`${URL}${ENDPOINT}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvcnJlbyI6Im1hcmlvdGF2YXJlekBmbHl6ei5pbmZvIiwiY3JlYXRlQXQiOiIyMDIyLTExLTEyVDE1OjU1OjIzLjcxOFoiLCJzdWJqZWN0IjoiSU5JQ0lPX1NFU0lPTiJ9LCJpYXQiOjE2NjgyNjg1MjMsImV4cCI6MTY3MDg2MDUyM30.hcRO332QZ1aqCe3cbXe6NYbPvXZ82NIJ6QqdMsFhzEg",
        },
      });
      setUsuarios(responseUsuarios.data.usuarios);
      setLoading(false);
    };
    getUsuarios();
  }, []);

  return { usuarios, loading };
};

export default useUsuarios;
