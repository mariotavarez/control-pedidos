import useSWR from "swr";
import { URL } from "../config/constants.config";
import { LoginModel } from "../models/Login/login.model";

import { iniciarSesionRequest } from "../request/Login/Login.request";

export default function useUser(credenciales: LoginModel) {
  const { data, mutate, error } = useSWR(
    `${URL}/autenticacion/iniciar-sesion/`,
    iniciarSesionRequest
  );

  const loading = !data && !error;
  const loggedIn = !error && data;
  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}
