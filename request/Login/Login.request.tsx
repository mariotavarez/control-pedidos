// Constants
import Swal from "sweetalert2";
import { URL } from "../../config/constants.config";
// Models
import { LoginModel } from "../../models/Login/login.model";

export const iniciarSesionRequest = async (credenciales: LoginModel) => {
  Swal.showLoading(Swal.getDenyButton());
  return fetch(`${URL}/control/autenticacion/iniciar-sesion/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correo: credenciales.correo,
      password: credenciales.password,
    }),
  }).then((res) => {
    Swal.hideLoading();
    Swal.close();
    return res.json();
  });
};
