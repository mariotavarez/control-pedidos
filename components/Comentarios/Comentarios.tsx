import type { NextPage } from "next";
// Components
import TablaComentarios from "./TablaComentarios/TablaComentarios";

const ComentariosComponent: NextPage = () => {
  return (
    <div>
      <div className="comentarios-container">
        <div className="numero-comentarios">
          <h1 className="titulo-comentarios">Reseñas y comentarios</h1>
          <div className="table-comentarios">
            {/* TABLA COMENTARIOS */}
            <TablaComentarios />
            {/* TABLA COMENTARIOS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComentariosComponent;
