const { Router } = require("express");
const Butacas = require("../models/Butacas");
const router = Router();
const reservaController= require("../controllers/reserva");
const butacataController= require("../controllers/butacas");
const butacaRepositorio = require("../repository/butacasRepository");

router.get("/", async(req, res) => {
	const butacas = await butacaRepositorio.getButacas();
	return res.status(200).json({ butacas: butacas });
  });
  
router.post("/",reservaController.nuevaReserva);
router.put("/:columna",butacataController.editarButaca);
router.get("/:columna",butacaRepositorio.getButaca);
module.exports = router;