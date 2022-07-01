const { Router } = require("express");
const Butacas = require("../models/Butacas");
const router = Router();
const reservaController= require("../controllers/reserva");
const butacaRepositorio = require("../repository/butacasRepository");
//const reservaRepositorio = require("../repository/reservaRepository");

router.get("/", async(req, res) => {
	const butacas = await butacaRepositorio.getButacas();
	return res.status(200).json({ butacas: butacas });
  });
  
/*router.get("/:id", async (req, res) => {
	let id = parseInt(req.params.id);
	const reserva = await getReserva(id);
	if (!reserva) {
		return res
			.status(404)
			.json({ error: true, mensaje: "Reserva no encontrada" + id });
	}
	return res.json(reserva);
});*/

//router.get("/:id",getReserva)
router.post("/",reservaController.nuevaReserva);

//router.put("/:id",updateReserva)

module.exports = router;