// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Iconos
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Puntuacion = (props: any) => {
  // Puntuacion
  let puntuacion = props.puntuacion;
  // Arreglo de estrellas
  const estrellas: any[] = [];
  // Agrega un icono de estrellas dependiendo la puntuacion asignada
  for (let index = 1; index <= puntuacion; index++) {
    estrellas.push(
      <div key={index}>
        <FontAwesomeIcon icon={"star"} />
      </div>
    );
  }
  // Regresa el total de estrellas
  return <div className="container-puntuacion">{estrellas}</div>;
};

export default Puntuacion;
