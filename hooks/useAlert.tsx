// Swal 2
import Swal from "sweetalert2";

const useAlert = (tipoAlerta: any, title: string, mensaje: string) => {
  Swal.fire({
    title: title,
    text: mensaje,
    icon: tipoAlerta,
    confirmButtonText: "Aceptar",
    timer: 7000,
  });
};

export default useAlert;
