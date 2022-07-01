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

const ultimoIdDeFuncionCargada = async () => {
	const request = await Model.findOne({}).sort({ idFuncion: -1 }).limit(1);
	const id = request.idFuncion;
	return id;
};

const saveFunciones = async (data) => {
	const request = await Model.insertMany(data);
	console.log(request);
	return request;
};

module.exports = {
	getFuncionesDeUnaPelicula,
	saveFunciones,
	ultimoIdDeFuncionCargada,
};
