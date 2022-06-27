const { Router } = require("express");
const Butacas = require("../models/Butacas");
const router = Router();
const reservaController= require("../controllers/reserva");
//const reservaRepositorio = require("../repository/reservaRepository");

router.get("/", (req, res) => {
    res.json(Butacas.obtenerButacas());
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