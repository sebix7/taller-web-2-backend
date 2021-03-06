const express = require("express");
const { upload } = require("../config/multer");
const { validarNuevaPelicula } = require("../config/peliculaValidator");
const {
	nuevaPelicula,
	editarPelicula,
	eliminarPelicula,
	agregarFunciones,
} = require("../controllers/administrador");
const router = express.Router();

router.post("/pelicula/nueva", validarNuevaPelicula, upload, nuevaPelicula);
router.put("/pelicula/editar", upload, editarPelicula);
router.delete("/pelicula/eliminar/:id", eliminarPelicula);
router.post("/funciones/agregar/", agregarFunciones);

module.exports = router;
