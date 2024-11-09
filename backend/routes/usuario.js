const express = require("express");
const router = express.Router();
const passport = require("passport");
const Usuario = require("../models/usuario.js");
const { Habilitacion,Catastro,Planeamiento,Bomberos,ObrasPrivadas,IngresosPublicos,Admin} = require("../middleware/validaRol.js") 
const { catchAsync } = require("../utils.js");
const {
  autenticarUsuario,
  cerrarSesion,
  verUsuarioLogeado,
  editarUsuario,
  verUsuarios,
  verUsuario,
} = require("../controllers/usuario.js");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/autenticar",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  }),
  catchAsync(autenticarUsuario)
);

router.get("/", catchAsync(verUsuarios));

router.get("/cerrar-sesion", catchAsync(cerrarSesion));

router.get("/usuario-logeado", catchAsync(verUsuarioLogeado));

router.put("/editar/:id", catchAsync(editarUsuario));

router.get("/:id", catchAsync(verUsuario));


router.post("/habilitaciones",Habilitacion,(req,res)=>{
  res.status(200).json("Habilitaciones")
});

module.exports = router;
