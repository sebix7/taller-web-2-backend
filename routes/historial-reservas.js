const { Router } = require("express");
const router = Router();
const reservaRepositorio = require("../repository/reservaRepository");


router.get("/:id",reservaRepositorio.getReservas);
router.delete("/eliminar/:idReserva", reservaRepositorio.deleteReserva);

module.exports = router;
