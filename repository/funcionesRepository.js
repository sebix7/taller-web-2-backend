const Model = require("../models/Funcion");

const getFuncionesDeUnaPelicula = async (id) => {
	const response = await Model.find(
		{ idPelicula: id },
		{ _id: 0, __v: 0 }
	).sort({
		fecha: 1,
		hora: 1,
	});
	return response;
};

module.exports = { getFuncionesDeUnaPelicula };
