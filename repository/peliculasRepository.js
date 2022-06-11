const Model = require("../models/Pelicula");

const getPeliculas = () => {
	const response = Model.find().sort({ titulo: 1 });
	return response;
};

const getUnaPelicula = (id) => {
	const response = Model.findOne({ id });
	return response;
};

const savePelicula = async (data) => {
	const pelicula = new Model(data);
	const request = await pelicula.save();
	return request;
};

module.exports = { getPeliculas, getUnaPelicula, savePelicula };
