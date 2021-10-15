import type { NextPage } from "next";
// Components
import FormLogin from "../FormLogin/FormLogin";

const Login: NextPage = () => {
  return (
    <div className="container-login">
      {/* BACKGROUND LOGIN */}
      <div className="background-login"></div>
      {/* BACKGROUND LOGIN */}
      {/* FORM LOGIN */}
      <div className="form-login">
        <FormLogin />
      </div>
      {/* FORM LOGIN */}
    </div>
  );
};

export default Login;
