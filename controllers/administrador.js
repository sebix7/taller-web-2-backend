const {
	savePelicula,
	updatePelicula,
} = require("../repository/peliculasRepository");

const nuevaPelicula = async (req, res) => {
	const bodyRequest = req.body;
	const nuevo = {
		titulo: bodyRequest.titulo,
		imagen:
			"data:" +
			req.file.mimetype +
			";base64," +
			Buffer.from(req.file.buffer).toString("base64"),
		descripcion: bodyRequest.descripcion,
		genero: bodyRequest.genero,
		duracion: bodyRequest.duracion,
		actores: bodyRequest.actores,
		director: bodyRequest.director,
		trailer: bodyRequest.trailer,
		estreno: true,
	};
	const guardarPelicula = await savePelicula(nuevo);
	if (!guardarPelicula) {
		return res
			.status(404)
			.json({ mensaje: "No pudo crearse la película", error: true });
	}
	return res.status(201).json({ mensaje: "Pelicula creada correctamente" });
};

const editarPelicula = async (req, res) => {
	const bodyRequest = req.body;
	const datosPelicula = {
		id: bodyRequest.id,
		titulo: bodyRequest.titulo,
		imagen:
			"data:" +
			req.file.mimetype +
			";base64," +
			Buffer.from(req.file.buffer).toString("base64"),
		descripcion: bodyRequest.descripcion,
		genero: bodyRequest.genero,
		duracion: bodyRequest.duracion,
		actores: bodyRequest.actores,
		director: bodyRequest.director,
		trailer: bodyRequest.trailer,
		estreno: bodyRequest.estreno,
	};
	const actualizar = await updatePelicula(datosPelicula);
	if (actualizar.matchedCount == 0) {
		return res.status(404).json({ mensaje: "Película con id no encontrado" });
	}
	return res.status(200).json({ mensaje: "Pelicula editada correctamente" });
};

module.exports = { nuevaPelicula, editarPelicula };
