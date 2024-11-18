import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./views/Inicio.jsx";
import EditarUsuario from "./views/usuario/EditarUsuario.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import CrearNegocioScreen from "./views/negocio/CrearNegocioScreen.jsx";
import VerNegocio from "./views/negocio/VerNegocio.jsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoute  from "./components/InicioProtegido.jsx";
import BarraNavegacion from "./components/BarraNavegacion.jsx";
import CerrarSesion from "./views/usuario/CerrarSesion.jsx";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <BarraNavegacion></BarraNavegacion>
      <Routes>
        <Route path="/cerrar-sesion" element={<CerrarSesion />}></Route>
        <Route path="/" element={<Inicio />} />

        <Route path="/editar-usuario/:id" element={<EditarUsuario />} />
        <Route path="/crearNegocio" element={<CrearNegocioScreen />} />
        <Route path="/vernegocio/:idNegocio" element={<VerNegocio />} />
      </Routes>
      <ToastContainer />
      <Toaster />
    </>
  );
}

export default App;
