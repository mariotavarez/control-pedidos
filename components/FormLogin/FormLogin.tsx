// Next
import type { NextPage } from "next";
import Router from "next/router";
// Models
import { LoginModel } from "../../models/Login/login.model";
// Hooks
import { useForm } from "../../hooks/useForm";
import useAlert from "../../hooks/useAlert";
// Request
import { iniciarSesionRequest } from "../../request/Login/Login.request";
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
        // Nombre
        localStorage.setItem(
          "nombre",
          `${responseInicioSesion.informacionUsuario.nombre} ${responseInicioSesion.informacionUsuario.apellidoPaterno}`
        );
        // Imagen
        localStorage.setItem(
          "imagen",
          responseInicioSesion.informacionUsuario.imagen
        );
        // Token
        localStorage.setItem("token", responseInicioSesion.token);
        return Router.replace("/dashboard");
      } else {
        useAlert(
          "error",
          "Credenciales incorrectas",
          responseInicioSesion.message
        );
      }
    }
  }

  return (
    <div>
      <div className="container-form">
        {/* LOGO */}
        <div className="logo">
          <img
            src="https://control-pedidos.s3.us-east-2.amazonaws.com/general/logo-negro.png"
            alt="logo"
          />
        </div>
        {/* LOGO */}
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
              maxLength={100}
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
              maxLength={15}
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
