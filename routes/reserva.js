const { Router } = require("express");
const Butacas = require("../models/Butacas");
const router = Router();
const reservaRepository= require("../repository/reservaRepository");
const butacaRepositorio = require("../repository/butacasRepository");
const butacataController= require("../controllers/butacas");

router.get("/", async(req, res) => {
	const butacas = await butacaRepositorio.getButacas();
	return res.status(200).json({ butacas: butacas });
  });
  


  router.post("/", async(req, res) => {
	const reservas = req.body;
	reservaRepository.saveReserva(reservas);

  });
  
  router.put("/:columna",butacataController.editarButaca);
  router.get("/:columna",butacaRepositorio.getButaca);


module.exports = router;