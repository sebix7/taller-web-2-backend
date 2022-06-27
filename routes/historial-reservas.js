const { Router } = require("express");
const router = Router();
//const reservaController= require("../controllers/reserva");
const reservaRepositorio = require("../repository/reservaRepository");

/*router.get("/",(req, res)=>{
	res.json(reservaRepositorio.getReservas)
});*/
router.get("/",reservaRepositorio.getReservas);
router.delete("/:id",reservaRepositorio.deleteReserva);

module.exports = router;
