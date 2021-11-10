const SinDatos = ({ mensaje }: { mensaje: string }) => {
  return (
    <div className="container-sin-datos">
      <div className="container-texto-sin-datos">
        <p>{mensaje}</p>
      </div>
    </div>
  );
};

export default SinDatos;
