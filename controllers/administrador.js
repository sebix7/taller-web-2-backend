const {
	savePelicula,
	updatePelicula,
	deletePelicula,
} = require("../repository/peliculasRepository");
const { validationResult } = require("express-validator");

const nuevaPelicula = async (req, res) => {
	let errors = validationResult(req.body);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errores: errors.array() });
	}
	console.log(req.body);

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
	let errors = validationResult(req.body);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errores: errors.array() });
	}
	const bodyRequest = req.body;
	const datosPelicula = {
		id: bodyRequest.id,
		titulo: bodyRequest.titulo,
		descripcion: bodyRequest.descripcion,
		genero: bodyRequest.genero,
		duracion: bodyRequest.duracion,
		actores: bodyRequest.actores,
		director: bodyRequest.director,
		trailer: bodyRequest.trailer,
		estreno: bodyRequest.estreno,
	};
	if (req.file) {
		datosPelicula.imagen =
			"data:" +
			req.file.mimetype +
			";base64," +
			Buffer.from(req.file.buffer).toString("base64");
	} else {
		datosPelicula.imagen = req.body.imagen;
	}
	const actualizar = await updatePelicula(datosPelicula);
	if (!actualizar.modifiedCount) {
		return res.status(400).json({ mensaje: "No se modificó ningún dato" });
	}
	if (actualizar.matchedCount == 0) {
		return res.status(404).json({ mensaje: "Película con id no encontrado" });
	}
	return res.status(200).json({ mensaje: "Pelicula editada correctamente" });
};

const eliminarPelicula = async (req, res) => {
	const id = req.params.id;
	console.log(id);
	const borrar = await deletePelicula(id);
	if (!borrar.deletedCount) {
		return res
			.status(400)
			.json({ mensaje: "No se encontró la película con el id asignado" });
	}
	return res.status(200).json({ mensaje: "Pelicula borrada correctamente" });
};

module.exports = { nuevaPelicula, editarPelicula, eliminarPelicula };
