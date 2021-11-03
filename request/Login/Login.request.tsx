// Constants
import { URL } from "../../config/constants.config";
// Models
import { LoginModel } from "../../models/Login/login.model";

export const iniciarSesionRequest = async (credenciales: LoginModel) => {
  return fetch(`${URL}/control/autenticacion/iniciar-sesion/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correo: credenciales.correo,
      password: credenciales.password,
    }),
  }).then((res) => res.json());
};
