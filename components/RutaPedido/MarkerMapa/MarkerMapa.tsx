import type { NextPage } from "next";

const MarkerMapa: NextPage = () => {
  return (
    <div>
      <img
        width="30px"
        height="30px"
        src="https://control-pedidos.s3.us-east-2.amazonaws.com/mapas/drone.png"
        alt="Marker"
      />
    </div>
  );
};

export default MarkerMapa;
