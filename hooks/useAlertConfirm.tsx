// Sweet Alert
import Swal from "sweetalert2";

const useAlertConfirm = (title: string, texto: string) => {
  const confirmarTransaccion = () => {
    return Swal.fire({
      title: title,
      text: texto,
      icon: "info",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    });
  };

  return { confirmarTransaccion };
};

export default useAlertConfirm;
