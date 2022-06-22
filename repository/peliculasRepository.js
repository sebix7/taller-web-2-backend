const Model = require("../models/Pelicula");

const getPeliculas = () => {
	const response = Model.find({}, { _id: 0, __v: 0 }).sort({ titulo: 1 });
	return response;
};

const getUnaPelicula = (id) => {
	const response = Model.findOne({ id });
	return response;
};

const savePelicula = async (data) => {
	const pelicula = new Model(data);
	const request = await pelicula.save().catch((err) => null);
	return request;
};

module.exports = { getPeliculas, getUnaPelicula, savePelicula };
