const { Router } = require("express");
const {
	getUnaPelicula,
	getPeliculas,
} = require("../repository/peliculasRepository");
const router = Router();

router.get("/", async (req, res) => {
	const listaPeliculas = await getPeliculas();
	return res.status(200).json({ peliculas: listaPeliculas });
});

router.get("/:id", async (req, res) => {
	let id = parseInt(req.params.id);
	const pelicula = await getUnaPelicula(id);
	if (!pelicula) {
		return res
			.status(404)
			.json({ error: true, mensaje: "No existe la película con el id " + id });
	}
	return res.json(pelicula);
});

module.exports = router;
