const express = require("express");
const { upload } = require("../config/multer");
const { nuevaPelicula } = require("../controllers/administrador");
const router = express.Router();

router.post("/pelicula/nueva", upload, nuevaPelicula);

module.exports = router;
