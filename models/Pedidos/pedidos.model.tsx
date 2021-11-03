// Models
import { ProductosModel } from "../Productos/productos.model";

export interface PedidosModel {
  _id: string;
  idUsuario: string;
  productos: ProductosModel[];
  total: number;
  direccion: string;
  noExt: string;
  noInt: string;
  latitud: string;
  longitud: string;
  estatus: string;
  idDrone: string;
  fechaCreacion: string;
  fechaModificacion: string;
}
