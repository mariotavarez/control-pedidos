import type { NextPage } from "next";
// Models
import { LoginModel } from "../../models/Login/login.model";
// Hooks
import { useForm } from "../../hooks/useForm";

import useSWR from "swr";

const FormLogin: NextPage = () => {
  // Credenciales del usuario
  const credenciales: LoginModel = {
    usuario: "null",
    contrasena: "null",
  };

  const { onChange, onSubmit, values } = useForm(iniciarSesion, credenciales);

  async function iniciarSesion() {
    console.log("iniciar sesión");

    console.log(values);
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
          {/* USUARIO */}
          <div className="form-group">
            <label className="label-login" htmlFor="usuario">
              Usuario
            </label>
            <input
              id="usuario"
              name="usuario"
              className="input-login"
              type="text"
              onChange={onChange}
            />
          </div>
          {/* USUARIO */}
          {/* CONTRASEÑA */}
          <div className="form-group">
            <label className="label-login" htmlFor="contrasena">
              Contraseña
            </label>
            <input
              id="contrasena"
              name="contrasena"
              className="input-login"
              type="password"
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
