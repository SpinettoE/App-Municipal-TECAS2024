import { Link } from "react-router-dom";
import IniciarSesion from "./usuario/IniciarSesion";
import Contenedor from "../components/Contenedor";

function Inicio({ usuarioLogeado }) {
  return (
    <>
      <h1 className="text-center">Inicio</h1>
      <div className="w-50 m-auto mt-4">
        {usuarioLogeado.logeado ? (
          <Contenedor>
            <h3 className="text-center">
              Bienvenido: {usuarioLogeado.usuario.nombre}{" "}
              {usuarioLogeado.usuario.apellido}!
            </h3>
            <div className="text-center mt-3">
              <p>ID: {usuarioLogeado.usuario._id}</p>
              <Link to="/crearNegocio" className="btn btn-primary">
                Crear Negocio
              </Link>
            </div>
          </Contenedor>
        ) : (
          <Contenedor>
            <h3 className="text-center">
              Inicia sesion para ingresar a la aplicacion <br />
            </h3>
            <IniciarSesion />
          </Contenedor>
        )}
      </div>
    </>
  );
}

export default Inicio;
