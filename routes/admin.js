const express = require("express");
const { upload } = require("../config/multer");
const {
	nuevaPelicula,
	editarPelicula,
	eliminarPelicula,
} = require("../controllers/administrador");
const router = express.Router();

router.post("/pelicula/nueva", upload, nuevaPelicula);
router.put("/pelicula/editar", upload, editarPelicula);
router.delete("/pelicula/eliminar/:id", eliminarPelicula);

module.exports = router;
