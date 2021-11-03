import type { NextPage } from "next";

const NavbarComponent: NextPage = () => {
  // const nombre = localStorage.getItem("nombre");
  // const imagen = localStorage.getItem("imagen")?.toString();
  return (
    <div>
      <div className="container-navbar">
        <div className="navbar-info">
          <div className="navbar-nombre">
            {/* <p>Hola {nombre}</p> */}
            <p>Hola Mario Tavarez</p>
          </div>
          <div className="navbar-imagen">
            {/* <img className="img-navbar" src={imagen} alt="Imagen" /> */}
            <img
              className="img-navbar"
              src="https://theworldwentaway.files.wordpress.com/2021/08/spidey.jpg"
              alt="Imagen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
