// Next
import type { NextPage } from "next";
import Router from "next/router";
// Models
import { LoginModel } from "../../models/Login/login.model";
// Hooks
import { useForm } from "../../hooks/useForm";
// Request
import { iniciarSesionRequest } from "../../request/Login/Login.request";
// SweetAlert
import Swal from "sweetalert2";
// Credenciales del usuario
const credenciales: LoginModel = {
  correo: "",
  password: "",
};

const FormLogin: NextPage = () => {
  const { onChange, onSubmit, values } = useForm(iniciarSesion, credenciales);

  /**
   * @author Mario Tavarez
   * @date 15/10/2021
   * @description Inicia sesion validando que el correo y password sean correctos
   * @returns
   */
  async function iniciarSesion() {
    // Solo si el usuario ha ingresado sus credenciales
    if (values.correo !== "" && values.password !== "") {
      const responseInicioSesion = await iniciarSesionRequest(values);
      // Valida que se haya iniciado sesion correctamente
      if (responseInicioSesion.status === "OK") {
        return Router.replace("/dashboard");
      } else {
        Swal.fire({
          title: "Credenciales incorrectas",
          text: responseInicioSesion.message,
          icon: "info",
          confirmButtonText: "Aceptar",
          timer: 7000,
        });
      }
    }
  }

  return (
    <div>
      <div className="container-form">
        {/* ENCABEZADOS */}
        <div className="encabezados">
          <p className="bienvenido">Bienvenido de vuelta</p>
          <p className="ingrese-credenciales">Ingrese sus credenciales</p>
        </div>
        {/* ENCABEZADOS */}
        {/* FORMULARIO */}
        <form className="formulario" onSubmit={onSubmit}>
          {/* CORREO */}
          <div className="form-group">
            <label className="label-login" htmlFor="correo">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              className="input-login"
              type="email"
              maxLength="100"
              onChange={onChange}
            />
          </div>
          {/* CORREO */}
          {/* CONTRASEÑA */}
          <div className="form-group">
            <label className="label-login" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              className="input-login"
              type="password"
              maxLength="15"
              onChange={onChange}
            />
          </div>
          {/* CONTRASEÑA */}
          <div className="container-btn-iniciar">
            <button type="submit" className="btn-iniciar">
              Iniciar
            </button>
          </div>
        </form>
        {/* FORMULARIO */}

        {/* FORMULARIO */}
      </div>
    </div>
  );
};

export default FormLogin;
