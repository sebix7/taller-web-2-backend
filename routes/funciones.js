const { Router } = require("express");
const Lista = require("../models/ListaDeFunciones");
const {
	getFuncionesDeUnaPelicula,
} = require("../repository/funcionesRepository");
const router = Router();

router.get("/:id", async (req, res) => {
	let id = parseInt(req.params.id);
	const response = await getFuncionesDeUnaPelicula(id);
	res.status(200).json(response);
});

module.exports = router;
