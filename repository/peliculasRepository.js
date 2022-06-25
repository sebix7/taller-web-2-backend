const Model = require("../models/Pelicula");

const getPeliculas = () => {
	const response = Model.find({}, { _id: 0, __v: 0 }).sort({ titulo: 1 });
	return response;
};

const getUnaPelicula = (id) => {
	const response = Model.findOne({ id },{ _id: 0, __v: 0 });
	return response;
};

const savePelicula = async (data) => {
	const ultimaPeliculaCargada = await Model.findOne({})
		.sort({ id: -1 })
		.limit(1);
	if (!ultimaPeliculaCargada) {
		data.id = 1;
	} else {
		data.id = ultimaPeliculaCargada.id + 1;
	}
	const pelicula = new Model(data);
	const request = await pelicula.save().catch((err) => null);
	return request;
};

const updatePelicula = async (data) => {
	const request = await Model.updateOne({ id: data.id }, data);
	return request;
};

module.exports = { getPeliculas, getUnaPelicula, savePelicula, updatePelicula };
